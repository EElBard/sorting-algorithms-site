import Button from 'react-bootstrap/Button'
import './index.scss'
import { useState } from 'react'
import Bar from '../Bar'

const Home = () => {

    const [bars, setBars] = useState([])
    
    const minHeight = 1;
    const maxHeight = 100;

    const addBar = () => {
        if (bars.length < 50) {
            const randomHeight = Math.floor(
            Math.random() * (maxHeight - minHeight + 1) + minHeight
            )
            const newBars = [...bars, randomHeight]
            setBars(newBars)
            console.log(newBars)
        }
    };
      

    const removeBar = () => {
        if (bars.length > 0) {
          const newBars = [...bars]
          newBars.pop()
          setBars(newBars)
        }
    }

    const generateArray = () => {
        setBars([])
        addBar()
    }

    const selectionSort = () => {
        const newBars = [...bars].sort(function(a, b){return a - b})
        setBars(newBars)
    }

    const clearBars = () => {
        setBars([])
    }

    const selectionSort = () => {
        const newBars = [...bars].sort((a, b) => a - b)
        setBars(newBars)
    }
      

    return (
        <>
            <div className='settings-button-container'>
                <Button onClick={addBar} variant='primary'>Add Bar</Button>
                <Button onClick={removeBar} variant='primary'>Remove Bar</Button>
                <Button onClick={generateArray} variant='primary'>Generate New Array</Button>
                <Button onClick={clearBars} variant='primary'>Clear Bars</Button>
            </div>
            <div className='sort-button-container'>
                <Button onClick={selectionSort} variant="secondary">Selection Sort</Button>
            </div>
            <div className='bars-container'>
                {bars.map((height, index) => (
                    <Bar key={index} height={`${height}%`} onRemove={() => removeBar(index)} />
                ))}
            </div>
        </>
    )
}

export default Home