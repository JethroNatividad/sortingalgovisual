import { Button } from '@mui/material'
import React from 'react'
import useStyles from './Steps.styles'
import { ArrowBackIos, ArrowForwardIos, PlayArrow } from '@mui/icons-material';

const Steps = () => {
    const classes = useStyles()
    return (
        <div>
            <Button variant="outlined"><ArrowBackIos /></Button>
            <Button variant="outlined"><PlayArrow /></Button>
            <Button variant="outlined"><ArrowForwardIos /></Button>
        </div>
    )
}

export default Steps
