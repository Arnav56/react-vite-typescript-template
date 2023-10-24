import { useParams } from "react-router-dom";

function LoginComponent() {
  const { userid } = useParams();
  return <div>{userid}</div>;
}

export default LoginComponent;
