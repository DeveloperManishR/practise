import { useState, createContext } from "react";


export const CounterContext = createContext(null)

export const Counterprovider = (props) => {

    const [count, setcount] = useState(0)

    const [loading, setloading] = useState(false)
    return (
        <CounterContext.Provider value={{ name: "manish", count, setcount, setloading }}>
            {loading && (
                <div className="relative z-10">
                    <div className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin"></div>
                        </div>
                    </div>
                </div>
            )}
            {props.children}
        </CounterContext.Provider>
    )
}