import React, { useState } from "react";
import { Article } from "./Article";
import { Header } from "./Header";
import image from "../assets/show-image.png";
interface ArticleProps {
  id: string;
  title: string;
  image: string;
  author: string;
  authorEmail: string;
  article: string;
}
export function Dashboard() {
  const limit = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const endpoint = `https://stormy-shelf-93141.herokuapp.com/articles?_page=${currentPage}&_limit=${limit}`;
  const [firstRow, setFirstRow] = useState<ArticleProps[]>([]);
  const [secondRow, setSecondRow] = useState<ArticleProps[]>([]);
  const [thirdRow, setThirdRow] = useState<ArticleProps[]>([]);
  React.useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => separateArticles(json));
  }, [currentPage]);

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entries) => entries.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
      }
    });
    intersectionObserver.observe(document.querySelector("#end-of-page")!);

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  function separateArticles(articles: ArticleProps[]) {
    const firstRow = [...articles.slice(0, 2)];
    const secondRow = [...articles.slice(2, 4)];
    const thirdRow = [...articles.slice(4, 6)];
    console.log(firstRow);
    setFirstRow(firstRow);
    setSecondRow(secondRow);
    setThirdRow(thirdRow);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <>
        <div className="flex grid grid-cols-12 py-5">
          <img src={image} alt="" className="col-span-2" />

          <div className="flex flex-col justify-between col-span-4">
            <div className="flex flex-col bg-white px-10 py-11  h-full">
              <div className="">{firstRow[0]?.author}</div>
              <div className="font-bold text-2xl text-yellow-400">
                {firstRow[0]?.title}
              </div>
              <div className="text-sm  truncate">{firstRow[0]?.article}</div>
            </div>
            <div> </div>
          </div>

          <img src={image} alt="" className="col-span-2" />

          <div className="flex flex-col justify-between col-span-4">
            <div className="flex flex-col bg-white px-10 py-11  h-full">
              <div className="">{firstRow[1]?.author}</div>
              <div className="font-bold text-2xl text-yellow-400">
                {firstRow[1]?.title}
              </div>
              <div className="text-sm truncate">{firstRow[1]?.article}</div>
            </div>
            <div> </div>
          </div>
        </div>
        <div className="flex grid grid-cols-12 py-5">
          <div className="col-span-4"></div>
          <img src={image} alt="" className="col-span-4" width="100%" />
          <div className="flex flex-col justify-between col-span-4">
            <div className="flex flex-col bg-white px-10 py-11  h-full">
              <div className="">{secondRow[0]?.author}</div>
              <div className="font-bold text-2xl text-yellow-400">
                {secondRow[0]?.title}
              </div>
              <div className="text-sm truncate">{secondRow[0]?.article}</div>
            </div>
            <div> </div>
          </div>
        </div>
        <div className="flex grid grid-cols-12 py-5">
          <div className="flex flex-col justify-between col-span-4">
            <div className="flex flex-col bg-white px-10 py-11  h-full">
              <div className="">{secondRow[1]?.author}</div>
              <div className="font-bold text-2xl text-yellow-400">
                {secondRow[1]?.title}
              </div>
              <div className="text-sm  truncate">{secondRow[1]?.article}</div>
            </div>
          </div>
          <img src={image} alt="" className="col-span-2" />

          <div className="flex flex-col justify-between col-span-4">
            <div className="flex flex-col bg-white px-10 py-11  h-full">
              <div className="">{thirdRow[0]?.author}</div>
              <div className="font-bold text-2xl text-yellow-400">
                {thirdRow[0]?.title}
              </div>
              <div className="text-sm truncate">{thirdRow[0]?.article}</div>
            </div>
          </div>
          <img src={image} alt="" className="col-span-2" />
        </div>
        <div className="flex grid grid-cols-12 py-5" id="end-of-page">
          <img src={image} alt="" className="col-span-4" width="100%" />
          <div className="flex flex-col justify-between col-span-4">
            <div className="flex flex-col bg-white px-10 py-11  h-full">
              <div className="">{thirdRow[1]?.author}</div>
              <div className="font-bold text-2xl text-yellow-400">
                {thirdRow[1]?.title}
              </div>
              <div className="text-sm truncate">{thirdRow[1]?.article}</div>
            </div>
            <div> </div>
          </div>
          <div className="col-span-4"></div>
        </div>
      </>
    </div>
  );
}
