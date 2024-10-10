import ArticleCardRow from "./Article-card-row.jsx";
import ArticleCard from "./Article-card.jsx";
import ArticleCardMobile from "./Article-card-mobile.jsx";

export default function ArticleWrapper({ articles, children }) {
  const renderContent = (info) => {
    return (
      <a key={info.title} href={info.url} rel="noopener noreferrer" target="_blank">
        <ArticleCard info={info}></ArticleCard>
      </a>
    );
  };
  const renderMobileContent = (info) => {
    return <ArticleCardMobile key={info.title} info={info}></ArticleCardMobile>;
  };
  return (
    <div>
      <div className="hidden sm:block">
        <ArticleCardRow
          contents={articles}
          renderContent={renderContent}
        ></ArticleCardRow>
      </div>
      <div className="sm:hidden">
        <ArticleCardRow
          contents={articles}
          renderContent={renderMobileContent}
        ></ArticleCardRow>
      </div>
    </div>
  );
}
