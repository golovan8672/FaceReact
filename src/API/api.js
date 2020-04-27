import * as axios from 'axios'
import React from 'react'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ec89793f-e02a-4d1e-bb72-9c3f4a69468e"
    }
});

class API extends React.Component {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    }
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
    getUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
    getFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}


export default API