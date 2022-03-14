const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../middlewares/generateToken");
const Mailer = require("../middlewares/MailerSender");

/*
LIST OF CONTROLLERS
1. Register User
2. Login User
3. Get user Details
4. Update User
*/

// Register New user
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password} = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(404);
        throw new Error("User already exists");
    } else {

    
        const user = await User.create({
            name, email, password
        });

        if (user) {
            const output = `
                    '<h2>Welcome to XcitEducation! </h2>
                    <p>You have registered successfully</p>
                    <h3>Your Account Details:</h3>
                    <ul>
                    <li>Name : ${req.body.name}</li>
                    <li>Email : ${req.body.email}</li>
                    <li>Password : ${req.body.password}</li>
                    </ul>
                    <p>Please save your account details for future references</p>
                    <p></p>
                    <p>Regards</p>
                    <p>Team XcitEducation</p>
                `;
        
                

            Mailer("html",output,email);
            
                res.status(200).json({
                    success: true,
                    emailSuccess: true,
                    message: "User Register Successfully",
                    Mail : `Mail send to ${email}`
                });
           
        } else {
            res.status(404);
            throw new Error("User not created");
        }
    }
});

// Login existing users
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        if (user.isAdmin === false) {
            res.status(200).json({
                success: true,
                data: user,
                token: generateToken(user._id),
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Please visit Admin page.",
            });
            // res.status(404);
            // throw new Error("Please visit Admin/Instructor page.");
        }
    } else {
        res.status(404);
        throw new Error("Invalid email or password.");
    }
});

// User can see his/her details - Protected Route
const getUserDetails = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.status(200).json({
            success: true,
            data: user,
        });
    } else {
        res.status(404);
        throw new Error("User not Found");
    }
});

// User updates his/her own details - Protected Route
const updateUserDetails = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        if (req.body.name) {
            user.name = req.body.name;
        }
        if (req.body.email) {
            user.email = req.body.email;
        }
        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = await user.save();
        res.status(200).json({
            success: true,
            data: updatedUser,
        });
    } else {
        res.status(404);
        throw new Error("User not Found");
    }
});

// find single  user 
const findSingleUser = asyncHandler((req,res,next) => {
    const {userId} = req.body;
    User.findById(userId).then((user) => {
        res.status(200).json({
            success : true,
            message : "User Found",
            user
        })
    }).catch((err) => {
        res.status(400).json({
            success : false,
            message : "User Not Found",
            error : `Error : ${err}`
        })
    })
})

module.exports = { registerUser, userLogin, getUserDetails, updateUserDetails,findSingleUser };