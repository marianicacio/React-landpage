import './style.css'

export default function Square({color}) {
    return <div className={`square square-${color}`}></div>
}