import Tags from "./Tags";

export default function BlogCardMobile({ info = {} }) {
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
      className="mb-10 gap-5 flex flex-col rounded-2xl px-2 py-4"
    >
      <div className="">
        <a
          target="_blank"
          href={url}
          className="mb-1 inline-block mr-5 text-white text-base font-sm"
        >
          {title}
        </a>
        <p className="text-sm font-light">{excerpt.slice(0,120)}...</p>
      </div>
      <div className="">
        <div className="w-full">
          <img
            className="rounded-lg w-full"
            src={`${coverImg}`}
            alt={`${coverImg}`}
          />
        </div>
      </div>

      <div className="">
        <Tags tags={tags} />
      </div>
    </div>
  );
}
