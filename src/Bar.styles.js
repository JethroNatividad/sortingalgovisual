import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    main: (props) => ({
        height: props.num + 30 + 'px',
        width: '45px',
        backgroundColor: props.backgroundColor,
        margin: '0px 5px',
        color: props.color,
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        paddingBottom: '10px',
        transition: 'all 0.1s ease',
    }),

}));

export default useStyles