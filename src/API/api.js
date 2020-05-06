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
    },
    getAuth() {
        return instanse.get("auth/me")
    },
    setFollow(userId) {
        return instanse.post(`follow/${userId}`)
    },
    setUnfollow(userId) {
        return instanse.delete(`follow/${userId}`)
    },
    getProfileStatus(userId){
        return instanse.get(`profile/status/${userId}`)
    },
    updateProfileStatus(status){
        return instanse.put(`profile/status`,{status : status})
    },
    login(email,password,rememberMe){
        return instanse.post(`auth/login`,{email,password,rememberMe})
    },
    logout(){
        return instanse.delete(`auth/login`)
    }
}
export default API