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
      <div className="flex grid grid-cols-12 py-5">
        <img src={image} alt="" className="col-span-2" />

        <div className="flex flex-col justify-between col-span-4">
          <div className="flex flex-col bg-white px-10 py-11  h-full">
            <div className="">{props.author}</div>
            <div className="font-bold text-2xl text-yellow-400">
              {props.title}
            </div>
            <div className="text-sm  truncate">{props.article}</div>
          </div>
          <div> </div>
        </div>

        <img src={image} alt="" className="col-span-2" />

        <div className="flex flex-col justify-between col-span-4">
          <div className="flex flex-col bg-white px-10 py-11  h-full">
            <div className="">{props.author}</div>
            <div className="font-bold text-2xl text-yellow-400">
              {props.title}
            </div>
            <div className="text-sm truncate">{props.article}</div>
          </div>
          <div> </div>
        </div>
      </div>
      <div className="flex grid grid-cols-12 py-5">
        <div className="col-span-4"></div>
        <img src={image} alt="" className="col-span-4" width="100%" />
        <div className="flex flex-col justify-between col-span-4">
          <div className="flex flex-col bg-white px-10 py-11  h-full">
            <div className="">{props.author}</div>
            <div className="font-bold text-2xl text-yellow-400">
              {props.title}
            </div>
            <div className="text-sm truncate">{props.article}</div>
          </div>
          <div> </div>
        </div>
      </div>
      <div className="flex grid grid-cols-12 py-5">
        <div className="flex flex-col justify-between col-span-4">
          <div className="flex flex-col bg-white px-10 py-11  h-full">
            <div className="">{props.author}</div>
            <div className="font-bold text-2xl text-yellow-400">
              {props.title}
            </div>
            <div className="text-sm  truncate">{props.article}</div>
          </div>
        </div>
        <img src={image} alt="" className="col-span-2" />

        <div className="flex flex-col justify-between col-span-4">
          <div className="flex flex-col bg-white px-10 py-11  h-full">
            <div className="">{props.author}</div>
            <div className="font-bold text-2xl text-yellow-400">
              {props.title}
            </div>
            <div className="text-sm truncate">{props.article}</div>
          </div>
        </div>
        <img src={image} alt="" className="col-span-2" />
      </div>
      <div className="flex grid grid-cols-12 py-5">
        <img src={image} alt="" className="col-span-4" width="100%" />
        <div className="flex flex-col justify-between col-span-4">
          <div className="flex flex-col bg-white px-10 py-11  h-full">
            <div className="">{props.author}</div>
            <div className="font-bold text-2xl text-yellow-400">
              {props.title}
            </div>
            <div className="text-sm truncate">{props.article}</div>
          </div>
          <div> </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </>
  );
}
