import React, { useState, createContext} from 'react'
import { View, Text } from 'react-native'


export  const VitalsContext = createContext()

export const VitalsProvider = ({children}) => {

    const [results, setResults] = useState(false)
    const [dose, setDose] = useState(null)  
    const [concentration, setConcentration] = useState({mg: null, ml: null}) 

    const [frequency, setFrequency]=useState(null)


    const [kilograms, setKilograms]=useState(null)
    const [pounds, setPounds]=useState(null)
    const [toggleKilograms, setToggleKilograms] = useState(true)

    const [toggleConcentration, settoggleConcentration]=useState(true)

    return (
        <VitalsContext.Provider value={{
            dose, 
            setDose,
            frequency,
            kilograms, 
            setKilograms,
            pounds, 
            setPounds,
            toggleKilograms, 
            concentration, 
            setConcentration
        }}>
            {children}
        </VitalsContext.Provider>
    )
}

