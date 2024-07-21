import User from "../model/userModel.js";


function isAbove20YearsOld(dateString) {
    // Split the input string to extract day, month, and year
    const [day, month, year] = dateString.split('-').map(Number);

    // Create a Date object from the extracted values
    const birthDate = new Date(year, month - 1, day);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    const dayDiff = currentDate.getDate() - birthDate.getDate();

    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Check if the age is 20 or older
    return age >= 20;
} //function to check age is above 20 or not taking dd-mm-yyyy string as input

function borrowMoney(purchasePower, amountBorrowed, tenureInYears) {
    const interestRate = 0.08; // 8% annual interest rate

    // Update purchase power amount
    purchasePower += amountBorrowed;

    // Calculate monthly interest rate
    const monthlyInterestRate = interestRate / 12;

    // Calculate number of monthly payments
    const numberOfPayments = tenureInYears * 12;

    // Calculate monthly repayment amount using the formula for an annuity
    const monthlyRepayment = (amountBorrowed * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return {
        updatedPurchasePower: purchasePower,
        monthlyRepayment: monthlyRepayment
    };
}



export const signup=async(req,res)=>{
		try{
		const userData=new User(req.body);
		if(!userData){
		return res.status(404).json({msg:"user data not found"});
		}
		
        // ● User should be above 20 years of age.
        if(!isAbove20YearsOld(userData.DOB))res.status(404).json({msg:"User should be above 20 years of age"});
        if(userData.monthlySalary<25000)res.status(404).json({msg:"monthly salary must be greater than 25k"});
//● Monthly salary should be 25k or more.

		const savedData=await userData.save();
	
		res.status(200).json(savedData);
		
		  
		
		}catch(error){
		
		res.status(500).json({error:error});
		
		}
	} //sign up api


export const user=async(req,res)=>{
        try{
    
            const userData=await User.find();
            if(!userData){
                return res.status(404).json({msg:"user data not found!"});
    
            }
            res.status(200).json(userData);
    
    
        }
        catch(error){
            res.status(500).json({error:error});
        }
    } //fetch allUsers api which are registered in the Database.


//------------------------------------------------------------    
export const borrow=async(req,res)=>{
		try{
		const userData=new User(req.body);
		if(!userData){
		return res.status(404).json({msg:"user data not found"});
		}
		
        // ● User should be above 20 years of age.
        if(!isAbove20YearsOld(userData.DOB))res.status(404).json({msg:"User should be above 20 years of age"});
        if(userData.monthlySalary<25000)res.status(404).json({msg:"monthly salary must be greater than 25k"});
//● Monthly salary should be 25k or more.


// Functionality:
// ● Allow the user to borrow money from the application.
// ● Update the Purchase Power amount.
// ● Calculate the tenure of repayments and the monthly repayments with an interest rate of
// 8%.
// ● Return the updated Purchase Power amount and the monthly repayment amount.



let currentPurchasePower = userData.purchasePowerAmount; // Example initial purchase power
const amountToBorrow = userData.borrowAmount;
const tenure = userData.tenure; // Tenure in years

const result = borrowMoney(currentPurchasePower, amountToBorrow, tenure);


const jsonResult = JSON.stringify({
    updatedPurchasePower: result.updatedPurchasePower.toFixed(2),
    monthlyRepayment: result.monthlyRepayment.toFixed(2)
});

		
	
		res.status(200).json(jsonResult);
		
		  
		
		}catch(error){
		
		res.status(500).json({error:error});
		
		}
	} //sign up api



 
    
    


