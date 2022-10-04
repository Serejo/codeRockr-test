import { Header } from "./components/Header";
import { Router } from "./router/Router";

function App() {
  let pathName = window.location.pathname;
  let arr = pathName.toString().split("/");
  let currentPath = arr[arr.length - 1];
  return (
    <>
      <div className="">
        {/* {currentPath.length > 0 && <Header />} */}
        <div className=" ">
          <Router />
        </div>
      </div>
    </>
  );
}

export default App;
