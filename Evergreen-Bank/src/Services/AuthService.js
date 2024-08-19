


export default class AuthService {
    constructor (){
       
    }


    async login (user, password){
        try {
            const res = await fetch(`${process.env.VUE_APP_API}/logincliente`, {
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
            const res = await fetch(`${process.env.VUE_APP_API}/loginempleado`, {
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
