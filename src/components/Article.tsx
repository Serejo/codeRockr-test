import image from "../assets/show-image.png";

interface ArticleProps {
  title: string;
  image: string;
  author: string;
  article: string;
}

export function Article(props: ArticleProps) {
  return (
    <>
      <div className="flex flex-col bg-white px-10 py-11  h-full">
        <div className="">{props?.author}</div>
        <div className="font-bold text-2xl text-yellow-400 truncate">
          {props?.title}
        </div>
        <div className="text-sm truncate">{props?.article}</div>
      </div>
    </>
  );
}
