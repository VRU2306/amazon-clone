import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {auth} from "../firebase"
import './Login.css'
import { ValidatorForm } from 'react-material-ui-form-validator'
import TextValidator from 'react-material-ui-form-validator/lib/TextValidator'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material'
// import { borderRadius } from '@mui/system'
function Login(){
  const history = useNavigate()
  const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
function signIn (e) {
    const auth = getAuth();
      signInWithEmailAndPassword(auth,email, values.password)
      .then( () => {
        history('/')
        console.log(auth,email, values.password)
      })
      .catch(error => alert(error.message))
  }
function Register (e) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email, values.password)
      .then( () => {
        history('/')
        console.log(auth,email, values.password)
      })
      .catch(error => alert(error.message))
  }
 const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return(
    <div className="login">
        <img 
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt='amazon logo'
        />
      <div className="login__container"> 
        <h1>Sign-in with  App</h1>

     <ValidatorForm 
       id="auth-register"
        action=""
        noValidate={true}
        onSubmit={e => {
          e.preventDefault();
          signIn(email,values.password )}}
     >
         <TextValidator
               label="Email"
                type="email"
                name="email"
                display="filled"
                className="Passwordfield"
                fullWidth
                id="email"
                value={email}
                variant="outlined"
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Enter valid email']}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
          size="small"
         />
         <br></br>
         
    <FormControl  >
          <InputLabel >Password</InputLabel>
          <OutlinedInput
          size='small'
             style={{width:"255px"}}
                  label="Password"
         validators={['required', 'isPassword']}
                errorMessages={['This field is required', 'Enter a 6 characters password']}
           id="email"
             className="Passwordfield"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <br></br>
        <Button type="Submit"
        style={{
        textTransform:"capitalize",  
        background:" #ffd814",
        borderRadius: "5px",
        width: "100%",
        height: "30px",
        border: "1px solid",
        marginTop: "10px",
        borderColor:'#a88734 #9c7e31 #846a29',
        color:"black",
      cursor:" pointer"
      }}>Login</Button>
     </ValidatorForm>

        
          <p style={{fontStyle:"italic"}}>If you are new here please press Create your Amaon Account.. </p>
        <button className="login__registerButton" onClick={Register}>Create your Amazon Account </button>
      </div>
    </div>
  )
}

export default Login;