import JWT from "jsonwebtoken";

const candidateAuth = async (req, res, next) => {
    const authHeader = req?.headers?.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        next("Authentication Failed");
    }

    const token = authHeader?.split(" ")[1];

    try {
        const candidateToken = JWT.verify(token, process.env.JWT_SECRET_KEY);

        req.body.candidate = {
            candidateId: candidateToken.candidateId,
        };
        next();
        
    } catch (error) {
        console.log(error);
        next("Authentication Failed");
    }
}

export default candidateAuth;