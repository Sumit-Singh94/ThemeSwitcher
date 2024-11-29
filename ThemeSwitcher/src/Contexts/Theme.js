import{createContext,useContext} from "react";

export const Themecontext=createContext({   //accesss of these values
    themeMode:"light",
    darkTheme:()=>{ },
    lightTheme:()=>{ },

})

export const ThemeProvider=Themecontext.Provider

export default function UseTheme(){
    return useContext(Themecontext)
}