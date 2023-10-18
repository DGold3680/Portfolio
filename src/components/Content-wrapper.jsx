import CardRow from "./Card-row.jsx";
import ProjectCard from "./Project-card.jsx";
import ArticleCardMobile from "./Article-card-mobile.jsx";

export default function ProjectWrapper({ contents, children, contentType }) {
  const renderContent = (info) => {
    if (contentType === "project") {
      return <ProjectCard info={info} children={children}></ProjectCard>;
    }else if (contentType === "article"){
      return <ArticleCardMobile info={info} children={children}></ArticleCardMobile>;
    }
  };
  return (
    <div>
      <CardRow contents={contents} renderContent={renderContent}></CardRow>
    </div>
  );
}
