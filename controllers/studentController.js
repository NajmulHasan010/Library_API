import {Student} from "../models/StudentModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


/**
 * CRUD Operation
 */
// CREATE ==========================================================================

/**
 * @DESC Create ALL student
 * @ROUTE /api/v1/student
 * @METHOD post
 * @access PUBLIC
 * 
 */

export const createStudent = async (req, res) => {
	const { studentName, userName, password, email } = req.body;

    // password hash
    const hashPass = await bcrypt.hash(password, 10);

    // create data
    const data = await Student.create({
		studentName,
		userName : userName,
        password : hashPass,
        email : email
	});

    // create jwt
    const token = jwt.sign({studentName, userName}, process.env.JWT_SECRET, {
        expiresIn: "10d",
    });
	res.status(200).json({message : "Student Data Created", student : data, token });
};

// READ =======================================================

/**
 * @DESC Get ALL student
 * @ROUTE /api/v1/student
 * @METHOD get
 * @access PUBLIC
 * 
 */

export const getAllStudent = async(req, res) => {
    const data = await Student.find();
    if (data.length === 0) {
        return res.status(404).json({message : "student data not found", student: data})
    }
    res.status(200).json({message : "all student data", student : data });
};

/**
 * @DESC Get single student
 * @ROUTE /api/v1/student/:id
 * @METHOD get
 * @access PUBLIC
 * 
 */

export const getSingleStudent = async(req, res) => {
    const {id} = req.params;
    const data = await Student.findById(id);

    // check data count
    /* if (!data) {
        return res.status(404).json({message : "user data not found"});        
    } */
    res.status(200).json({message : "single Student data", student : data });
};  

// UPDATE =============================================

/**
 * @DESC Update Single student
 * @ROUTE /api/v1/student/:id
 * @METHOD PATCH
 * @access PUBLIC
 */

export const updateStudent = async(req, res) => {
    const {id} = req.params;
    const { name, userName } = req.body;
    const data = await Student.findByIdAndUpdate(id, {name, userName}, {new : true});

    
    res.status(200).json({message : "student data updated", updateStudent : data });
}; 

// DELETE ==============================================================

/**
 * @DESC delete Single student
 * @ROUTE /api/v1/student/:id
 * @METHOD DELETE
 * @access PUBLIC
 */

export const deleteStudent = async(req, res) => {
    const {id} = req.params;
    const data = await Student.findByIdAndDelete(id);

    
    res.status(200).json({message : "data deleted", student : data });
}; 