import axios from '../Api/Axios'
export class User {
    constructor() {
        this._user = ""
        this._password = ""
    }

    Signin = async (setIsAuthenticated, values, navigator) => {
        try {
            const { user, password } = values
            this.setUser = user
            this.setPassword = password
            const data = {
                user: this._user,
                password: this._password
            }
            const response = await axios.post('/signin', data)
            if (response) {
                if (response.data.success) {
                    setIsAuthenticated(true)
                    navigator("/index")
                } else {
                    setIsAuthenticated(false)
                }
            }
        } catch (error) {
            console.error("Error en el inicio de sesión:", error);
        }
    }

    /**
     * @param {string} user
     */
    set setUser(user) {
        this._user = user;
    }

    get getUser() {
        return this._user;
    }

    /**
     * @param {string} password
     */
    set setPassword(password) {
        this._password = password
    }

    get getPassword() {
        return this._password
    }


}