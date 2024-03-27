import { prisma } from '../connect_bd.js'
export class Rol {
    constructor() {
        this._id_rol = 0
        this._rol = ""
        this._state = true
        this._msg = ""
    }


    search_rol = async (req) => {
        const { rol } = req.body
        try {
            const result = await prisma.rol.findFirst({
                where: {
                    Rol: rol
                }
            })
            if (result) {
                this.setId_rol = result.Id_rol
                this.setRol = result.Rol
                this.setState = result.Estado
                this.setMsg = "rol consultado con exito: " + result 
                return true
            } else {
                this.setMsg = " El rol no fue encontrado "
                return false
            }

        } catch (error) {
            this.setMsg = " Error al consultar el rol : " + error
            return false
        }

    }

    /**
     * @param {number} id_rol
     */
    set setId_rol(id_rol) {
        this._id_rol = id_rol
    }

    get getId_Rol() {
        return this._id_rol
    }

    /**
     * @param {string} rol
     */
    set setRol(rol) {
        this._rol = rol
    }

    get getRol() {
        return this._rol
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

    /**
    * @param {string} msg
    */
    set setMsg(msg) {
        this._msg = msg
    }

    get getMsg() {
        return this._msg
    }
}