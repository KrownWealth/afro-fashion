import { useState } from "react";
import FormField from "./form.component";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logGoogleUser } from "../user-auth/logGoogle";
import Button from "../../../buttons/button.component";
import { useAlert } from "../../../../contexts/alert.context";
import { useLoading } from '../../../../contexts/loading.context';
import { signInWithEmail } from "../../../../utils/firebase.utils";

const defaultFormFields = { email: '', password: '' }

// This component embodies the first creation of sign-in (logic and UI) before rendering on other components
const SignInForm = () => {
  const navigate = useNavigate();
  const addAlert = useAlert().addAutoCloseAlert;
  const { showLoading, hideLoading } = useLoading();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;
  const resetFormFields = () => { setFormFields(defaultFormFields) }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }
  
  let path = '/'; 

  const HandleSubmit = async (event) => {
    event.preventDefault()

    try {
      showLoading();
      await signInWithEmail(email, password);

      resetFormFields();
      addAlert("success", 'Welcome back to Afro Fashion!  :) ')
      
      hideLoading();
      navigate(path);
    } catch (error) {
      hideLoading();

      switch (error.code) {
        case 'auth/user-not-found':
          addAlert("danger", 'User not found!')
          break
        case 'auth/invalid-login-credentials':
          addAlert("danger", 'Email or password incorrect!!')
          break
        default: addAlert("danger", 'Something went wrong!!!');
      }
    }
  }

  return (
    <Container className="no-padding-container">
      <div className="card container sign-in-container">
        <div className="centered">
          <h4 className="title">Login</h4>
          <hr/>
        </div>

        <form onSubmit={HandleSubmit}>
          <div className="group">
            <div className="form-fields">
            <FormField
              label={'Email'}
              type="email" required
              onChange={handleChange}
              name="email"
              autoComplete="true"
              value={email}
            />

            <FormField
              label={'Password'}
              type="password" required
              onChange={handleChange}
              name="password"
              autoComplete="true"
              value={password}
            />

            <div className='buttons-container'>
              <Button type='submit'>Sign In</Button>
              <Button
                type='button'
                buttonType='google'
                onClick={logGoogleUser}
              >
               Google sign-in
              </Button>
            </div>
            </div>
          </div>
        </form>

        <p className="centered z-footer"> 
          Don't have an account? 
          <a href='auth/register' className="zf-link"> &nbsp;Go to sign up</a>
        </p>
      </div>
    </Container>
  )
}

export default SignInForm;