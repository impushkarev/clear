// CURRENT COMPONENT
import React from 'react'
import './style.scss'

// COMPONENTS




type ContainerProps = {
  children: React.ReactNode, 
  xs?: string | number, 
  sm?: string | number, 
  md?: string | number, 
  lg?: string | number, 
  xl?: string | number
}

const Container:React.FC<ContainerProps> = ({children, xs, sm, md, lg, xl}) => {

  const containerClasses = ["container"]
  if (xs) containerClasses.push(`container-xs-${xs}`)
  if (sm) containerClasses.push(`container-sm-${sm}`)
  if (md) containerClasses.push(`container-md-${md}`)
  if (lg) containerClasses.push(`container-lg-${lg}`)
  if (xl) containerClasses.push(`container-xl-${xl}`)

  return (
    <>
      <div className={containerClasses.join(" ")}>
        {children}
      </div>
    </>
  )
}

export default Container