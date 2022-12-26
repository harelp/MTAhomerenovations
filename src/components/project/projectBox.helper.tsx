import Box from './ProjectBox';
const renderProject = (project: any) => {
  const Project: any = () => {
    return Object.keys(project).map((projKey: any, i) => {
      return (
        <Box
          name={project[projKey].docData.name}
          num={i + 1}
          key={project[projKey].docId}
          project={project[projKey]}
        />
      );
    });
  };

  return <div>{Project()}</div>;
};

export default renderProject;
