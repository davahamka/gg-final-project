import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAppSelector } from "../../hooks";

type Props = {
  component: any;
};

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const accessToken = useAppSelector((state) => state.auth.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
