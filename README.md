
# BorrowHub 

 #### Backend Development Assignment [With Proper Screenshots.]
#### Overview
Develop a backend for a money lending application, similar to apps like Slice and KreditBee.
Implement the following 4 APIs using MongoDB, Postman, and Node.js. Adding Comments to
the logic is mandatory.
APIs
# 1. Approve Application During Signup
Endpoint: POST /signup
#### Functionality:
1. Approve or reject the application based on user age and monthly salary.
2. Register the user after all verification.
3. Maintain a status field to handle the user application status.
#### User Signup Details:
1. Phone number
2. Email
3. Name
4. Date of user registration
5.  Date of birth (DOB)
6. Monthly salary
#### Validation Criteria:
1. User should be above 20 years of age.
2. Monthly salary should be 25k or more.


#### Signup Successful API Screenshot



![App Screenshot](https://raw.githubusercontent.com/RinkeshKumarSinha/borrowHub/main/screenshots/signup%20successful.png)

#### connected with mongoDb using Mongoose

![App Screenshot](https://raw.githubusercontent.com/RinkeshKumarSinha/borrowHub/main/screenshots/mongoDbConnect.png)


### Error Handling during signup

#### Age less than 20 years error

![App Screenshot](https://raw.githubusercontent.com/RinkeshKumarSinha/borrowHub/main/screenshots/errors/above%2020%20years%20of%20age.png)

#### Salary less tha 25k Error

![App Screenshot](https://raw.githubusercontent.com/RinkeshKumarSinha/borrowHub/main/screenshots/errors/monthly%20salary%20error.png)



# 2. Show User Data
Endpoint: GET /user
Functionality:
● Show user data with the following fields:
○ Purchase Power amount
○ Phone number
○ Email
○ Date of user registration
○ DOB
○ Monthly salary

#### Get user API

![App Screenshot](https://raw.githubusercontent.com/RinkeshKumarSinha/borrowHub/main/screenshots/get%20user%20api.png)

# 3. Borrow Money API
Endpoint: POST /borrow
#### Functionality:
1. Allow the user to borrow money from the application.
2. Update the Purchase Power amount.
3. Calculate the tenure of repayments and the monthly repayments with an interest rate of
8%.
4. Return the updated Purchase Power amount and the monthly repayment amount.
Submission

#### Borrow Money API Screenshot

![App Screenshot](https://raw.githubusercontent.com/RinkeshKumarSinha/borrowHub/main/screenshots/borrow%20api.png)









