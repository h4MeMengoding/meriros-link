import * as React from 'react';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    fab: {
        right: 20,
        position: 'fixed'
    }
})

export default function FloatingActionButtons() {
    const classes = useStyles()

  return (
      <Fab variant="extended" className={classes.fab}>
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
  );
}
