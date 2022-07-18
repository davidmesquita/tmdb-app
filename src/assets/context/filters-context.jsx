import React, { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

const FilterContextData={
  filters:{
    title:""
  }[0],
  setCurrentFilter (filter = Filter){}
}
export const Filter={
  title:""
}
const FilterContext = createContext(
  {} = FilterContextData
)
export const FilterProvider=({children}) =>{
  const [filters] = useState([
    {title: "All"},
    {title: "Movies"},
    {title: "Tv Shows"}
  ])

  const[currentFilter, setCurrentFilter]=useState(filter[0])

  return(
    <FilterContext.Provider
      values={{
        filters,
        currentFilter,
        setCurrentFilter
      }}
      >
        {children}
    </FilterContext.Provider>
  )

}
export const useFiltersContext = () => useContext(FilterContext)
