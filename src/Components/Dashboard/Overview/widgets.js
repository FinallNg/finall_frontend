import React from "react"
import { Card } from '@themesberg/react-bootstrap';
import { BiUpArrowAlt, BiDownArrowAlt} from"react-icons/bi"




export const ExpenseWidget=(props)=>{
    const { category, title,  percentage } = props;
  return (
       <Card border="light" className="shadow-sm">
              <div className="category-text">
                <h5>{category}</h5>
                <h3 className="mb-2">{title}</h3>
              </div>
              <div className="small mt-2">
                <span>
                  +{percentage}%
                  <BiUpArrowAlt className="up-arrow"/>
                </span>
              </div>
              <div className="lastly">
              <p>compared to ($19000 last year)</p>
              </div>
      </Card>
    );
  }

  export const SavingsWidget=(props)=>{
  const { category, title, percentage } = props;
  
   return (
     <Card border="light" className="shadow-sm">
            <div className="category-text">
              <h5>{category}</h5>
              <h3 className="mb-3">{title}</h3>
            </div>
            <div className="small mt-20">
              <span>
                -{percentage}%
                <BiDownArrowAlt className="down-arrow"/>
              </span>
            </div>
            <div className="lastly">
             <p>Compared to ($165 last year)</p>
             </div>
    </Card>
  );
}


  
