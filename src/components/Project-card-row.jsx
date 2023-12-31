import { useState } from "react";

export default function ProjectCardRow(props) {
  const {contents,renderContent } = props;
  const [count, setcount] = useState(2);

  const seeMore = () => {
    setcount((prevCount) => {
      return prevCount + 2; 
    });
  };
  const seeAll = () => {
    setcount(contents.length);
  };
  const seeLess = () => {
    setcount(2);
  };
  

  return (
    <div>
      <div className="grid sm:grid-cols-2">{contents?.map((content, i) => {
    if (count > i) {
      const info = content.data;
      if (info) {
      return renderContent(info)
      }
    }
  })}</div>
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
        <button
          onClick={() => {
            seeAll();
          }}
          className="block bg-bgSec text-white/50 text-sm px-4 py-1.5 w-fit mx-auto rounded-3xl hover:text-white active:text-white"
        >
          See All
        </button>
      )}
      {count >= contents.length && (
        <button
          onClick={() => {
            seeLess();
          }}
          className="block bg-bgSec text-white/50 text-sm px-4 py-1.5 w-fit mx-auto rounded-3xl hover:text-white active:text-white"
        >
          See Less
        </button>
      )}
    </div>
  );
}
