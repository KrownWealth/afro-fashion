/* This is a Large-viewport Component. Designed to render on larger devices or screen sizes */

import { useContext } from 'react';
import Page404 from '../../../redirect/404.jsx';
import CreditsPage from '../credits/credits.jsx';
import { Route, Routes } from 'react-router-dom';
import { Help } from '../help/help.component.jsx';
import Seller from '../seller/sell.component.jsx';
import ShopStore from '../shop/shop.component.jsx';
import NavBar from '../navbar/navbar.component.jsx';
import UserProfile from '../user/user.component.jsx';
import BrandCollection from '../brands/brands.route.jsx';
import ProtectedUserRoute from '../user/protected-route.jsx';
import { UserContext } from "../../../contexts/user.context.jsx";
import ProtectedSellerRoute from '../seller/protected-route.jsx'; 
import Collection from '../../collection/collection.component.jsx';
import SignIn from '../authentication/user-auth/sign-in.component.jsx';
import SignUp from '../authentication/user-auth/sign-up.component.jsx';
import Checkout from '../../cartServices/checkout/checkout.component.jsx';
import { AcceptTerms } from '../authentication/seller-auth/accept-terms.jsx';

const Home = () => {
  const { currentUser } = useContext(UserContext);
  const userType = currentUser?.userType;

  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route path="help" element={<Help />} />
        <Route index element={<Collection />} />
        <Route path="auth" element={<SignIn />} />
        <Route path="auth/register" element={<SignUp />} />
        <Route path="shop/*" element={<ShopStore />} />
        <Route path="credits" element={<CreditsPage />} />
        <Route path="checkout" element={<Checkout />} />
        {userType === 'buyer' ? (
          <Route path="profile" element={<ProtectedUserRoute element={<UserProfile />} />} />
        ) : (
          <Route path="profile" element={<ProtectedSellerRoute element={<Seller />} />} />
        )}
        <Route
          path="seller/accept-terms"
          element={<ProtectedSellerRoute element={<AcceptTerms />} />}
        />
        <Route path="seller/:seller" element={<BrandCollection />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Home;