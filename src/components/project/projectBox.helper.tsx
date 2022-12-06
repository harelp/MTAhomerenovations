import Box from './ProjectBox';

const boxContent = [
  {
    name: 'Some of our 2022 Work'
  }
];

const renderProject = boxContent.map((project, i) => {
  return <Box name={project.name} num={i + 1} key={i + 1} />;
});

export default renderProject;
