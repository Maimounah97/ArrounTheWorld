const tourController = require('../controllers/tours.controller');
const UserController = require("../controllers/user.controller");
const { authenticate } = require("../middlewares/authjwt");
module.exports = function(app){
    
    //--------------------Tour----------------------------//
    app.get('/api', tourController.index);
    app.get("/api/tours", tourController.findAllTours);
    app.post('/api/tour/new', tourController.createTour);
    app.get('/api/tour/:id', tourController.getTour);
    app.put('/api/tour/:id', tourController.updateTour);
    app.delete('/api/tour/:id', tourController.deleteTour);
    app.post('/api/tour/payment', tourController.payment);

    //---------------------User------------------------//

    app.post("/api/signup", UserController.signup);
    app.post("/api/login", UserController.login);
    app.get('/api/user/:id', UserController.getUser);
    app.get("/api/users", UserController.getAllUsers);
    app.delete('/api/user/:id', UserController.deleteUser);

}



