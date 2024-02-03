import { useState } from "react";
import FormField from "./form.component";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from '../../../buttons/button.component';
import { useAlert } from "../../../../contexts/alert.context";
import { useLoading } from '../../../../contexts/loading.context';
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { customCreateUserWithEmail } from "../../../../utils/firebase.utils";

import { logGoogleUser } from "../user-auth/logGoogle";

// This component embodies the first creation of sign-up (logic and UI) before rendering on other components
const SignUp = () => {
  const navigate = useNavigate();
  const [ buyer, setBuyer ] = useState(true);
  const addAlert = useAlert().addAutoCloseAlert;
  const { showLoading, hideLoading } = useLoading();

  const defaultFormFields = {
    userType: buyer ? 'buyer' : 'seller',
    displayName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  }

  const [formFields, setFormFields] = useState(defaultFormFields);
  const resetFormFields = () => { setFormFields(defaultFormFields) };
  const { userType, displayName, phone, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleChangeUser = () => {
    if(buyer) {
      setBuyer(false);
      navigate('#seller')
    } else { 
      navigate('')
      setBuyer(true);
    }
  }
  
  let userPath = '/auth', sellerPath = '/seller/accept-terms'

  const handleSuccessNavigate = (path) => navigate(path)

  const HandleSubmit = async (event) => {
    event.preventDefault()
    
    if (password !== confirmPassword) {
      addAlert("danger", 'Passwords do not match')
      return;
    }

    try {      
      showLoading();
      await customCreateUserWithEmail(email, password, displayName.toLowerCase(), phone, userType);
      
      if (userType === "seller"){
        resetFormFields();
        addAlert("info", 'Seller profile created. Continue set up!');
        
        hideLoading();
        handleSuccessNavigate(sellerPath);
        setBuyer(false);
      } else {
        resetFormFields();
        addAlert("success", 'User profile created. Go to sign in!');
        
        hideLoading();
        handleSuccessNavigate(userPath)
        setBuyer(true);
      }
    } catch (error) {
      hideLoading();

      if (error.message.includes('auth/weak-password')) {
        addAlert("warning", 'Your password must be at least 6 characters!');
      } 
      else
      if (error.message.includes('auth/email-already-in-use')) {
        addAlert("danger", 'Failed to register. This email already exists!!');
      } else {
        addAlert("danger", 'Failed Operation! Please Try again later!!!');
      }
    }
  }

  return (
    <Container className="no-padding-container">
      <div className="card container sign-up-container">
        <div className="centered">
          <h4 className="title">Register</h4><hr/>
        </div>

        <form onSubmit={HandleSubmit}>
          <div className="group">
            <div className="p-3 bg-ws -mt2">
              <div className="flex-just-center">
                <h6>Are you here to Buy or Sell?</h6>
              </div>

              <RadioGroup
                value={!buyer ? 'seller' : 'buyer'}
                onChange={handleChange}
                name='userType'
              >
                <ol className="mx-auto -mb">
                  <FormControlLabel 
                    onClick={handleChangeUser} 
                    label="Buyer" control={<Radio />} 
                    value="buyer" name="userType" />
                  <FormControlLabel 
                    onClick={handleChangeUser} 
                    label="Seller" control={<Radio />} 
                    value="seller" name="userType" />
                </ol>
              </RadioGroup>
            </div>

            <div className="form-fields">
            <FormField
              label={'Display Name'}
              type='text' required
              onChange={handleChange}
              name='displayName'
              autoComplete="true"
              value={formFields.displayName}
            />

            <FormField
              label={'Phone'}
              type='number' required
              onChange={handleChange}
              name='phone'
              autoComplete="true"
              value={formFields.phone}
            />

            <FormField
              label={'Email'}
              type='email' required
              onChange={handleChange}
              name='email'
              autoComplete="true"
              value={formFields.email}
            />
            
            <FormField
              label={'Password'}
              type='password' required
              onChange={handleChange}
              name='password'
              value={formFields.password}
              autoComplete='true'
            />

            <FormField
              label={'Confirm Password'}
              type='password' required
              onChange={handleChange}
              name='confirmPassword'
              value={formFields.confirmPassword}
              autoComplete='true'
            />
        
            <div className='buttons-container'>
              <Button type="submit">
                Sign Up
              </Button>
              {buyer && <Button
                type='button'
                buttonType='google'
                onClick={logGoogleUser}
              >
                Google Sign-up
              </Button>}
            </div>
          </div>
          </div>
        </form>

        <p className="centered z-footer"> 
          Already Registered? 
          <a href='/auth' className="zf-link"> &nbsp;Return to 
            sign in
          </a>
        </p>
        </div>
    </Container>
  )
}

export default SignUp;