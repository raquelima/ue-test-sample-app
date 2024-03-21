function App() {
  return (
    <div
      data-aue-resource="urn:test:/content/test-app/container"
      data-aue-type="container"
    >
      <h1
        data-aue-resource="urn:test:/content/test-app/title"
        data-aue-prop="title"
        data-aue-type="text"
        data-aue-behavior="component"
      >
        Welcome to the UE Test App
      </h1>
      <h3
        data-aue-resource="urn:test:/content/test-app/description"
        data-aue-prop="title"
        data-aue-type="text"
        data-aue-behavior="component"
      >
        Find below multiple use cases:
      </h3>
      <ul
        data-aue-resource="urn:test:/content/test-app/list"
        data-aue-type="container"
      >
        <li
          data-aue-resource="urn:test:/content/test-app/first-listitem"
          data-aue-prop="text"
          data-aue-type="text"
          data-aue-behavior="component"
        >
          List Item 1
        </li>

        <li
          data-aue-resource="urn:test:/content/test-app/second-listitem"
          data-aue-prop="text"
          data-aue-type="text"
          data-aue-behavior="component"
        >
          List Item 2
        </li>
      </ul>
    </div>
  );
}

export default App;
