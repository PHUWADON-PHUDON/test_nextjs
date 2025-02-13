"use client"
import { useEffect,useState,createContext } from "react";

export const darkmodecontext = createContext<any>(undefined);

export default function Darkmodecontext({children}:any) {
    const [isdark,setisdark] = useState<boolean>(false);

    //! set dark mode

    const darkMode = () => {
        setisdark(prev => !prev);
    }

    useEffect(() => {
        if (isdark) {
            document.body.style.background = "black";
        }
        else {
            document.body.style.background = "#fff";
        }
    },[isdark]);

    //!

    return(
        <darkmodecontext.Provider value={{isdark,darkMode}}>
            {children}
        </darkmodecontext.Provider>
    );
}