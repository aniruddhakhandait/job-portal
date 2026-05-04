import {tryCatch} from "../utills/tryCatch.js";


export const registerUser = tryCatch( async (req, res, next) => {
     const {email} = req.body;

     res.json(email)
})
