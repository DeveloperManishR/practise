import { useState ,createContext} from "react";


export const CounterContext = createContext(null)

export const Counterprovider = (props) => {

    const [count, setcount] = useState(0)
    return (
        <CounterContext.Provider value={{ name: "manish",count ,setcount}}>
            {props.children}
        </CounterContext.Provider>
    )
}