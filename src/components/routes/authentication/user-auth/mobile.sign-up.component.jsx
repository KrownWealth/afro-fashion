/* This is a Mobile first Component. Designed to render on mobile devices and smaller screen sizes 
   This component can be modified or made redudant as it only entends a viewport for the sign-up page
*/

import SignUpForm from '../sign-up/sign-up-page.jsx';

import './authentication.scss'

const MobileSignUp = () => {
  return (
    <>
      <div className='mt-1 lr-margin yb-p'>
        <SignUpForm />
      </div>
    </>
  )
}

export default MobileSignUp;