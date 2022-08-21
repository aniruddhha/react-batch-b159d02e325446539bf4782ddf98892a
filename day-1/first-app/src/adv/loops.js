export function Cities() {
    const names = [
        { name : 'abc', pin : 411001 },
        { name : 'pqr', pin : 411002 },
        { name : 'lmn', pin : 411003 },
        { name : 'xyz', pin : 411004 },
        { name : 'gst', pin : 411005 },
    ]

    // const nmLi = []
    // nmLi.push(<li>abc</li>)
    // nmLi.push(<li>pqr</li>)
    // nmLi.push(<li>lmn</li>)
    // nmLi.push(<li>xyz</li>)

    const nmLi = names.map( (nm, ind) => <li key={ind}>{nm.name}</li>  )

    return(
        <>
            <ul>
               {nmLi} 
            </ul>  
        </>
    )
}