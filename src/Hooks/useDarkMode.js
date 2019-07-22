import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [dark, setDark] = useLocalStorage("theDarkMode"); 

    useEffect(()=> {
        dark ? document.body.classList.add("dark-mode"):
        document.body.classList.remove("dark-mode")
        
    },[dark])
    return [dark, setDark]
};

export default useDarkMode;