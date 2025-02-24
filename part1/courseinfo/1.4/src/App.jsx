const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part
          part={part.name}
          exercises={part.exercises}
        />
      ))}
    </div>
  );
};

const Total = (props) => {
  let tot = 0;
  props.parts.forEach((part) => tot += part.exercises);

  return (    
    <p>
      Number of exercises{' '}
      {tot}
    </p>
  );
};

const App = () => {
  const course = 'Half Stack application development';

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
