import Topic from "../components/topic/Topic";
import { Project } from "../components/topic/Projects";

const projects: Array<Project> = [
  {
    name: "Pando",
    team: "N/A",
    description: "Ensuring Access to Notarized Metadata",
    status: "Not Started",
  },
];

const topic: string = "Reputation Systems";
const description: string = "🚧 Under Construction 🚧";
const links: Array<string> = [
  ...projects.map((project: Project) => project.link).filter((link) => !!link),
];

export default function DataTransfer() {
  return (
    <Topic
      topic={topic}
      description={description}
      projects={projects}
      links={links}
    />
  );
}
