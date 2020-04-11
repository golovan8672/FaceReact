let initial = {
    friends: [
        { name: "Sergey" },
        { name: "Andrey" },
        { name: "Georgy" }
    ],
    links:
        [
            { nameNav: "Profile", path: '/profile' },
            { nameNav: "Dialogs", path: '/dialogs' },
            { nameNav: "Music", path: '/music' },
            { nameNav: "News", path: '/news' },
            { nameNav: "Settings", path: '/settings' }
        ]
}
const sidebarReducer = (state = initial,action) => {
    
    return state;
}

export default sidebarReducer