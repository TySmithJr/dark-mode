import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedData , setStoredData] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredData(value);
    };
   
    return [storedData, setValue];

}
    export default useLocalStorage
