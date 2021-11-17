import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    barContainer: {
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        marginTop: 30,
        height: 250
    },
    stepContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 30,
    },
    select: {
        marginLeft: 10,
        '&:before': {
            borderColor: "#fff",
        },
        '&:after': {
            borderColor: "#fff",
        },
        color: "#fff"
    },

}));

export default useStyles