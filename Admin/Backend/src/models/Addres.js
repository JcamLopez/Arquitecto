
import { prisma } from '../connect_bd.js'
export class Adress {

    constructor() {
        this._id_direction = 0
        this._fk_municipaly = 0
        this._direction = ""
        this._msg = ""
    }


    register_adress = async (req, fk_municipaly) => {
        const { direction } = req.body
        try {

            const result = await prisma.direccion.create({
                data: {
                    "fk_municipio": fk_municipaly,
                    "Direccion": direction,
                }
            })
            if (result) {
                this.setId_direction = result.Id_direccion
                this.setFk_municipaly = result.fk_municipio
                this.setDirection = result.Direccion
                this.setMsg = "Direccion registrada con exito " + result
                return true
            } else {
                this.setMsg = "Error al registrar  la Direccion "
                return false
            }
        } catch (error) {
            this.setMsg = "Error al registrar  la Direccion: " + error
            return false
        }

    }



    /**
     * @param {number} id_direction
     */
    set setId_direction(id_direction) {
        this._id_direction = id_direction
    }

    get getId_direction() {
        return this._id_direction
    }




    /**
     * @param {number} fk_municipaly
     */
    set setFk_municipaly(fk_municipaly) {
        this._fk_municipaly = fk_municipaly
    }

    get getMunicipaly() {
        return this._fk_municipaly
    }




    /**
     * @param {string} direction
     */
    set setDirection(direction) {
        this._direction = direction
    }

    get getId_direction() {
        return this._direction
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