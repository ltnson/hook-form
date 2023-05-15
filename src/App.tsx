import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import TokenService from "./components/token-service/token";
import { VoidFunction } from "./components/types/types";

import { Grid } from "@mui/material";
import Left from "./components/loginPage/Left";
import SignUp from "./components/loginPage/SignUp";
import SignIn from "./components/loginPage/SignIn";
import DashBroad from "./components/dashBroad/DashBroad";

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const checkLogin: VoidFunction = () => {
    const user = TokenService.getUser();
    if (user) {
      setIsloggedIn(true);
    } else {
      setIsloggedIn(false);
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Navigate to="/dash-broad" />} />
          <Route
            path="/dash-broad"
            element={<DashBroad onCheckLogin={checkLogin} />}
          />
        </Routes>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Left />
          </Grid>
          <Grid item xs={4}>
            <Routes>
              <Route path="/*" element={<Navigate to="/sign-in" />} />
              <Route
                path="/sign-up"
                element={<SignUp onCheckLogin={checkLogin} />}
              />
              <Route
                path="/sign-in"
                element={<SignIn onCheckLogin={checkLogin} />}
              />
            </Routes>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default App;
