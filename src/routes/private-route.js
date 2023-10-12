import React from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, isAuthenticated, ...rest }) => {
    // const navigate = useNavigate();
    // console.log({llllllllllllllllllllllll: isAuthenticated});
    // console.log({mmmmmmmmmmmmmmmmmmmmmmmmm: isAuthenticated});

  return (
    <Routes>
        <Route
        {...rest}
        element={isAuthenticated ? <Component {...props} /> : <Navigate to='/signin' />}
        // render={(props) =>
        //     isAuthenticated ? (
        //         console.log('33333333333333333333333'),
        //         <Component {...props} />
        //         ) : (
        //             console.log('2222222222222222222222'),
        //             <NoComponent />
        //         // navigate('/signin')
        //         // <Navigate to='/signin' />
        //     )
        // }
        />
    </Routes>
  );
};

export default PrivateRoute;