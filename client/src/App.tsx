import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <h1>HOME PAGE!</h1>
          </Layout>
        }
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
