import { UserInfo } from './../UserInfo'

const logIn = (user:UserInfo[], errors:{}) => {

    return {
        type: "LOG_IN",
        name: user,
        errors: errors,
    }
}

const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

const addUser = (user:UserInfo[], errors:{}) => {
    return {
        type: "ADD_USER",
        name: user,
        errors: errors,
    }
}

export default {
    logOut,
    addUser,
    logIn
}
