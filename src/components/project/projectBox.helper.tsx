import Box from './ProjectBox';

const boxContent = [
  {
    name: 'A house at Kaufman Dr'
  }
];

const renderProject = boxContent.map((project, i) => {
  return <Box name={project.name} num={i + 1} key={i + 1} />;
});

export default renderProject;
