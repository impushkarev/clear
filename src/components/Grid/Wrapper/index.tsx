// CURRENT COMPONENT
import React from "react"
import "./style.scss"

// COMPONENTS




type WrapperProps = {
  children: React.ReactNode, 
  valign?: string,
  halign?: string,
}

const Wrapper:React.FC<WrapperProps> = ({children, valign = "left", halign}) => {

  const wrapperClasses = ["wrapper"]
  // HORIZONTAL ALIGN
  if (halign === "left") wrapperClasses.push("wrapper-left")
  if (halign === "center") wrapperClasses.push("wrapper-hcenter")
  if (halign === "right") wrapperClasses.push("wrapper-right")
  if (halign === "between") wrapperClasses.push("wrapper-right")
  // VERTICAL ALIGN
  if (valign === "top") wrapperClasses.push("wrapper-top")
  if (valign === "center") wrapperClasses.push("wrapper-vcenter")
  if (valign === "bottom") wrapperClasses.push("wrapper-bottom")

  return (
    <>
      <div className={wrapperClasses.join(" ")}>
        {children}
      </div>
    </>
  )
}

export default Wrapper