import ProjectCardRow from "./Project-card-row.jsx";
import ProjectCard from "./Project-card.jsx";

export default function ProjectWrapper({ projects, children}) {
  const renderContent = (info) => {
    return (
      <ProjectCard
        key={info.title}
        info={info}
        children={children}
      ></ProjectCard>
    );
  };
  return (
    <div>
      <ProjectCardRow contents={projects} renderContent={renderContent}></ProjectCardRow>
    </div>
  );
}
