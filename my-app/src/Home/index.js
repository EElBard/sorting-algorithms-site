import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import './index.scss'
import { useState } from 'react'
import Bar from '../Bar'

const Home = () => {

    const [bars, setBars] = useState([])
    const [delay, setDelay] = useState(100)

    const [colorArray, setColorArray] = useState(() => {
        const initialColors = Array(bars.length).fill('red');
        return initialColors;
    });      

    const sortingColors = {
        compared: 'yellow', // Color for bars being compared
        swapped: 'green',  // Color for bars being swapped
    };      
    
    const minHeight = 1;
    const maxHeight = 100;

    const addBar = (x) => {
        setBars((prevBars) => {
            // Create a newBars array based on the previous state
            const newBars = [...prevBars]
            for (var i = 0; i < x; i++) {
                if (newBars.length < 50) {
                    const randomHeight = Math.floor(
                        Math.random() * (maxHeight - minHeight + 1) + minHeight
                    )
                    newBars.push(randomHeight)
                }
            }
            // Return the updated state
            return newBars
        })
    }

    const removeBar = () => {
        if (bars.length > 0) {
          const newBars = [...bars]
          newBars.pop()
          setBars(newBars)
        }
    }

    const generateArray = async () => {
        try {
            await setBars([])
            await addBar(30)
        } catch (e) {console.log(e)}
        
    }

    const selectionSort = async () => {
        const barsCopy = [...bars]; // Create a copy of the current 'bars' array
        const n = barsCopy.length;   // Get the number of elements in the array
      
        for (let i = 0; i < n - 1; i++) {
          let minIndex = i; // Assume the current index is the minimum
      
          // Set the color of bars being compared to 'compared' color
          setColorArray((prevColors) => {
            const newColors = [...prevColors];
            newColors[i] = sortingColors.compared;
            return newColors;
          });
      
          // Simulate the sorting process by delaying state updates
          await new Promise((resolve) => setTimeout(resolve, delay));
      
          // Find the index of the minimum element in the unsorted part
          for (let j = i + 1; j < n; j++) {
            if (barsCopy[j] < barsCopy[minIndex]) {
              minIndex = j;
            }
          }
      
          // Swap the elements in barsCopy
          const temp = barsCopy[i];
          barsCopy[i] = barsCopy[minIndex];
          barsCopy[minIndex] = temp;
      
          // Set the color of bars being swapped to 'swapped' color
          setColorArray((prevColors) => {
            const newColors = [...prevColors];
            newColors[i] = sortingColors.swapped;
            newColors[minIndex] = sortingColors.swapped;
            return newColors;
          });
      
          // Update the state with new bars and colors after each step
          setBars([...barsCopy]);
      
          // Reset the color of bars being compared and swapped to the original color ('red') after the delay
          await new Promise((resolve) => setTimeout(resolve, delay)); // Adjust the delay time as needed
      
          setColorArray((prevColors) => {
            const newColors = [...prevColors];
            newColors[i] = 'red';
            newColors[minIndex] = 'red';
            return newColors;
          });
        }
      };
      

    const clearBars = () => {
        setBars([])
    }
      

    return (
        <>
            <div className='bars-container'>
                {bars.map((height, index) => (
                    <Bar
                    key={index}
                    height={`${height}%`}
                    color={colorArray[index]}
                    onRemove={() => removeBar(index)}
                    />
                ))}
            </div>

            <div className='settings-button-container'>
                <Button onClick={() => addBar(1)} variant='primary'>Add Bar</Button>
                <Button onClick={removeBar} variant='primary'>Remove Bar</Button>
                <Button onClick={generateArray} variant='primary'>Generate New Array</Button>
                <Button onClick={clearBars} variant='primary'>Clear Bars</Button>
                <div className='delay-settings'>
                    <Button onClick={() => setDelay(delay + 10)}>Add Delay</Button>
                    <Badge pill className='delay-label'>{delay}</Badge>
                    <Button onClick={() => setDelay(delay - 10)}>Subtract Delay</Button>
                </div>
            </div>
            <div className='sort-button-container'>
                <Button onClick={() => selectionSort()} variant="secondary">Selection Sort</Button>
            </div>
        </>
    )
}

export default Home