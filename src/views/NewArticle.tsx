import { Header } from "../components/Header";

export function NewArticle() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <>
        <h1>New Article</h1>
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
