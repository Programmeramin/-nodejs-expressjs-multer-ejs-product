
/**
 * Get All student
 */

export const GetAllStudent = (req, res) =>{
    res.status(200).json({ student : req.body, Message : "Student data created successful"});
}