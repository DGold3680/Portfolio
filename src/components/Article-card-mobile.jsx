import Tags from "./Tags";

export default function ArticleCardMobile({ info = {} }) {
  const {
    title,
    author,
    authorImg,
    coverImg,
    date,
    tags,
    url,
    excerpt,
    readTime,
  } = info;

  return (
    <div className="sm:hidden mb-6">
      <p className="mb-4 text-main/50 text-xs">Posted: September 17,2022 | {readTime} mins read</p>
      <a
        href={url}
        className="mb-4 inline-block underline mr-5 text-white text-base font-sm"
      >
        {title}
      </a>
      <p className="mb-4 text-sm font-light">{excerpt}</p>
      <div className="mb-4">
        <Tags tags={tags} />
      </div>
    </div>
  );
}