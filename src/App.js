import './App.css';
import React, { useEffect, useState } from 'react'
import Bar from './Bar';
import AppBar from '@mui/material/AppBar'
import { FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import useStyles from './App.styles'

function App() {
  const classes = useStyles()
  const sortAlgorithms = [{ name: 'Bubble Sort', id: 'bubblesort' }, { name: 'Insertion Sort', id: 'insertionsort' }]
  const [currentAlgorithm, setCurrentAlgorithm] = useState(sortAlgorithms[0].id)
  const [arr, setArr] = useState([200, 50, 70, 90, 80])

  // const [currentCompareSteps, setCurrentCompareSteps] = useState([0, 1])
  // const [currentStep, setCurrentStep] = useState(0)
  // const [arrSteps, setArrSteps] = useState([arr])

  // const generateArrSteps = (arr, setArrSteps, setCurrentCompareSteps) => {
  //   const newArrSteps = [arr]
  //   const newCurrentCompareSteps = [[0, 1]]
  //   const bubbleSort = (a) => {
  //     for (let i = 0; i < a.length; i++) {
  //     }
  //     console.log('here')
  //     for (let i = 0; i < a.length; i++) {
  //       let noswaps = true
  //       for (let j = 1; j < a.length; j++) {

  //         if (a[i] > a[i + j]) {
  //           // swap
  //           let temp = a[i]
  //           a[i] = a[i + j]
  //           a[i + j] = temp
  //           noswaps = false
  //           // console.log(a, i, j)
  //           // console.log(a, i, i + j)
  //         }
  //         newArrSteps.push([...a], [...a])
  //         newCurrentCompareSteps.push([i, i + j], [-1, -1])
  //         // console.log(a)
  //       }
  //       if (noswaps) break;
  //     }
  //   }
  //   bubbleSort(arr.slice())
  //   setArrSteps(newArrSteps)
  //   setCurrentCompareSteps(newCurrentCompareSteps)
  // }

  // useEffect(() => {
  //   generateArrSteps(arr, setArrSteps, setCurrentCompareSteps)
  // }, [])

  // useEffect(() => {
  //   setArr(arrSteps[currentStep])
  // }, [currentStep])

  // const moveStepForward = () => {
  //   setCurrentStep(currentStep + 1)
  // }
  // const moveStepBackward = () => {
  //   setCurrentStep(currentStep - 1)
  // }
  // return (
  //   <div className="App">
  //     <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
  //       {/* {JSON.stringify(arrSteps)} */}
  //       {arr.map((number, i) => (
  //         <Bar num={number} color={i === currentCompareSteps[currentStep][0] ? 'green' : i === currentCompareSteps[currentStep][1] ? 'red' : 'black'} />
  //       ))}
  //     </div>
  //     <div>
  //       <button disabled={currentStep === 0} onClick={moveStepBackward}>{"<"}</button>
  //       <button disabled={currentStep === arrSteps.length - 1} onClick={moveStepForward}>{">"}</button>
  //     </div>
  //   </div>
  // );
  const handleAlgoChange = (e) => setCurrentAlgorithm(e.target.value)
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Visual Sorting Algorithms
          </Typography>
          <FormControl >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Algorithm
            </InputLabel>
            <Select
              variant='standard'
              value={currentAlgorithm}
              label="Algorithm"
              onChange={handleAlgoChange}
            >
              {sortAlgorithms.map(i => (
                <MenuItem value={i.id}>{i.name}</MenuItem>
              ))}

            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      {/* App bar */}

      {/* Show Algorithm */}
      <div className={classes.barContainer}>
        {arr.map((number, i) => (
          <Bar num={number} color={'black'} />
        ))}
      </div>
    </div>
  )
}


export default App;