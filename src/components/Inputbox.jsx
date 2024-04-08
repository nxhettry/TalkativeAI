import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#757575',
    },
  },
});

const Inputbox = (props) => {
  const [inpQuestion, setInpQuestion] = useState("");

  // gets input from the user
  function getInpQuestion(event) {
    let input = event.target.value;
    setInpQuestion(input);
  }
  // sends the request to the app component where API call is made
  const askQuestion = () => {
    props.theQuestion(inpQuestion);
    setInpQuestion("");
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        className='ml-4 mr-4 inpBox'
        sx={{
          minWidth: '80%',
          maxWidth: '100%',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          value={inpQuestion}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              askQuestion();
            }          
          }}
          id="filled-basic fullWidth"
          label="What's bothering you?"
          variant="filled"
          className='bg-white rounded-md'
          fullWidth
          onChange={getInpQuestion}
          InputLabelProps={{
            style: { fontSize: '1.25rem' },
          }}
          InputProps={{
            style: { fontSize: '1.25rem' },
            endAdornment: (
              <InputAdornment position="end">
                <SendIcon
                  style={{ fontSize: '1.75rem' }}
                  className='rounded-full p-1 cursor-pointer'
                  onClick={askQuestion}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

export default Inputbox;