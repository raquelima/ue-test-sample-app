import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Welcome to the UE Test App</h1>
      <h3>Find below multiple use cases:</h3>
      <ul>
        <li>
          <Link to={"/ue-test-sample-app/unordered-list"}>Unordered List</Link>
        </li>

        <li>
          <Link to={"/ue-test-sample-app/ordered-list"}>Ordered list</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
