import { createContext, useReducer } from "react"


export const MessageContext = createContext()

export const MessageContextProvider = ({children}) => {

    const INITIAL_STATE = {
      showModal:""
    }
    const messageReducer = (state, action) => {

        switch (action.type) {
            case "TOGLE_MODAL": 
                return {
                    showModal:action.payload,
                
                }
                // console.log(showModal);
                default:
                    return state;
        }
    }
    // console.log("ihi",INITIAL_STATE.showModal);

    const [state, dispatch1] = useReducer(messageReducer, INITIAL_STATE)
    // console.log("Satet context",state);
    return (
        <MessageContext.Provider value={{ chatValue : state, dispatch1}}>
             {children}
        </MessageContext.Provider>
    )
}
