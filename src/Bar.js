import React from 'react'
import useStyles from './Bar.styles'
const Bar = ({ num, color }) => {
    const styleProps = {
        backgroundColor: color,
        color: 'white',
        num
    }
    const classes = useStyles(styleProps)
    // const styles = {
    //     height: num + 30 + 'px',
    //     width: '30px', background: color,
    //     margin: '0px 5px',
    //     color: 'white',
    //     display: 'flex',
    //     alignItems: 'end',
    //     justifyContent: 'center',
    //     paddingBottom: '10px'
    // }

    return (
        <div className={classes.main}>
            <div>
                {num}
            </div>
        </div>
    )
}

export default Bar
