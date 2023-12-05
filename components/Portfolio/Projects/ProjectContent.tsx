import React from "react";

interface ProjectContentProps {
  title: string;
  description: string;
  techStack: [];
  link: string;
  sourceCode: string;
}

const ProjectContent: React.FC<ProjectContentProps> = ({
  title,
  description,
  link,
  sourceCode,
  techStack,
}) => {
    return (
      <section className=" bg-lime-500/25 backdrop-blur-md w-full">
        <h1 className="text-2xl font-bold">{title}</h1>
        <a href={sourceCode} />
            <a href={link} />
            <ul className="flex max-w-[50%]">
                {techStack.map((tech) => (
                    <li key={tech}>
                    {tech}
                     </li>
                 )) }           
            </ul>
            <p>{description}</p>
            <button>More Details</button>
      </section>
    );
};
export default ProjectContent;
