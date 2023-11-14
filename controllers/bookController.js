import { Book } from "../models/BooksModel.js";

/**
 * @DESC Create ALL Books
 * @ROUTE /api/v1/books
 * @METHOD post
 * @access PUBLIC
 *
 */
export const createBooks = async (req, res) => {
	const { title, writer, category, borrowed_by } = req.body;

	const data = await Book.create({
		title,
		writer,
		category,
		borrowed_by,
	});

	res.json({ message: "created", books : data});
};

// READ =======================================================

/**
 * @DESC GET ALL books
 * @ROUTE /api/v1/books
 * @METHOD GET
 * @access PUBLIC
 */

export const getAllBooks = async(req, res) => {
    const data = await Book.find();
    if (data.length === 0) {
        return res.status(404).json({message : "books data not found", books: data})
    }
    res.status(200).json({message : "all books data", books : data });
};




export const getSingleBooks = async(req, res) => {
    const {id} = req.params;
    const data = await Book.findById(id);

    // check data count
    if (!data) {
        return res.status(404).json({message : "user data not found"});        
    }
    res.status(200).json({message : "single data", books : data });
}; 

// UPDATE =============================================

/**
 * @DESC Update Single book
 * @ROUTE /api/v1/user/:id
 * @METHOD PATCH
 * @access PUBLIC
 */

export const updateSingleBook = async(req, res) => {
    const {id} = req.params;
    const { title, writer, category, borrowed_by } = req.body;
    const data = await Book.findByIdAndUpdate(id, {title, writer, category, borrowed_by}, {new : true});

    res.status(200).json({message : "single data updated", books: data});
};


// DELETE ==============================================================

/**
 * @DESC delete Single book
 * @ROUTE /api/v1/user/:id
 * @METHOD DELETE
 * @access PUBLIC
 */

export const deleteSingleBook = async(req, res) => {
    const {id} = req.params;
    const data = await Book.findByIdAndDelete(id);

    
    res.status(200).json({message : "data deleted", Book : data });
}; 
