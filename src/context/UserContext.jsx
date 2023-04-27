import { createContext, useState } from "react";

export const UserContext = createContext("default context value");

function UserContextProvider({ children }) {
    const [user, setUser] = useState(initialUser);
    return (
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
