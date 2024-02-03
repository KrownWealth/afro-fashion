import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <>
      <div className="card p-2 mb-2 vh-100">
        <div className="mx-auto text-center">
          <div className="card-title mt-5">
            <h2 className="mx-auto bg-ws p-2">Page Not Found!</h2>
          </div>
          <div className="mt-5">     
            <img loading="lazy" 
              alt="Page Not Found media"
              className="mt-5 lg-fullWidth" 
              src="https://media.istockphoto.com/id/687810238/photo/pug-dog-with-yellow-constructor-safety-helmet-and-cone-and-404-error-and-dead-end-sign-on.jpg?s=612x612&w=0&k=20&c=DbvLxH_RhgH90S12YOBuYD2TDBLuiRC7SUy69Enm_g4="
            /> 
          </div>
          <div className="lg-div"></div>
          <div className="mt-3 p-3">
            <span>Redirecting to the home page in {countdown} seconds...</span>
          </div>
        </div>  
      </div>
    </>
  );
};

export default Page404;