import  { useState, useContext, createContext } from 'react'
import * as userService from '../services/userServices'
import { toast } from 'react-toastify'

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(userService.getUser())

    const login = async (email, password) => {
        try {
            const user = userService.login(email, password)
            setUser(user)
            toast.success('Login successful')
        } catch (err) {
            toast.error(err.response.data)
        }
    }

    const logout = () => {
        userService.logout()
        setUser(null)
        toast.success('Logout successful')
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)