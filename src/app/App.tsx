type Props = {
  name?: string;
};

const App = (props: Props) => {
  return <div>"Hello World {props.name}"</div>;
};

export default App;
