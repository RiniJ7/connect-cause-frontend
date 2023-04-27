import { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userState, setUserState] = useState({});
  return (
    <UserContext.Provider
      value={{ userState: userState, setUserState: setUserState }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
