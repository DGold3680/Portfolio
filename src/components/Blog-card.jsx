import Tags from "./Tags";

export default function BlogCard({ info = {} }) {
  const {
    title,
    date,
    tags,
    url,
    excerpt,
    readTime,
    tagColor,
    coverImg,
    authorImg,
    author,
  } = info;

  return (
    <div
      style={{ boxShadow: "0 0 8px rgba(70, 69, 69, 0.6)" }}
      className="mb-10 px-6 gap-10 flex items-center rounded-2xl py-6"
    >
      <div className="w-1/2">
        <div className="w-full">
          <img
            className="rounded-lg w-full"
            src={`${coverImg}`}
            alt={`${coverImg}`}
          />
        </div>
      </div>
      <div className="w-1/2">
        <a
          target="_blank"
          href={url}
          className="mb-4 inline-block mr-5 text-white text-base font-sm"
        >
          {title}
        </a>
        <p className="mb-4 text-sm font-light">{excerpt}</p>
        <div className="mb-4 -mr-1.5">
          <Tags tags={tags} />
        </div>
        <div className="flex gap-3 items-center">
          {/* <span
            style={{ backgroundColor: `${tagColor}` }}
            className={`inline-block rounded-full w-5 h-5 mr-5`}
          ></span> */}
          <div className="mt-4">
            <img
              className="rounded-full w-12 h-12 md:w-16 md:h-16"
              src={`${authorImg}`}
              alt={`${authorImg}`}
            />
          </div>
          <div>
            <p>{author}</p>
            <span className=" text-main/50 text-xs">
              Posted: {`${date.toDateString()}`} | {readTime} mins read
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
