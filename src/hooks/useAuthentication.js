import axios from "axios"

const useAuthentication = () => {

    const createNewUser = data =>{
        const URL_BASE = import.meta.env.VITE_REACT_APP_URL
        const url = `${URL_BASE}/users`
        axios.post(url, data)
        .then(res => console.log(res.data))
        .catch (error => console.log(error))
    }

    const loginUser = data => {
        const URL_BASE = import.meta.env.VITE_REACT_APP_URL
        const url = `${URL_BASE}/users/login`
        axios.post(url, data)
        .then(res => {
            localStorage.setItem('token', res.data.token)
        console.log(res.data)
        })
        .catch (error => {
            console.log(error)
            localStorage.removeItem('token')
        })
    }


    return { createNewUser, loginUser }
}

export default useAuthentication