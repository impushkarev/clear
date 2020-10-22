// CURRENT COMPONENT
import React from "react"
import "./style.scss"

// COMPONENTS




type ColProps = {
  children: React.ReactNode,
  xs?: string | number, 
  sm?: string | number, 
  md?: string | number, 
  lg?: string | number, 
  xl?: string | number
}

const Col:React.FC<ColProps> = ({children, xs, sm, md, lg, xl}) => {

  const colClasses = ["col"]
  if (xs) colClasses.push(`col-xs-${xs}`)
  if (sm) colClasses.push(`col-sm-${sm}`)
  if (md) colClasses.push(`col-md-${md}`)
  if (lg) colClasses.push(`col-lg-${lg}`)
  if (xl) colClasses.push(`col-xl-${xl}`)

  return (
    <>
      <div className={colClasses.join(" ")}>
        {children}
      </div>
    </>
  )
}

export default Col