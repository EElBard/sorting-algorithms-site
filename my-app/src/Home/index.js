import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './index.scss'
import { useState } from 'react'
import Bar from '../Bar'

const Home = () => {

    const [bars, setBars] = useState([])
    
    const minHeight = 1;
    const maxHeight = 100;

    const addBar = () => {
        const randomHeight = Math.floor(
          Math.random() * (maxHeight - minHeight + 1) + minHeight
        );
        const newBars = [...bars, randomHeight];
        setBars(newBars);
      };
      

    const removeBar = () => {
        if (bars.length > 0) {
          const newBars = [...bars]
          newBars.pop()
          setBars(newBars)
        }
      }

    const clearBars = () => {
        setBars([])
    }
      

    return (
        <>
            <div className='settings-button-container'>
                <Button onClick={addBar} variant='primary'>Add Bar</Button>
                <Button onClick={removeBar} variant='primary'>Remove Bar</Button>
                <Button onClick={clearBars} variant='primary'>Clear Bars</Button>
                <Form>
                    <Form.Label>Number of Bars</Form.Label>
                    <Form.Control type='number' placeholder='20' />
                </Form>
            </div>
            <div className='sort-button-container'>
                <Button variant="secondary">Selection Sort</Button>
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