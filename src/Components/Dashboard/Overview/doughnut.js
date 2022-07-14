import React from "react"
import doughnut from "../../../assets/doughnut.png"
import "../Overview/doughnut.css"

function Doughnut(){
    return(
        <div classname="doughnut-all">
        <div className="doughnut">
            <h3>Monthly Savings plan</h3>
            <img src={doughnut} alt ="pie chart" />
        </div>
        <div className="doughnut-amount1">
            <h4>Current Savings</h4>
            <span>$110</span>
         </div>
         <div className="doughnut-amount2">
            <h4>Outstanding Savings</h4>
            <span>$63</span>
         </div>
        </div>
    )
}
export default Doughnut