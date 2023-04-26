import { createContext, useState } from "react";

export const UserContext = createContext("default context value");

const initialUser = { firstName: "", lastName: "", email: "", token: null };

function UserContextProvider({ children }) {
    const [user, setUser] = useState(initialUser);
    return <UserContext.Provider value={{ user: user, setUser: setUser }}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
