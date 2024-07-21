import React, { createContext, FC, useState, ReactNode } from 'react';

import { User, UserContextValue, UserProviderProps } from '../interfaces';

export const UserContext  = createContext<UserContextValue | null>(null);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const [user, setUser]  = useState<User>({
        name: '',
        noOfRounds: 0,
        score: 0
    });

    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )

}


