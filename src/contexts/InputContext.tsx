import { PropsWithChildren, createContext, useContext, useState } from "react";



const InputContext = createContext({
    input: "",
    setInput: (input: string) => {}
})

export const InputProvider = ({children}: PropsWithChildren) => {
    const [input, setInput] = useState("");
    
    return (
        <InputContext.Provider value={{input, setInput}}>
            {children}
        </InputContext.Provider>
    )
}

export const useInputContext = () => useContext(InputContext)

