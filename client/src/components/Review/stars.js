import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  1: 'Malo',
  2: 'Aceptable',
  3: 'Bueno',
  4: 'Muy Bueno',
  5: 'Excelente',
};

const useStyles = makeStyles({
  root: {
    width: 400,
    display: 'flex',
    alignItems: 'center',
  },
});

export default function Stars({ stars }) {
    const [value] = React.useState(stars);
    const [hover] = React.useState(-1);
    const classes = useStyles();
    if (stars) {
        return (
            <div className={classes.root}>
                <Rating
                    name="hover-feedback"
                    value={stars}
                    precision={1}
                    readOnly
                />
                {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
            </div>
        );
    }else {
        return ;
    }
}