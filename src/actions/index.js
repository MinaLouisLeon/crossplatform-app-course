//userReducer

export const actionSetUser = (args) => {
    return{
        type : 'setUser',
        payload : args
    }
}

//pageContentReducer

export const actionSetNavTo = (pageName) => {
    return{
        type : pageName,
        mode : ""
    }
}