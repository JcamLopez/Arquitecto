import Cookies from 'js-cookie'
import axios from '../Api/Axios'
export const cookies = async (setIsAuthenticated) => {
    const cookies = Cookies.get()
    if (cookies.token) {
        try {
            const res = await axios.post('/token')
            if (!res.data) {
                setIsAuthenticated(false)
            } else {
                setIsAuthenticated(true)
            }

        } catch (err) {
            console.log(err)
            setIsAuthenticated(false)
        }
    } else {

        setIsAuthenticated(false)
    }

}


