import Candidates from "../models/candidateModel.js";

const uploadCV = async (req, res) => {
    try {
        const candidate = req.candidate; // Assuming you have a candidate object in req from your authentication middleware

        // const token = candidate.createJWT();
        if (!candidate) {
            return res.status(401).json({ message: 'Unauthorized' });
          }

        const filePaths = req.files.map(file => file.path);

        // Update the candidate's CV field with the array of file paths
        await Candidates.findByIdAndUpdate(candidate._id, { $push: { cv: { $each: filePaths, $slice: -5 } } }); //,token after yellow bracket

        res.json({ message: 'Files uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export { uploadCV };