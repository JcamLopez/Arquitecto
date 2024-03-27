import { prisma } from '../connect_bd.js'

export class Person {
    constructor() {
        this._id_person = 0
        this._fk_municipaly = 0
        this._cc = ""
        this._name = ""
        this._last_name = ""
        this._msg_person = ""
    }



    register_person = async (req, fk_municipaly) => {
        const { cc, name, last_name } = req.body
        try {
            const result = await prisma.persona.create({
                data: {
                    "fk_municipio": fk_municipaly,
                    "Cc": cc,
                    "Nombre": name,
                    "Apellido": last_name,
                }
            })

            if (result) {
                this.setId_person = result.Id_persona
                this.setFk_municipaly = result.fk_municipio
                this.setCc = result.Cc
                this.setName = result.Nombre
                this.setLastName = result.Apellido
                this.setMsgPerson = "Persona registrada con exito: " + result
                return true
            } else {
                this.setMsgPerson = "Persona No registrada con exito"
                return false
            }
        } catch (error) {
            this.setMsgPerson = "Error al registrar la persona: " + error
            return false
        }

    }



    /**
       * @param {number} id_person
      */
    set setId_person(id_person) {
        this._id_person = id_person
    }

    get getId_person() {
        return this._id_person
    }

    /**
        * @param {number} fk_municipaly
       */
    set setFk_municipaly(fk_municipaly) {
        this._fk_municipaly = fk_municipaly
    }

    get getFk_municipaly() {
        return this._fk_municipaly
    }

    /**
    * @param {number} cc
   */
    set setCc(cc) {
        this._cc = cc
    }

    get getCc() {
        return this._cc
    }

    /**
     * @param {string} name
    */
    set setName(name) {
        this._name = name
    }

    get getName() {
        return this._name
    }


    /**
    * @param {string} last_name
   */
    set setLastName(last_name) {
        this._last_name = last_name
    }

    get getLastName() {
        return this._last_name
    }


    /**
    * @param {string} msg
    */
    set setMsgPerson(msg) {
        this._msg = msg
    }

    get getMsgPerson() {
        return this._msg
    }
}