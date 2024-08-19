import { ref } from "vue"




export default class AuthService {
    session
    constructor (){
       this.session = ref([])
    }
    getSession() {
        return this.session
    }

    async login (username, password){
        try {
            const res = await fetch(`http://${import.meta.env.VITE_API}/logincliente`, {
                method: 'POST',
                credentials: 'include', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ 
                    username: username,
                    password : password
                 })
            })

            const response = await res.json()
            this.session = await response
            if (this.session =! null){
                return true
            } else {
                return false
            }
            

        } catch(error) {
            console.log(error)
        }
    }

    async loginPersonal (username, password){
        try {
            const res = await fetch(`http://${import.meta.env.VITE_API}/loginempleado`, {
                method: 'POST',
                credentials: 'include', 
                headers: {
                    'Accept': 'application/json',
                  'Content-Type' : 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ 
                    username: username,
                    password : password
                 })
            })


            const response = await res.json()
            this.session = await response
            if (this.session =! null){
                return true
            } else {
                return false
            }
            
        } catch(error) {
            console.log(error)
        }
    }

    async logout (){
        try {
            const res = await fetch(`http://${import.meta.env.VITE_API}/loginempleado`,{
                method: 'POST',
                credentials: 'include'
            })
    }catch(error){
        console.log(error)
    }
    }

}
