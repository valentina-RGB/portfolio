"use client";

import {createContext, useContext, useEffect, useState} from "react";
import {supabase} from "@/api/client";

import AOS from 'aos';
import "aos/dist/aos.css";


const AuthContext = createContext<any>(null);

export function AuthProvider({children}: {children: React.ReactNode}) {
    const [user, setUser] = useState<any>(null);
    useEffect (()=>{
        const { data } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });
        return () => {
            data.subscription.unsubscribe();
        }
    },[]);

    useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

   return (
       <AuthContext.Provider value={{user, setUser}}>
           {children}
       </AuthContext.Provider>
   );
}

export function useAuth() {
   return useContext(AuthContext);
}
