import {Category} from "../models/CategoryModel.js"
import {generateSlug} from "../helper/helper.js"

export const createCategory = async (req, res) => {
    const slug = generateSlug(req.body.categoryName);
    const data = new Category({ ...req.body, slug});

    await data.save();
    //await Book.findByIdAndUpdate(req.body.books, { category: data._id });
    res.status(200).json({
        message: req.body.categoryName + " Category Created successfully",
        data,
    });
};