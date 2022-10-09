import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../views/Dashboard";
import { Header } from "../components/Header";
import { ArticleDetails } from "../views/ArticleDetails";
import { NewArticle } from "../views/NewArticle";
export function Router() {
  let pathName = window.location.pathname;
  let arr = pathName.toString().split("/");
  let currentPath = arr[arr.length - 1];
  return (
    <BrowserRouter>
      {currentPath.length > 0 && <Header />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new-article" element={<NewArticle />} />
        <Route path="/article-details" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
