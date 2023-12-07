const jwt = require("jsonwebtoken");
const userModels = require("../models/userModels.js");

exports.requireSignin = async (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.jwt_SECRET);
        next();
    } catch (error) {
        console.log(error);
    }
};

exports.isAdmin = async (req, res, next) => {
    try {
        const user = await userModels.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access",
            });
        } else {
            next();
        }
        const decode = jwt.verify(req.headers.authorization, process.env.jwt_SECRET);
        next();
    } catch (error) {
        console.log(error);
    }
};
