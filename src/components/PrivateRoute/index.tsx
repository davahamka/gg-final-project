import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import Layout from "../Layout";

type Props = {
  component: () => JSX.Element;
  exact: boolean;
  path: string;
};

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const accessToken = useAppSelector((state) => state.auth.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? (
          <Layout>
            <Component {...(props as any)} />
          </Layout>
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
