import { createContext } from "react";
export const AppContext =createContext();


const contextData=(props)=>{

    const phone="1234567897";
    const products = [
        { id: 1, name: 'viresh' },
        { id: 2, name: 'nitesh' },
        { id: 3, name: 'sahil' },
        { id: 4, name: 'suresh' }
    ];

    return(

    <AppContext.Provider value={{phone,products}}>
        {props.children}
    </AppContext.Provider>
    )
}

export default contextData