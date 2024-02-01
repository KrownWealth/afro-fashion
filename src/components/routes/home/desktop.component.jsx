/* This is a Large-viewport Component. Designed to render on larger devices or screen sizes */

import CreditsPage from '../credits/credits.jsx';
import { Route, Routes } from 'react-router-dom';
import Seller from '../seller/sell.component.jsx';
import ShopStore from '../shop/shop.component.jsx';
import NavBar from '../navbar/navbar.component.jsx';
import BrandCollection from '../brands/brands.route.jsx';
import ProtectedSellerRoute from '../seller/protected-route.jsx'; 
import Collection from '../../collection/collection.component.jsx';
import SignIn from '../authentication/user-auth/sign-in.component.jsx';
import SignUp from '../authentication/user-auth/sign-up.component.jsx';
import Checkout from '../../cartServices/checkout/checkout.component.jsx';
import { AcceptTerms } from '../authentication/seller-auth/accept-terms.jsx';
import { Help } from '../help/help.component.jsx';

const Home = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Collection />} />
        <Route path="auth" element={<SignIn />} />
        <Route path="auth/register" element={<SignUp />} />
        <Route path="shop/*" element={<ShopStore />} />
        <Route path="credits" element={<CreditsPage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route
          path="seller"
          element={<ProtectedSellerRoute element={<Seller />} />}
        />
        <Route
          path="seller/accept-terms"
          element={<ProtectedSellerRoute element={<AcceptTerms />} />}
        />
        <Route path="seller/:seller" element={<BrandCollection />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes>
  );
};

export default Home;