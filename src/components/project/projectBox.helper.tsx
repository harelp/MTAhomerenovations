import Box from './ProjectBox';

const boxContent = [
  {
    name: 'My First Porject '
  },
  {
    name: 'My First Porject'
  },
  {
    name: 'My First Porject'
  },
  {
    name: 'My First Porject'
  },
  {
    name: 'My First Porject'
  }
];

const renderProject = boxContent.map((project, i) => {
  console.log(project);
  return <Box name={project.name} num={i + 1} key={i + 1} />;
});

export default renderProject;
