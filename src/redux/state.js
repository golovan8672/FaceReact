let rerenderTree = () => {return}

let state = {
  dialogsPage: {
    messages:
      [
        { message: "Hello", id: 1 },
        { message: "Okey", id: 2 },
        { message: "Bro", id: 3 },
        { message: "luv u", id: 4 },
        { message: "come on", id: 5 }
      ],
    dialogs: [
      { name: "Sergey", id: 1 },
      { name: "Elena", id: 2 },
      { name: "Anton", id: 3 },
      { name: "Andrey", id: 4 },
      { name: "Boris", id: 5 },
      { name: "Sasha", id: 6 },
      { name: "Fedor", id: 7 },
      { name: "Georg", id: 8 }
    ]
  },
  profilePage: {
    updatedText: "",
    posts:
      [
        { text: "Hi, how are u", likeCount: "10" },
        { text: "I,am fine", likeCount: "2" },
        { text: "Come on", likeCount: "7" }
        
      ]
  },
  
  sidebar: {
    friends : [
      {name: "Sergey"},
      {name: "Andrey"},
      {name: "Georgy"}
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

}

export let updateNewText = (newText) =>{
  state.profilePage.updatedText = newText;
  rerenderTree(state,addPosts,updateNewText);
}

export let addPosts = () => {
  let addPost = {
    id : 5,
    text: state.profilePage.updatedText,
    likeCount: 0
  }
  state.profilePage.posts.push(addPost);
  state.profilePage.updatedText = '';

  rerenderTree(state,addPosts,updateNewText);
  
}

export const subscriber = (observer) => {
  rerenderTree = observer;
  rerenderTree(state,addPosts,updateNewText);
}
