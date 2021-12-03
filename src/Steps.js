import { Button, LinearProgress } from '@mui/material'
import React from 'react'
import useStyles from './Steps.styles'
import { ArrowBackIos, ArrowForwardIos, PlayArrow, Pause, Replay } from '@mui/icons-material';

const Steps = ({ currentStepIndex, nextStep, prevStep, togglePlayStep, replayStep, stepsLen, isPlaying }) => {
    const classes = useStyles()
    return (
        <div>
            <Button variant="outlined" onClick={prevStep} disabled={currentStepIndex === 0}><ArrowBackIos /></Button>
            {
                isPlaying ? (<Button variant="outlined" onClick={togglePlayStep}><Pause /></Button>)
                    : currentStepIndex === stepsLen - 1 ? (<Button variant="outlined" onClick={replayStep}><Replay /></Button>)
                        : (<Button variant="outlined" onClick={togglePlayStep}><PlayArrow /></Button>)
            }

            <Button variant="outlined" onClick={nextStep} disabled={currentStepIndex === stepsLen - 1}><ArrowForwardIos /></Button>
            <div>
                <LinearProgress className={classes.progressContainer} variant="determinate" value={Math.floor((currentStepIndex / (stepsLen - 1)) * 100)} />
            </div>
        </div>
    )
}

export default Steps
