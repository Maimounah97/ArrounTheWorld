const User = require("../models/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.signup = async function (req, res) {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.login = async function (req, res) {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    const correctPassword = await bcrypt.compare(req.body.password, user.password)
    if(!correctPassword) {
        return res.sendStatus(400);
    }

    const payload = {
        userId: user.id
    }
    const secretKey = process.env.JWT_SECRET_KEY
    const token = jwt.sign(payload, secretKey)

    res.json({userToken: token})

  } catch (err) {
    res.sendStatus(400);
  }
};

// // --- function to get a single user plants --- this is rigth 😍🤩 ---
// module.exports.findOneSingleUserPlants = (req, res) => {
//   User.findOne({ _id: req.params.id }).populate("plants")
//     .then(oneSingleUser => res.json( oneSingleUser.plants ))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };


module.exports.getAllUsers = async function(req, res) {
    console.log(req.userId)
    const users = await User.find();
   
    res.json(users)
}

module.exports.getUser = (request, response) => {
  User.findOne({ _id: request.params.id })
    .then(user => response.json(user))
    .catch(err => response.sendStatus(404))
}

module.exports.deleteUser = (request, response) => {
  User.deleteOne({ _id: request.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}

