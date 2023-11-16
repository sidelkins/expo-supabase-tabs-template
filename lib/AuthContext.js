import React, { useState, useEffect } from "react";
import { supabase } from "./supabase";

const AuthContext = React.createContext();

export function useSession() {
    const value = React.useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
      if (!value) {
        throw new Error('useSession must be wrapped in a <SessionProvider />');
      }
    }

    return value;
  }

export function SessionProvider(props) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        })
    }, [])

    return(
        <AuthContext.Provider value={ { session } }>
            {props.children}
        </AuthContext.Provider>
    )
}