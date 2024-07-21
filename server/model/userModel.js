import mongoose from "mongoose";

// ● Phone number
// ● Email
// ● Name
// ● Date of user registration
// ● Date of birth (DOB)
// ● Monthly salary

const userSchema=new mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    email:{
    type:String,
    required:true
    },
    name:{
        type:String,
        required:true
        },
    
    userRegistrationDate:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    monthlySalary:{
        type:Number,
        required:true
    },
    purchasePowerAmount:{
        type:Number,
        required:true
    },
    borrowAmount:{
        type:Number,
        required:true
    },
    tenure:{
        type:Number,
        required:true
    }

    })

    
export default mongoose.model("User",userSchema);