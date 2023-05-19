import { createContext, useState } from "react";
import app from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
//step-1
export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //step-3
    const authInfo = {
        user,
        createUser,
        logUser,
    }

    return (
        //step-2
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;