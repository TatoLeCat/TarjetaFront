import { ref } from "vue"




export default class AuthService {
    session
    constructor (){
       this.session = ref([])
    }
    getSession() {
        return this.session
    }

    async login (user, password){
        try {
            const res = await fetch(`${import.meta.env.VITE_API}/logincliente`, {
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
            this.session = await response
            

        } catch(error) {
            console.log(error)
        }
    }

    async loginPersonal (user, password){
        try {
            const res = await fetch(`${import.meta.env.VITE_API}/loginempleado`, {
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
            this.session = await response

        } catch(error) {
            console.log(error)
        }
    }

}
