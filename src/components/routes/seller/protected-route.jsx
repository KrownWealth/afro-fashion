import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from "../../../contexts/user.context";

const ProtectedSellerRoute = ({ element }) => {
  const { currentUser } = useContext(UserContext);

  // check if the user is authenticated and has the 'seller' userType
  const isSeller = currentUser && currentUser?.userType === 'seller';
  return isSeller ? element : <Navigate to="/auth" />;
};

export default ProtectedSellerRoute;
