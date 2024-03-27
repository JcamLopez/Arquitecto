import jsonwebtoken from 'jsonwebtoken'
export const GenerateToken = async (res, user) => {
    const cookieOption = {
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        path: "/"
    }
    const token = jsonwebtoken.sign({ user },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION }
    )
    console.log("cookies generate")
    res.cookie("token", token, cookieOption)
}


export const Verify_token = (req, res) => {
    const { token } = req.cookies
    if (!token) res.status(401).json({ mesagge: "Unauthhorized" })
    jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) res.status(401).json({ message: "Unauthhorized", error: err })
    })
}