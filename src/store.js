import React, {useState} from "react";

const userCart = [];

export const Context = React.createContext();

const Storage = ({children}) =>{
    const [cart, setCart] = useState(userCart);

    return(
        <Context.Provider value={[cart, setCart]}>{children}</Context.Provider>
    )
}

export default Storage;