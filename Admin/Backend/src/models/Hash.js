import bcryptjs from 'bcryptjs'
export const hash = async (password) => {
    const salt = await bcryptjs.genSalt(10)
    const hash = await bcryptjs.hash(password, salt)
    return hash
} 