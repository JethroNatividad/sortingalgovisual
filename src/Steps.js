import { Button } from '@mui/material'
import React from 'react'
import useStyles from './Steps.styles'
import { ArrowBackIos, ArrowForwardIos, PlayArrow } from '@mui/icons-material';

const Steps = ({ currentStepIndex, nextStep, prevStep, playStep, stepsLen }) => {
    const classes = useStyles()
    return (
        <div>
            <Button variant="outlined" onClick={prevStep} disabled={currentStepIndex === 0}><ArrowBackIos /></Button>
            <Button variant="outlined" onClick={playStep}><PlayArrow /></Button>
            <Button variant="outlined" onClick={nextStep} disabled={currentStepIndex === stepsLen - 1}><ArrowForwardIos /></Button>
        </div>
    )
}

export default Steps
