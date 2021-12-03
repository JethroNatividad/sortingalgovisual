import './App.css';
import React, { useEffect, useState } from 'react'
import Bar from './Bar';
import AppBar from '@mui/material/AppBar'
import { Button, createTheme, MenuItem, Select, Slider, Toolbar, Typography } from '@mui/material';
import useStyles from './App.styles'
import RandomArrayNumberGenerator from './Functions/rang'
import Steps from './Steps';
import algorithms from './Algorithms/main';
import { timeout } from './Functions/helpers';


function App() {
  const theme = createTheme()
  const classes = useStyles()
  const sortAlgorithms = [{ name: 'Bubble Sort', id: 'bubblesort' }, { name: 'Selection Sort', id: 'selectionsort' }, { name: 'Insertion Sort', id: 'insertionsort' }]
  const [currentAlgorithm, setCurrentAlgorithm] = useState(sortAlgorithms[0].id)
  // Make random number on first render
  const [arr, setArr] = useState(RandomArrayNumberGenerator(15, 50, 200))
  const [steps, setSteps] = useState([[...arr]])
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [compareStepsIndexes, setCompareStepsIndexes] = useState([[-1, -1]])
  const [speedMs, setSpeedMs] = useState(50)
  const [isPlaying, setIsPlaying] = useState(false)

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

  // check isPlaying and plays from current step
  useEffect(() => {
    async function play() {
      if (isPlaying && currentStepIndex < steps.length - 1) {
        await timeout(speedMs)
        setCurrentStepIndex(currentStepIndex + 1)
      } else {
        setIsPlaying(false)
      }

    }
    play()
  }, [isPlaying, currentStepIndex, speedMs])

  const nextStep = () => {
    setCurrentStepIndex(currentStepIndex + 1)
  }

  const prevStep = () => {
    setCurrentStepIndex(currentStepIndex - 1)
  }
  const skipPreviousStep = () => {
    setCurrentStepIndex(0)
  }
  const skipNextStep = () => {
    setCurrentStepIndex(steps.length - 1)
  }

  const togglePlayStep = () => {
    setIsPlaying(!isPlaying)
  }
  const replayStep = () => {
    setCurrentStepIndex(0)
    setIsPlaying(true)
  }

  const getCurrentColor = (index) => {
    const colors = [theme.palette.success.main, theme.palette.warning.main, theme.palette.secondary.main]
    const currentColorArr = compareStepsIndexes[currentStepIndex]
    if (currentColorArr) {

      const colorExist = currentColorArr.indexOf(index)
      if (colorExist !== -1) {
        return colors[colorExist]
      }
    }
    return theme.palette.primary.main
    // }

  }

  const handleAlgoChange = (e) => {
    setCurrentAlgorithm(e.target.value)
    MakeRandomArr()
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Visual Sorting Algorithms
          </Typography>
          <Select
            disabled={isPlaying}
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
          <Bar key={i} num={number} color={getCurrentColor(i)
          } />
        ))}
      </div>

      {/* Steps */}

      <div className={classes.stepContainer}>
        <Steps currentStepIndex={currentStepIndex}
          nextStep={nextStep}
          prevStep={prevStep}
          togglePlayStep={togglePlayStep}
          stepsLen={steps.length}
          isPlaying={isPlaying}
          replayStep={replayStep}
          skipPreviousStep={skipPreviousStep}
          skipNextStep={skipNextStep}
        />
      </div>

      {/* Speed Slider below */}
      <div className={classes.bottomContainer}>
        <div className={classes.sliderContainer}>

          <Slider
            disabled={isPlaying}
            size="small"
            color="primary"
            value={speedMs}
            onChange={(e, value) => {
              setSpeedMs(value)
            }}
            min={50}
            max={1000}
            // step={100}
            marks={[{ value: 50, label: '50ms' }, { value: 1000, label: '1s' }]}
            valueLabelDisplay="on"
          />
        </div>
        <Button variant='outlined' color="primary" onClick={MakeRandomArr} disabled={isPlaying}>Randomize</Button>

      </div>
    </div >
  )
}


export default App;