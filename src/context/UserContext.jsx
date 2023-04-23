import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        _id: "",
        token: "",
        firstName: "",
        lastName: "",
        email: "",
        interests: "",
        about_me: "",
        volunteering_records: [],
        profileImage: "",
        linkedinLink: "",
        pastVolunteer: null,
    });

    return <UserContext.Provider value={[user, setUser]}>{props.children}</UserContext.Provider>;
};
