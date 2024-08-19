

export default class GeneroService {

    async traerGenero() {
        try {
        const response = await fetch(`http://${import.meta.env.VITE_API}/generos`,{
            method:  'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
            },
        })
        const res = await response.json()
        return res
    }catch(error) {
        console.error(error)
    }
    }
}