import MainLayout from "../components/MainLayout/MainLayout";
import React from "react";
import Login from "./login";

const App = () => {
  return (
    <div>
      <MainLayout titleName="Login">
        <Login />
      </MainLayout>
    </div>
  );
};

export default App;
