const prisma = require("../db/db.config")
const { hashPassword, comparePassword } = require("../helper/authHelper")
const jwt = require ("jsonwebtoken")


async function Register(req, res) {
    try {
        const { name, email, password, phone, address } = req.body

        // validation
        if (!name) {
            return res.status(400).send({ message: 'Name is Required' })
        }
        if (!email) {
            return res.status(400).send({ message: 'Email is Required' })
        }
        if (!password) {
            return res.status(400).send({ message: 'Password is Required' })
        }
        if (!phone) {
            return res.status(400).send({ message: 'Phone is Required' })
        }
        if (!address) {
            return res.status(400).send({ message: 'Address is Required' })
        }

        // check user
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        })

        // existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already registered, please login',
            })
        }

        // register user
        const hashedPassword = await hashPassword(password) // assuming you have a function called hashPassword

        // save
        const user = await prisma.user.create({
            data: {
                name:name,
                email:email,
                password: hashedPassword,
                phone: phone,
                address: address,
            },
        })

        res.status(201).send({
            success: true,
            message: 'User registered successfully',
            user,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Register',
            error: error.message, // Adjust the error handling as needed
        })
    }
}



async function Login(req, res) {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Email or password is missing",
            });
        }

        // Check user
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered",
            });
        }

        // Compare passwords
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(401).send({
                success: false,
                message: "Invalid Password",
            });
        }

        // Token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(200).send({
            success: true,
            message: "Login successful",
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error: error.message, // Adjust the error handling as needed
        });
    }
}


module.exports = {Login,Register}