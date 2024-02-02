/* This is a Mobile first Component. Designed to render on mobile devices and smaller screen sizes */

import SignInForm from '../sign-in/sign-in-page.jsx';

import './authentication.scss'

const MobileSignIn = () => {
  return (
    <>
      <div className='mt-1 lr-margin'>
        <SignInForm />
      </div>
    </>
  )
}

export default MobileSignIn;