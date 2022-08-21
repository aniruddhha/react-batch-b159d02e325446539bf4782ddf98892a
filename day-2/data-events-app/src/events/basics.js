import { useState } from "react"
import abc from './basics.module.css'

export function Basic() {

    const [dt, setDt] = useState('calculating')
    const [rgb, setRgb] = useState({ 
        r : 0,
        g : 0,
        b : 0
      })

    const onBtnClk = () => {
        setDt(Date.now())
        console.log(`clicked ${dt}`)
    }

    const onMsEnt = () => {

        const r = Math.random() * 256
        const g = Math.random() * 256
        const b = Math.random() * 256

       setRgb({ r,  g , b  })
    }

    return(
        <>
            <div>
                <h1>{dt}</h1>
            </div>
            <div>
                <input type='button' value ='Okay' onClick={onBtnClk} />
            </div>
            <div>
                <input type='button' value ='Okay' onClick={ () => console.log(`clicked 2`)} />
            </div>
            <div className={abc.container}>
                <div className={abc.box} style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }} onMouseEnter={onMsEnt}></div>
                <div className={abc.box} style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }} onMouseEnter={onMsEnt}></div>
                <div className={abc.box} style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }} onMouseEnter={onMsEnt}></div>
                <div className={abc.box} style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }} onMouseEnter={onMsEnt}></div>
                <div className={abc.box} style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }} onMouseEnter={onMsEnt}></div>
                <div className={abc.box} style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }} onMouseEnter={onMsEnt}></div>
            </div>
        </>
    )
}