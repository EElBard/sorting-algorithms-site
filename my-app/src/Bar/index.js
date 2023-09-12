import './index.scss'
import { useState } from 'react'

const Bar = ({height}) => {
    const [color, setColor] = useState([])
    const styles = {
        color: color
    }

    return (<>
        <div className="bar" style={{ height: height }}>
        </div>
    </>)
}

export default Bar