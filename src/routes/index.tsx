import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesMain;
