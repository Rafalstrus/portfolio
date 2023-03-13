import ProjectContainerInterface from "./ProjectContainerInterface";

export default interface ProjectCardInterface {
    project: ProjectContainerInterface["projects"][number]
}