import Users from "../models/usersModel.js";


    //user Register
export const register = async (req, res, next) => {
    const {firstname, lastname, email, password, accountType} = req.body;

    //Validate Fields

    if(!firstname ) {
        next("First name is required");
    };
    if(!lastname ) {
        next("Last name is required");
    };
    if(!email ) {
        next("Email is required");
    };
    if(!password ) {
        next("Password is required");
    };
    if(!accountType ) {
        next("Account type is required");
    };

    try {
        
        const userExist = await Users.findOne({email});

        if(userExist) {
            next("user already exist");
            return;
        } else {
            const user = await Users.create({
                firstname,
                lastname,
                email,
                password,
                accountType,
            });

            //user token
            const token = user.createJWT();

            if(user) {
                res.status(201).send({
                success: true,
                message: "Account created successfully",
                user: {
                    _id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    accountType: user.accountType,
                    status: user.status,
                },
                token,
            });
            } else {
                next("Invalid user data");
            }
        }

    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
}



    // user Login
export const signIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        
        //Validation
        if(!email || !password) {
            next("Please provide email and password");
            return;
        }

        //find user by email
        const user = await Users.findOne({email }).select("+password");

        if(!user) {
            next("Invalid email or password");
            return;
        }

        //Compare Password
        const isMatch = await user.comparePassword(password);
        
        if(!isMatch) {
            next("Invalid email or password");
            return;
        }

        user.password = undefined;

        //user token
        const token = user.createJWT();

        res.status(201).json({
            success: true,
            message: "user logged in successfully",
            user,
            token,
        });

    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
}









// Update user

// export const updateuser = async (req, res, next) => {
//     const id = req.params.id;
//     const {firstname, lastname, email} = req.body;

//     try {
//         const user = await Users.findById(id).select("+password");

//         if(!user) {
//             next("user not found");
//             return;
//         }

//         // Update fields
//         user.firstname = firstname;
//         user.lastname = lastname; 
//         user.email = email;

//         // Reuse existing hashed password
//         // user.password = user.password;

//         // Ensure the password is not updated
//         user.password = undefined;

//         const updateduser = await user.save();

//         res.json({
//         success: true,
//         message: 'user updated successfully',
//         user: {
//             _id: updateduser._id,
//             firstname: updateduser.firstname,
//             lastname: updateduser.lastname,
//             email: updateduser.email
//         } 
//         });

//     } catch (error) {
//         console.log(error);
//         res.status(404).json({
//             success: false,
//             message: error.message
//         });
//     }
// }


// export const updateuser = async (req, res, next) => {
//     const id = req.params.id;
//     const {firstname, lastname, email} = req.body;

//     try {
//         const updateduser = await Users.findByIdAndUpdate(id,
//             { firstname, lastname, email },
//             { new: true }
//         ).select("+password");

//         if(!updateduser) {
//             next("user not found");
//             return;
//         }

//         res.json({
//             success: true,
//             message: 'user updated successfully',
//             updateduser: {
//                 _id: updateduser._id,
//                 firstname: updateduser.firstname,
//                 lastname: updateduser.lastname,
//                 email: updateduser.email
//             }  
//         });

//     } catch (error) {
//         console.log(error);
//         res.status(404).json({
//             success: false,
//             message: error.message
//         });
//     }
// }
