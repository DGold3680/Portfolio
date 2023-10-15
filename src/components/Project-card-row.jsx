import React from "react";
import ProjectCard from "./Project-card.jsx";


export default function ProjectCardRow(props) {
  const {children,projects}=props
  return (
    <div className="grid sm:grid-cols-2">
      {projects?.map((project) => {
        let { title, url, details, coverImg, tags } = project.data;
        return (
          <ProjectCard
            title={title}
            url={url}
            details={details}
            coverImg={coverImg}
            tags={tags}
          >
            {children}
          </ProjectCard>
        );
      })}
      <button
        onClick={() => {
          alert("hi");
        }}
        className="bg-bgSec text-white/50 text-sm px-4 py-1.5 w-fit mx-auto rounded-3xl"
      >
        See More
      </button>
    </div>
  );
}
