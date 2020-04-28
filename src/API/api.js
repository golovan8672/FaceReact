import * as axios from 'axios'



const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "5e47258f-484f-4df9-9cfa-f62e6488c0c6"
    }
})

const API = {
    getUsers(pageSize, currentPage) {
        return instanse.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        return instanse.get(`profile/${userId}`)
            .then(response => {
                debugger
                return response.data
            })
    },
    getAuth() {
        return instanse.get("auth/me")
            .then(response => {
                return response.data
            })
    },
    setFollow(userId) {
        return instanse.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    setUnfollow(userId) {
        return instanse.delete(`follow/${userId}`)

    }
}
export default API