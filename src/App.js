import './App.css';
import React, { useEffect, useState } from 'react'
import Bar from './Bar';
import AppBar from '@mui/material/AppBar'
import { Button, createTheme, FormControl, InputLabel, MenuItem, Select, Slider, Toolbar, Typography } from '@mui/material';
import useStyles from './App.styles'
import RandomArrayNumberGenerator from './Functions/rang'
import Steps from './Steps';
import algorithms from './Algorithms/main';
import { timeout } from './Functions/helpers';


function App() {
  const theme = createTheme()
  const classes = useStyles()
  const sortAlgorithms = [{ name: 'Bubble Sort', id: 'bubblesort' }, { name: 'Insertion Sort', id: 'insertionsort' }]
  const [currentAlgorithm, setCurrentAlgorithm] = useState(sortAlgorithms[0].id)
  // Make random number on first render
  const [arr, setArr] = useState(RandomArrayNumberGenerator(15, 50, 200))
  const [steps, setSteps] = useState([[...arr]])
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [compareStepsIndexes, setCompareStepsIndexes] = useState([-1, -1])
  const [speedMs, setSpeedMs] = useState(100)

  const MakeRandomArr = () => {
    const randomArr = RandomArrayNumberGenerator(15, 50, 200)
    setArr(randomArr)
    const { steps, compareSteps } = algorithms[currentAlgorithm](randomArr)
    setSteps(steps)
    setCompareStepsIndexes(compareSteps)
    setCurrentStepIndex(0)
  }

  // generates the steps of the arr
  useEffect(() => {
    const { steps, compareSteps } = algorithms[currentAlgorithm](arr)
    setSteps(steps)
    setCompareStepsIndexes(compareSteps)
  }, [currentAlgorithm])

  // syncs the steps with the index
  useEffect(() => {
    setArr(steps[currentStepIndex])
  }, [currentStepIndex])

  const nextStep = () => {
    setCurrentStepIndex(currentStepIndex + 1)
  }

  const prevStep = () => {
    setCurrentStepIndex(currentStepIndex - 1)
  }

  // function that add 1 to current step index by a delay till max length
  const playStep = async (speed) => {
    setCurrentStepIndex(0)
    for (let i = currentStepIndex + 1; i < steps.length; i++) {
      setCurrentStepIndex(i)
      await timeout(speed)
    }
  }

  const handleAlgoChange = (e) => setCurrentAlgorithm(e.target.value)
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Visual Sorting Algorithms
          </Typography>

          <Slider
            size="small"
            color="secondary"
            value={speedMs}
            onChange={(e, value) => {
              setSpeedMs(value)
            }}
            min={50}
            max={1000}
            // step={100}
            marks={[{ value: 50, label: '50ms' }, { value: 100, label: '100ms' }, { value: 1000, label: '1s' }]}
            valueLabelDisplay="on"
          />

          <Button variant='outlined' color="inherit" onClick={MakeRandomArr}>Random Numbers</Button>

          <Select
            // style={{ color: 'white' }}
            className={classes.select}
            variant='standard'
            value={currentAlgorithm}
            // label="Algorithm"
            onChange={handleAlgoChange}
          >
            {sortAlgorithms.map(i => (
              <MenuItem value={i.id}>{i.name}</MenuItem>
            ))}

          </Select>
          {/* </FormControl> */}
        </Toolbar>
      </AppBar>
      {/* App bar */}

      {/* Show Algorithm */}
      <div className={classes.barContainer}>
        {arr.map((number, i) => (
          <Bar num={number} color={i === compareStepsIndexes[currentStepIndex][0] ? theme.palette.success.main : i === compareStepsIndexes[currentStepIndex][1] ? theme.palette.warning.main : theme.palette.primary.main} />
        ))}
      </div>

      {/* Steps */}

      <div className={classes.stepContainer}>
        <Steps currentStepIndex={currentStepIndex} nextStep={nextStep} prevStep={prevStep} playStep={() => playStep(speedMs)} stepsLen={steps.length} />
      </div>
    </div >
  )
}


export default App;