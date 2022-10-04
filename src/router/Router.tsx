import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
export function Router() {
  let pathName = window.location.pathname;
  let arr = pathName.toString().split("/");
  let currentPath = arr[arr.length - 1];
  return (
    <BrowserRouter>
      {currentPath.length > 0 && <Header />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
