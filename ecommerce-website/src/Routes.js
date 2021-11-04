import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AuthRoute from "./components/routes/AuthRoute";
import AdminProtectedRoute from "./components/routes/AdminProtectedRoute";
import BuyerProtectedRoute from "./components/routes/BuyerProtectedRoute";
import SellerProtectedRoute from "./components/routes/SellerProtectedRoute";
import Loading from "./components/loading/Loading";

const Header = React.lazy(() => import("./components/layouts/Header"));
const Home = React.lazy(() => import("./components/layouts/Home"));

const Login = React.lazy(() =>
  import(/* webpackChunkName: "login" */ "./pages/authPages/login")
);

const Register = React.lazy(() =>
  import(/* webpackChunkName: "register" */ "./pages/authPages/register")
);

const AdminLogout = React.lazy(() =>
  import(/* webpackChunkName: "logout" */ "./pages/authPages/adminLogout")
);

const BuyerLogout = React.lazy(() =>
  import(/* webpackChunkName: "logout" */ "./pages/authPages/buyerLogout")
);

const SellerLogout = React.lazy(() =>
  import(/* webpackChunkName: "logout" */ "./pages/authPages/sellerLogout")
);

const AdminChangePassword = React.lazy(() =>
  import(
    /* webpackChunkName: "change-password" */ "./pages/authPages/adminChangePassword"
  )
);

const BuyerChangePassword = React.lazy(() =>
  import(
    /* webpackChunkName: "change-password" */ "./pages/authPages/buyerChangePassword"
  )
);

const SellerChangePassword = React.lazy(() =>
  import(
    /* webpackChunkName: "change-password" */ "./pages/authPages/sellerChangePassword"
  )
);

const ResetPassword = React.lazy(() =>
  import(
    /* webpackChunkName: "reset-password" */ "./pages/authPages/resetPassword"
  )
);

const ResetPasswordConfirm = React.lazy(() =>
  import(
    /* webpackChunkName: "reset-password-confirm" */ "./pages/authPages/resetPasswordConfirm"
  )
);

const Profile = React.lazy(() =>
  import(/* webpackChunkName: "profile" */ "./pages/profilePages/profile")
);

const PersonalInfo = React.lazy(() =>
  import(
    /* webpackChunkName: "personal-info" */ "./pages/profilePages/personalInfo"
  )
);

const PersonalInfoEdit = React.lazy(() =>
  import(
    /* webpackChunkName: "personal-info-edit" */ "./pages/profilePages/personalInfoEdit"
  )
);

const Addresses = React.lazy(() =>
  import(/* webpackChunkName: "addresses" */ "./pages/profilePages/addresses")
);

const FavoriteProducts = React.lazy(() =>
  import(
    /* webpackChunkName: "favorite-products" */ "./pages/profilePages/favoriteProducts"
  )
);

const Orders = React.lazy(() =>
  import(/* webpackChunkName: "orders-history" */ "./pages/profilePages/orders")
);

const OrdersDetail = React.lazy(() =>
  import(
    /* webpackChunkName: "orders-detail" */ "./pages/profilePages/ordersDetail"
  )
);

const Products = React.lazy(() =>
  import(/* webpackChunkName: "products" */ "./pages/productPages/products")
);

const ProductsDetail = React.lazy(() =>
  import(
    /* webpackChunkName: "products-detail" */ "./pages/productPages/productsDetail"
  )
);

const Cart = React.lazy(() =>
  import(/* webpackChunkName: "cart" */ "./pages/checkoutPages/cart")
);

const Order = React.lazy(() =>
  import(/* webpackChunkName: "order" */ "./pages/checkoutPages/order")
);

const Payment = React.lazy(() =>
  import(/* webpackChunkName: "order" */ "./pages/checkoutPages/payment")
);

const S_SideBar = React.lazy(() =>
  import('./pages/sellerPages/Seller_Sidebar')
);

const S_Product = React.lazy(() =>
  import('./pages/sellerPages/components/Seller_Products')
);

const S_Dash = React.lazy(() =>
  import('./pages/sellerPages/components/Seller_Dashboard')
);

const S_order = React.lazy(() =>
  import('./pages/sellerPages/components/Seller_Orders')
);

const A_Sidebar=React.lazy(()=>
  import('./pages/adminPages/Admin_Sidebar'))

const A_Dash=React.lazy(()=>
  import('./pages/adminPages/components/Admin_Dashboard'))

const A_allSeller=React.lazy(()=>
  import('./pages/adminPages/components/All_Seller'))

const A_allBuyer=React.lazy(()=>
  import('./pages/adminPages/components/All_Buyer'))

const A_allProducts=React.lazy(()=>
  import('./pages/adminPages/components/All_Products'))


 const A_pendingProducts=React.lazy(()=>
 import('./pages/adminPages/components/Pending_Products'))
  
const Routes = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));


  return (
    <React.Suspense fallback={<Loading />}>
      {!matches && <Header />}
      <Loading inFetching />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <AdminProtectedRoute exact path="/admin-logout" component={AdminLogout} /> */}
        <BuyerProtectedRoute exact path="/buyer-logout" component={BuyerLogout} />
        <SellerProtectedRoute exact path="/seller-logout" component={SellerLogout} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <AuthRoute exact path="/reset-password" component={ResetPassword} />
        <AuthRoute
          exact
          path="/reset-password/:token"
          component={ResetPasswordConfirm}
        />
        {/* <AdminProtectedRoute
          exact
          path="/admin-change-password"
          component={AdminChangePassword}
        /> */}
        <BuyerProtectedRoute
          exact
          path="/buyer-change-password"
          component={BuyerChangePassword}
        />
        <SellerProtectedRoute
          exact
          path="/seller-change-password"
          component={SellerChangePassword}
        />
        <BuyerProtectedRoute exact path="/profile" component={Profile} />
        <BuyerProtectedRoute
          exact
          path="/profile/personal-info"
          component={PersonalInfo}
        />
        <BuyerProtectedRoute
          exact
          path="/profile/personal-info/edit"
          component={PersonalInfoEdit}
        />
        <BuyerProtectedRoute exact path="/profile/addresses" component={Addresses} />
        <BuyerProtectedRoute
          exact
          path="/profile/favorite-products"
          component={FavoriteProducts}
        />
        <BuyerProtectedRoute exact path="/profile/orders" component={Orders} />
        <BuyerProtectedRoute
          exact
          path="/profile/orders/:id"
          component={OrdersDetail}
        />
        <BuyerProtectedRoute exact path="/products" component={Products} />
        <BuyerProtectedRoute exact path="/products/:slug" component={ProductsDetail} />
        <BuyerProtectedRoute exact path="/cart" component={Cart} />
        <BuyerProtectedRoute exact path="/order" component={Order} />
        <BuyerProtectedRoute exact path="/payment" component={Payment} />

        <SellerProtectedRoute exact path='/seller_dashboard' exact component={S_Dash} />
        <SellerProtectedRoute exact path="/seller_product" exact component={S_Product} />
        <SellerProtectedRoute exact path="/seller_Home" exact component={S_SideBar} />
        <SellerProtectedRoute exact path="/seller_Order" exact component={S_order} />

        {/* <AdminProtectedRoute exact path='/admin_dashboard' exact component={A_Dash}/>
        <AdminProtectedRoute exact path='/All_Seller' exact component={A_allSeller}/>
        <AdminProtectedRoute exact path='/All_Buyer' exact component={A_allBuyer}/>
        <AdminProtectedRoute exact path='/All_Products' exact component={A_allProducts}/>
        <AdminProtectedRoute exact path='/Pending_Products' exact component={A_pendingProducts}/> */}

      </Switch>
    </React.Suspense>
  );
};

export default Routes;