const { ref } = require("vue");


class AuthService {
    constructor (){
        this.token = ref('')
    }

    getToken(){
        return this.token
    } 

    async login (user, password){
        try {
            const res = await fetch('/api/logincliente', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({ 
                    user: user,
                    password : password
                 })
            })

            const response = await res.json()
            //falta tratar respuesta

        } catch(error) {
            console.log(error)
        }
    }

    async loginPersonal (user, password){
        try {
            const res = await fetch('/api/loginempleado', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({ 
                    user: user,
                    password : password
                 })
            })

            const response = await res.json()
            //falta tratar respuesta

        } catch(error) {
            console.log(error)
        }
    }
}