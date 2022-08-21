import React from "react"
import './progress.css'

export function ProgressBar() {

    const pg = 90
    const lbUp = 'File Upload : '
    const lbDn = 'File Download : '
    const isUpload = false
    const day = 2

    let dayName = ''
    const dv = true

    if(day == 1) {
        dayName = <h1>Mon</h1>
    }else if(day == 2) {
        dayName = <h2>Tue</h2>
    }else {
        dayName ='Sunday'
    }

    return (
        <>
           { dv && <div className='pgcont'>
                    {
                        isUpload ? <p>{lbUp}</p> : <p>{lbDn}</p>
                    }
            
                    <progress id="file" value={pg} max="100"> {pg}% </progress>
                
                    { dayName }
                </div>
            }
        </>
    )
}