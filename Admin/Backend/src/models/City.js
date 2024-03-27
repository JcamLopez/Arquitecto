import { prisma } from '../connect_bd.js'
export class City {
    constructor() {
        this._id_municipality = 0
        this._fk_departament = 0
        this._municipality = ""
        this._msg = ""
    }


    search_municipality = async (req, id_departament) => {
        const { municipality } = req.body
        try {
            const result = await prisma.municipio.findFirst({
                where: {
                    fk_departamento: id_departament,
                    Municipio: municipality
                }
            })
            if (result) {
                this.setId_municipality = result.Id_municipio
                this.setFk_departament = result.fk_departamento
                this.setMunicipality = result.Municipio
                this.setMsg = "Municipio encontrado: " + result
                return true
            } else {
                this.setMsg = "Municipio no encontrado"
                return false

            }


        } catch (error) {
            this.setMsg = "Error al buscar el municipio: " + error
            return false
        }
    }


    /**
     * @param {number} id_municipality
     */
    set setId_municipality(id_municipality) {
        this._id_municipality = id_municipality
    }

    get getId_municipality() {
        return this._id_municipality
    }


    /**
     * @param {number} fk_departament
     */
    set setFk_departament(fk_departament) {
        this._fk_departament = fk_departament
    }

    get getFk_departament() {
        return this._fk_departament
    }

    /**
     * @param {string} municipality
     */
    set setMunicipality(municipality) {
        this._municipality = municipality
    }

    get getMunicipality() {
        return this._municipality
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