export function ButtonPanel({ onMns, onPls }) {
    return (
        <div>
            <input type='button' value='-' onClick={onMns}/>
            <input type='button' value='+' onClick={onPls}/>
        </div>
    )
}