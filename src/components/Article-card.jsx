import Tags from "./Tags";

export default function ArticleCard({ info = {} }) {
  const { title, date, tags, url, excerpt, readTime, tagColor ,coverImg} = info;

  return (
    <div
      style={{ boxShadow: "0 0 8px rgba(70, 69, 69, 0.6)" }}
      className="mb-10 px-6 flex items-center rounded-2xl"
    >
      <div className="basis-full py-6 ">
        <div className="flex items-center mb-4">
          <span
            style={{ backgroundColor: `${tagColor}` }}
            className={`inline-block rounded-full w-5 h-5 mr-5`}
          ></span>
          <span className=" text-main/50 text-xs">
            Posted: {`${date.toDateString()}`} | {readTime} mins read
          </span>
        </div>

        <a target="_blank"
          href={url}
          className="mb-4 inline-block underline mr-5 text-white text-base font-sm"
        >
          {title}
        </a>
        <p className="mb-4 text-sm font-light">{excerpt}</p>
        <div className="mb-4 -mr-1.5">
          <Tags tags={tags} />
        </div>
      </div>
      <div className="w-full flex justify-end lg:mr-20 ">
        <div className="w-5/6 lg:w-2/3 my-auto py-5">
          <img className=" rounded-lg" src={`${coverImg}`} alt={`${coverImg}`} />
        </div>
      </div>
    </div>
  );
}
