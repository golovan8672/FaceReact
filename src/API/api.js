import * as axios from 'axios'



const getUsers = (pageSize, currentPage) => {
    return (
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`, {
            withCredentials: true
        }))
}
export const getProfile = (userId) => {
    return (
        axios
        .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId, {
            withCredentials: true
        })
    )
}

export default getUsers