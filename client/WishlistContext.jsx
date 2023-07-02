/* eslint-disable react/prop-types */
import  {useState , createContext} from "react";

export const ToggleContext = createContext()

export const ToggleProvider = ({children}) => {

    const [click , setClicked] = useState(false)

    return (
      <ToggleContext.Provider value={{ click, setClicked }}>
        {children}
      </ToggleContext.Provider>
    );
}