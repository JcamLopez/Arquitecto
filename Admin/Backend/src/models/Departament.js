import { prisma } from '../connect_bd.js'
export class Departament {
    constructor() {
        this._id_departament = 0
        this._departament = ""
        this._msg = ""
    }

    search_departament = async (req) => {
        const { departament } = req.body
        try {
            const result = await prisma.departamento.findFirst({
                where: {
                    Departamento: departament
                }
            })
            if (result) {
                this.setId_departament = result.Id_departamento
                this.setDepartament = result.Departamento
                this.setMsg = "Departamento encontrado: " + result
                return true
            } else {
                this.setMsg = "Departamento no encontrado"
                return false
            }

        } catch (error) {
           this.setMsg = "Error al consultar el departamento: " + error 
            return false

        }

    }




    /**
     * @param {number} Id_departament
     */
    set setId_departament(Id_departament) {
        this._id_departament = Id_departament
    }

    get getId_departament() {
        return this._id_departament
    }


    /**
        * @param {string} departament
       */
    set setDepartament(departament) {
        this._departament = departament
    }

    get getDepartament() {
        return this._departament
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