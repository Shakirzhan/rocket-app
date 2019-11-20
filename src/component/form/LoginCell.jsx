import React from 'react';
import MainFromWrapper from './MainFromWrapper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import './css/main.css';
import './css/util.css';

const LoginCell = () => {
  return (
    <MainFromWrapper>
      <span className="login100-form-title p-b-51">
        Login
      </span>
      <div className="wrap-input100 validate-input m-b-16">
        <TextField
          label="Username"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          fullWidth
        />
      </div>
      <div className="wrap-input100 validate-input m-b-16">
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          fullWidth
        />
      </div>
      <div className="flex-sb-m w-full p-t-3 p-b-24">
        <FormControlLabel
          control={
            <Checkbox
              value="checkedB"
              color="primary"
            />
          }
          label="Remember me"
          className="label-checkbox100"
        />
        <div>
          <Link to="/registration" className="txt1">
            Registration
          </Link>
        </div>
      </div>
      <div className="container-login100-form-btn m-t-17">
        <Button variant="contained" className="login100-form-btn">
          Login
        </Button>
      </div>
    </MainFromWrapper>
  );
}

export default LoginCell;