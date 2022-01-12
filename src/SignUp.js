import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export function SignUp() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const SignUp = () => {

    const newUser = {
        userName,
        email,
        password,
    };
    console.log(newUser);

    fetch(`https://6166c4e413aa1d00170a6711.mockapi.io/movies`, {method: "POST",

            body:JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => history.push("/signup"));
  }

  const paperStyle =  { borderRadius: "10px", padding:"20px", Height: "100vh", width:"300px", margin:"20px auto"}

  return (

    <Grid mt="50px" align="center">
      <Paper elevation={10} style={ paperStyle}>

          <Typography variant="h4" marginTop="40px"> SIGN UP </Typography>

          <TextField value={userName} onChange={(event) => setUserName(event.target.value)}
             label="Enter your Name" variant="standard" padding="20px" fullWidth/> <br />

          <TextField value={email} onChange={(event) => setEmail(event.target.value)}
              label="Enter your Email" variant="standard" padding="20px" fullWidth/><br />

          <TextField value={password} onChange={(event) => setPassword(event.target.value)}
             label="Enter your Password" variant="standard" fullWidth/><br />

          <FormControlLabel control={<Checkbox Checked color="primary"/>} 
              label="Opt-in to receive occasional product updates, user research invitations."/> 

            <Button onClick={SignUp} variant="contained" margin="50px" padding="30px" fullWidth>Sign Up</Button>
      </Paper>      

    </Grid>




  );
}