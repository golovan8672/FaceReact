const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"

let initial = {
    users:
        [
            { id: 1, photoUrl: "https://img.icons8.com/plasticine/2x/user.png",fullName: "Sergey.G", Age: 24, status: "I'm happy", location: { country: "Russia", city: "Tyumen" } },
            { id: 2, photoUrl: "https://img.icons8.com/plasticine/2x/user.png",fullName: "Alex.G", Age: 32, status: "I'm happy, but many", location: { country: "Russia", city: "Moscow" } },
            { id: 3, photoUrl: "https://img.icons8.com/plasticine/2x/user.png",fullName: "Fedor.G", Age: 15, status: "I'm happy too", location: { country: "Russia", city: "Langepas" } }

        ]

}
const usersReducer = (state = initial, action) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user,followed:true}
                    }
                    return user
                })
            }      
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user,followed:false}
                    }
                    return user
                })
            }   
        default:
            return state;

    }
}
export const followAC = (userId) => ({ type: FOLLOW, userId});
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId})

export default usersReducer