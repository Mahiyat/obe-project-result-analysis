import { Alert, Box, Button, Slide, Snackbar, Typography } from '@mui/material';
import React from 'react';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function SubmitMarksButton({ type }) {
  const [state, setState] = React.useState({
    open: false,
    Transition: Slide,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingY: '16px',
        gap: '16px',
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick(SlideTransition)}
      >
        {`Submit ${type} Marks`}
      </Button>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
        autoHideDuration={1200}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Marks Submitted!
        </Alert>
      </Snackbar>
      <Typography
        variant="body2"
        sx={{ color: 'red', textAlign: 'left' }}
        gutterBottom
      >
        N.B. Marks once submitted cannot be undone
      </Typography>
    </Box>
  );
}
