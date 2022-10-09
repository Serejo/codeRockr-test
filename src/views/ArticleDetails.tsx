import { Header } from "../components/Header";

export function ArticleDetails() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <>
        <div className="flex flex-col bg-white px-10 py-11  h-full">
          <div className="">Author</div>
          <div className="font-bold text-2xl text-yellow-400 truncate">
            Title
          </div>
          <div className="text-sm truncate">Article</div>
        </div>
      </>
    </div>
  );
}
