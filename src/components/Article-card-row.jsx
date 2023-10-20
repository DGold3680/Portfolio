import { useState } from "react";

export default function ArticleCardRow(props) {
  const { contents, renderContent } = props;
  const [count, setcount] = useState(2);

  const seeMore = () => {
    setcount((prevCount) => {
      return prevCount + 2;
    });
  };

  return (
    <div>
      <div>
        {contents?.map((content, i) => {
          if (count > i) {
            const info = content.data;
            if (info) {
              return renderContent(info);
            }
          }
        })}
      </div>
      {4 > count && (
        <button
          onClick={() => {
            seeMore();
          }}
          className="block bg-bgSec text-white/50 text-sm px-4 py-1.5 w-fit mx-auto rounded-3xl hover:text-white active:text-white"
        >
          See More
        </button>
      )}
      {count >= 4 && contents.length > count && (
        <a
          href="/blog"
          className="block bg-bgSec text-white/50 text-sm px-4 py-1.5 w-fit mx-auto rounded-3xl hover:text-white active:text-white"
        >
          See All
        </a>
      )}
    </div>
  );
}
