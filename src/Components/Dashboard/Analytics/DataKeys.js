import React from 'react'

function DataKeys({title, data}) {
  return (
    <div className='eachKey'>
        <h4>{title}</h4>
        {
            data && data.map((item, index) => {
                return (
                    <p key={index}>
                        <span style={{backgroundColor: item.fill}}></span>
                        {item.name}
                    </p>
                )
            }
            )
        }
        {/* <p>
            <span></span>
            Male
        </p> */}
    </div>
  )
}

export default DataKeys