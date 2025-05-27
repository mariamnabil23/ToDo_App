import { createContext, useState } from "react";

export const ThemeContext =  createContext();

export const ThemeContextProvider =( {children} )=>{

    const [dark, setDark] = useState(() => {
        const saved = sessionStorage.getItem("darkTheme");
        return saved === "true";         // output ===> false
    });
    
    const switchTheme = () => {
    setDark((prev) => {
        const newValue = !prev;         // newValue = true ===> dark    
        sessionStorage.setItem("darkTheme", newValue);
        return newValue;
    });
    };

    return <ThemeContext.Provider  value={{dark, switchTheme}} >
        {children}
    </ThemeContext.Provider>
}

