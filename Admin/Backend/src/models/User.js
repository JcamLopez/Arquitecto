import bcryptjs from 'bcryptjs'
import { GenerateToken } from './Token.js'
import { Person } from './Person.js'
import { prisma } from '../connect_bd.js'
import { hash } from './Hash.js'
export class User extends Person {
    constructor() {
        super()
        this._id_user = 0
        this._user = ""
        this._password = ""
        this._fk_rol = ""
        this._state = true
        this._msg = ""
    }


    search_user = async (req) => {
        const { user } = req.body
        try {
            const result = await prisma.usuario.findFirst({
                where: {
                    Correo: user
                }
            })
            if (result != null) {
                this.set_Id_user = result.Id_usuario
                this.setUser = result.Usuario
                this.setPassword = result.Clave
                this.setState = result.Estado
                this.setMsg = "El usuario encontrado: " + result
                return true
            } else {
                this.setMsg = "El usuario no existe"
                return false
            }

        } catch (error) {
            this.setMsg = "Error al consultar el usuario: " + error
            return false
        }
    }


    signup = async (req, fk_rol) => {
        const { user, password } = req.body
        try {
            const pass = await hash(password)
            const result = await prisma.usuario.create({
                data: {
                    "fk_persona": this.getId_person,
                    "fk_rol": fk_rol,
                    "Correo": user,
                    "Clave": pass,
                    "Estado": true
                }
            })
            if (result) {
                this.setFk_rol = result.fk_rol
                this.setUser = result.Correo
                this.setPassword = result.Clave
                this.setState = result.Estado
                this.setMsg = "Usuario registrado con exito: " + result
                return true
            } else {
                this.setMsg = "Error al registrar el usuario"
                return false
            }
        } catch (error) {
            this.setMsg = "Error al registrar el usuario: " + error
            return false
        }

    }


    signin = async (req) => {
        const { password } = req.body
        try {
            const compare_password = await bcryptjs.compare(password, this.getPassword)
            if (compare_password) {
                this.setMsg = "contraseña correcta"
                return true
            } else {
                this.setMsg = "contraseña incorrecta"
                return false
            }
        } catch (error) {
            this.setMsg = 'Error al iniciar sesion' + error
            return "Error"
        }
    }

    /**
       * @param {number} id_user
       */
    set set_Id_user(id_user) {
        this._id_user = id_user
    }

    get getId_user() {
        return this._id_user
    }



    /**
     * @param {number} fk_rol
     */
    set setFk_rol(fk_rol) {
        this._fk_rol = fk_rol
    }

    get getFkrol() {
        return this._fk_rol
    }

    /**
     * @param {string} user
     */
    set setUser(user) {
        this._user = user
    }

    get getUser() {
        return this._user
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

    /**
     * @param {boolean} state
     */
    set setState(state) {
        this._state = state
    }

    get getState() {
        return this._state
    }

    set setMsg(msg) {
        this._msg = msg
    }

    get getMsg() {
        return this._msg
    }
}