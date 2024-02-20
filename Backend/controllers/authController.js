import Candidates from "../models/candidateModel.js";


    //Candidate Register
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
        
        const candidateExist = await Candidates.findOne({email});

        if(candidateExist) {
            next("Candidate already exist");
            return;
        } else {
            const candidate = await Candidates.create({
                firstname,
                lastname,
                email,
                password,
                accountType,
            });

            //Candidate token
            const token = candidate.createJWT();

            if(candidate) {
                res.status(201).send({
                success: true,
                message: "Account created successfully",
                candidate: {
                    _id: candidate._id,
                    firstname: candidate.firstname,
                    lastname: candidate.lastname,
                    email: candidate.email,
                    accountType: candidate.accountType,
                    status: candidate.status,
                },
                token,
            });
            } else {
                next("Invalid candidate data");
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



    // Candidate Login
export const signIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        
        //Validation
        if(!email || !password) {
            next("Please provide email and password");
            return;
        }

        //find user by email
        const candidate = await Candidates.findOne({email }).select("+password");

        if(!candidate) {
            next("Invalid email or password");
            return;
        }

        //Compare Password
        const isMatch = await candidate.comparePassword(password);
        
        if(!isMatch) {
            next("Invalid email or password");
            return;
        }

        candidate.password = undefined;

        //Candidate token
        const token = candidate.createJWT();

        res.status(201).json({
            success: true,
            message: "Candidate logged in successfully",
            candidate,
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









// Update Candidate

// export const updateCandidate = async (req, res, next) => {
//     const id = req.params.id;
//     const {firstname, lastname, email} = req.body;

//     try {
//         const candidate = await Candidates.findById(id).select("+password");

//         if(!candidate) {
//             next("Candidate not found");
//             return;
//         }

//         // Update fields
//         candidate.firstname = firstname;
//         candidate.lastname = lastname; 
//         candidate.email = email;

//         // Reuse existing hashed password
//         // candidate.password = candidate.password;

//         // Ensure the password is not updated
//         candidate.password = undefined;

//         const updatedCandidate = await candidate.save();

//         res.json({
//         success: true,
//         message: 'Candidate updated successfully',
//         candidate: {
//             _id: updatedCandidate._id,
//             firstname: updatedCandidate.firstname,
//             lastname: updatedCandidate.lastname,
//             email: updatedCandidate.email
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


// export const updateCandidate = async (req, res, next) => {
//     const id = req.params.id;
//     const {firstname, lastname, email} = req.body;

//     try {
//         const updatedCandidate = await Candidates.findByIdAndUpdate(id,
//             { firstname, lastname, email },
//             { new: true }
//         ).select("+password");

//         if(!updatedCandidate) {
//             next("Candidate not found");
//             return;
//         }

//         res.json({
//             success: true,
//             message: 'Candidate updated successfully',
//             updatedcandidate: {
//                 _id: updatedCandidate._id,
//                 firstname: updatedCandidate.firstname,
//                 lastname: updatedCandidate.lastname,
//                 email: updatedCandidate.email
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
