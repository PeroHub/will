import * as React from 'react';
import { json, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import logo from '../../free.png'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function AlertDialogSlide({handleClose, open, setBeneficiary, beneficiary}) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   firstName: data.get('firstName'),
    //   lastName: data.get('lastName'),
    //   asset: data.get('asset'),

    // });
    setBeneficiary([...beneficiary, {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      asset: data.get('asset'),
    }])
    handleClose()
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Typography sx={{textAlign: "center", mb: 4, mt: -4, fontSize: "20px"}}>Add Beneficiary</Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  // autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type='number'
                  required
                  fullWidth
                  id="asset"
                  label="Percentage %"
                  name="asset"
                />
              </Grid>
            </Grid>
         
            <Box>
              <Button
                variant="contained"
                onClick={handleClose}
                sx={{ mt: 3, mb: 2 }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 2 }}
                // onClick={handleSubmit}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const theme = createTheme();

export default function Form() {
  const [open, setOpen] = React.useState(false);
  const [ beneficiary, setBeneficiary ] = React.useState([])
  const [ total, setTotal ] = React.useState([])

  const navigate = useNavigate()
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    setTotal([...beneficiary, {
      willFirstName: data.get('willFirstName'),
      willLasttName: data.get('willFirstName'),
      assest: data.get('asset'),
      executor: data.get('executor'),
      location: data.get('location')
    }])
    

  };
  
  localStorage.setItem("come", JSON.stringify(total))
  localStorage.setItem("beneficiaries", JSON.stringify(beneficiary))


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <AlertDialogSlide handleClose={handleClose} open={open} setBeneficiary={setBeneficiary} beneficiary={beneficiary} />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <img src={logo} alt="logo" height={40} />
          <Typography component="h1" variant="h5">
            PerfectWill
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="willFirstName"
                  required
                  fullWidth
                  id="willFirstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="willlastName"
                  label="Last Name"
                  name="willLastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  // autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type='number'
                  required
                  fullWidth
                  id="assest"
                  label="What is the approximate value of your assets in US dollar? (Please include all real estate, financial accounts, and personal items.)"
                  name="assest"
                  
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  type="text"
                  fullWidth
                  id="executor"
                  label="Executor Name"
                  name="executor"
                  autoComplete="family-name"
                />
              </Grid>
              
              <Grid item xs={12}>
                <Button
                type="submit"
                onClick={handleClickOpen}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add beneficiaries 
              </Button>
              </Grid>
              <Grid item xs={12}>
                {beneficiary.map((item, index) => (
                  <Card sx={{ maxWidth: 445 }} mt={2}>
                    <CardContent>
                        <Box sx={{display: "flex", justifyContent: "space-around"}}>
                          <Typography variant='span'>{`${item.firstName} ${item.lastName}`}</Typography>
                          <Typography ml={4} variant='span'>{item.asset}%</Typography>
                          {/* <Typography ml={2} variant='span' color={"red"} sx={{cursor: "pointer"}}>Delete</Typography> */}

                        </Box>
                    </CardContent>
                  </Card>
                ))}
              
              </Grid>
            </Grid>
           {beneficiary.length > 0 && (
            
              <Button
              onClick={() => navigate("/form/will")}
              type="submit"
              textAlign={"end"}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Generate Will
            </Button>
            
           )}
            
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
