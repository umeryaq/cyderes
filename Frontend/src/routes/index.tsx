import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./helper";

const RouteComponent: FC = () => (
  <Router>
    <Routes>
      {routes.map(({ key, path, Component }) => (
        <Route key={key} path={path} element={<Component />} />
      ))}
    </Routes>
  </Router>
);

export default RouteComponent;
