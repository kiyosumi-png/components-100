"use client";

import { ComponentType } from "react";

const withAuth = <P extends {}>(Component: ComponentType<P>) => {
  return (props: P) => {
    //何らかの認証の処理を挟む
    const isAuthorized = true;

    return isAuthorized && <Component {...props} />;
  };
};

const SamplePage = () => <h2>User Page</h2>;

export default function App() {
  const AuthorizedPage = withAuth(SamplePage);

  return <AuthorizedPage />;
}
