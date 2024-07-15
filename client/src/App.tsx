import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/auth-callback"
        element={<AuthCallbackPage />}
      />
      <Route
        path="/user-profile"
        element={<h1>USER PROFILE PAGE!</h1>}
      />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
