
import { prisma } from '../connect_bd.js'
export class Phone {

    constructor() {
        this._id_phone = 0
        this._fk_person = 0
        this._number = 0
        this._state = true
        this._msg = ""
    }


    register_number = async (req, fk_person) => {
        const { number } = req.body
        try {
            const result = await prisma.telefono.create({
                data: {
                    "fk_persona": fk_person,
                    "numero": number,
                    "Estado": true
                }
            })
            if (result) {
                this.setFk_person = result.fk_persona
                this.setNumber = result.numero
                this.setState = result.Estado
                this.setMsg = "Telefono creado con exito: " + result
                return true
            } else {
                this.setMsg = "Error al registrar el telefono "
                return false
            }
        } catch (error) {
            this.setMsg = "Error al registrar el telefono " + error
            return false
        }

    }



    /**
     * @param {number} id_phone
     */
    set setId_phone(id_phone) {
        this._id_phone = id_phone
    }

    get getId_phone() {
        return this._id_phone
    }


    /**
     * @param {number} fk_person
     */
    set setFk_person(fk_person) {
        this._fk_person = fk_person
    }

    get getFk_person() {
        return this._fk_person
    }

    /**
     * @param {number} number
     */
    set setNumber(number) {
        this._number = number
    }

    get getNumber() {
        return this._number
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