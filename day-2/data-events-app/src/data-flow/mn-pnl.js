import { ButtonPanel } from "./btn-pnl";
import { TextPanel } from "./txt-pnl";

import styles from './mn-pnl.module.css'
import {useState } from 'react'

export function MainPanel() {

    const [sz, setSz] = useState(12)

    const onMns = () => setSz( sz - 1 )
    const onPls = () => setSz( sz + 1 )

    return(
        <div className={styles.container}>
            <TextPanel sz={sz}/>
            <ButtonPanel  onMns={onMns} onPls={onPls}/>
        </div>
    )
}