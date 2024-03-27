import { User } from '../models/User.js'
import { Departament } from '../models/Departament.js'
import { City } from '../models/City.js'
import { Adress } from '../models/Addres.js'
import { Phone } from '../models/Phone.js'
import { Rol } from '../models/Rol.js'
import { GenerateToken } from '../models/Token.js'
export class LoginControllers {
    constructor() {
        this.Departament = new Departament()
        this.City = new City()
        this.User = new User()
        this.Adress = new Adress()
        this.Phone = new Phone()
        this.Rol = new Rol()
    }

    Post_Signup = async (req, res) => {
        const user = await this.User.search_user(req)
        if (user == false) {
            console.log(this.User.getMsg)
            const departament = await this.Departament.search_departament(req)
            if (departament) {
                console.log(this.Departament.getMsg)
                const municipality = await this.City.search_municipality(req, this.Departament.getId_departament)
                if (municipality) {
                    console.log(this.City.getMsg)
                    const person = await this.User.register_person(req, this.City.getId_municipality)
                    if (person) {
                        console.log(this.User.getMsgPerson)
                        const adress = await this.Adress.register_adress(req, this.City.getId_municipality)
                        if (adress) {
                            console.log(this.Adress.getMsg)
                            const phone = await this.Phone.register_number(req, this.User.getId_person)
                            if (phone) {
                                console.log(this.Phone.getMsg)
                                const role = await this.Rol.search_rol(req)
                                if (role) {
                                    console.log(this.Rol.getMsg)
                                    const signup = await this.User.signup(req, this.Rol.getId_Rol)
                                    if (signup) {
                                        console.log(this.User.getMsg)
                                        return res.status(200).json({ success: true, user: this.User.getMsg })
                                    } else {
                                        console.log(this.User.getMsg)
                                        return res.status(500).json({ success: false, user: this.User.getMsg })
                                    }
                                } else {
                                    console.log(this.Rol.getMsg)
                                    return res.status(500).json({ success: false, user: this.Rol.getMsg })
                                }
                            } else {
                                console.log(this.Phone.getMsg)
                                return res.status(500).json({ success: false, user: this.Phone.getMsg })
                            }
                        } else {
                            console.log(this.Adress.getMsg)
                            return res.status(500).json({ success: false, user: this.Adress.getMsg })
                        }
                    } else {
                        console.log(this.User.getMsgPerson)
                        return res.status(500).json({ success: false, user: this.User.getMsgPerson })
                    }
                } else {
                    console.log(this.municipality.getMsg)
                    return res.status(500).json({ success: false, user: this.municipality.getMsg })
                }
            } else {
                console.log(this.Departament.getMsg)
                return res.status(500).json({ success: false, user: this.Departament.getMsg })
            }
        } else {
            console.log(this.User.getMsg)
            return res.status(500).json({ success: false, user: this.User.getMsg })
        }
    }

    Post_Signin = async (req, res) => {
        const user = await this.User.search_user(req)
        if (user) {
            const signin = await this.User.signin(req)
            if (signin) {
                const object = {
                    "id": this.User.getId_user,
                    "user": this.User.getUser
                }
                await GenerateToken(res, object)
                return res.status(200).json({ success: true, msg: this.User.getMsg })
            } else {
                console.log(this.User.getMsg)
                return res.status(500).json({ success: false, user: this.User.getMsg })
            }
        } else {
            console.log(this.User.getMsg)
            return res.status(500).json({ success: false, user: this.User.getMsg })
        }
    }
}



