import Button from 'react-bootstrap/Button'
import './index.scss'
import Bars from '../Bars'
import { useState } from 'react'

const Home = () => {

    const [numBars, setNumBars] = useState(20)

    const handleClick = (action) => {
        if(action == 'add-bar') {
            setNumBars(numBars + 1)
        }
        else if(action == 'remove-bar') {
            if(numBars > 0) {
                setNumBars(numBars - 1)
            }
        }
    }

    return (
        <>
            <div className='settings-button-container'>
                <Button onClick={() => handleClick('add-bar')} variant='primary'>Add Bar</Button>
                <Button onClick={() => handleClick('remove-bar')} variant='primary'>Remove Bar</Button>
            </div>
            <div className='sort-button-container'>
                <Button variant="secondary">Selection Sort</Button>
                <Button variant="secondary">Selection Sort</Button>
                <Button variant="secondary">Selection Sort</Button>
                <Button variant="secondary">Selection Sort</Button>
                <Button variant="secondary">Selection Sort</Button>
                <Button variant="secondary">Selection Sort</Button>
                <Button variant="secondary">Selection Sort</Button>
                <Button variant="secondary">Selection Sort</Button>
                <Button variant="secondary">Selection Sort</Button>
                <Button variant="secondary">Selection Sort</Button>
                <Button variant="secondary">Selection Sort</Button>
            </div>
            <div className='bars-container'>
                <Bars />
            </div>
        </>
    )
}

export default Home