import React from "react";
import { useState } from "react";
import ProjectCard from "./Project-card.jsx";

export default function ProjectCardRow(props) {
  const [count, setcount] = useState(2);

  const seeMore = () => {
    setcount((prevCount) => {
      return prevCount + 2; // Return the updated state value
    });
  };
  const seeAll = () => {
    setcount(projects.length);
  };
  const { children, projects } = props;
  return (
    <div>
      <div className="grid sm:grid-cols-2">
        {projects?.map((project, i) => {
          {
            console.log(count);
          }
          if (count > i) {
            let { title, url, details, coverImg, tags } = project.data;
            return (
              <ProjectCard
                key={url}
                title={title}
                url={url}
                details={details}
                coverImg={coverImg}
                tags={tags}
              >
                {children}
              </ProjectCard>
            );
          }
        })}
      </div>
      {4 > count && (
        <button
          onClick={() => {
            seeMore();
          }}
          className="block bg-bgSec text-white/50 text-sm px-4 py-1.5 w-fit mx-auto rounded-3xl"
        >
          See More
        </button>
      )}
      {count >= 4 && projects.length>count && (
        <button
          onClick={() => {
            seeAll();
          }}
          className="block bg-bgSec text-white/50 text-sm px-4 py-1.5 w-fit mx-auto rounded-3xl"
        >
          See All
        </button>
      )}
      {count > projects.length && (
       null
      )}
    </div>
  );
}
