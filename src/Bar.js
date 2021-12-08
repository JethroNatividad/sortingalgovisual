import React from 'react'
import useStyles from './Bar.styles'
const Bar = ({ num, color }) => {
    const styleProps = {
        backgroundColor: color,
        color: 'white',
        num
    }
    const classes = useStyles(styleProps)


    return (
        <div className={classes.main}>
            <div>
                {num}
            </div>
        </div>
    )
}

export default Bar
