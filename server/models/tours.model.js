const mongoose = require("mongoose");
const User = require('./user.model');


const ToursSchema = new mongoose.Schema({
    place: {
        type: String,
        required: [true, "Place is required"],
        minlength: [2, "Place must be at least 2 characters long"]
    },
    desc: {
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "description must be at least 2 characters long"]
    },

    startDate: { 
        // must be last data 
        type: Date,
        required: [true, "Start date is required"],
        min : [new Date(), "The start date should not be in the past" ]
    },

    endDate: {
        type: Date,
        required: [true, "End date is required"],
    },
    members :  [{
		type: Object,
        ref: "User"
	}],
    image : {
        type : String ,
        required: [true, "Image is required"],
    },
    typeOfTour : {
        type : String ,
        required: [true, "Type of tour is required"],
    },
    price : {
        type : Number ,
        required: [true, "Price of tour is required"],
    },
    station1 : {
        type : String ,
    },
    station2 : {
        type : String ,
    },
    station3 : {
        type : String ,
    },
    station4 : {
        type : String ,
    },
    station5 : {
        type : String ,
    },

},

    { timestamps: true }
);

const Tours = mongoose.model("Tours", ToursSchema);

module.exports = Tours;