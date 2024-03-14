function App() {
  return (
    <div
      data-aue-resource="urn:test:/content/test-app/container"
      data-aue-type="container"
    >
      <h1
        data-aue-resource="urn:test:/content/test-app/text"
        data-aue-prop="title"
        data-aue-type="text"
        data-aue-behavior="component"
      >
        Test App
      </h1>
      <h2
        data-aue-resource="urn:test:/content/test-app/text"
        data-aue-prop="title"
        data-aue-type="text"
        data-aue-behavior="component"
      >
        Description
      </h2>
      <div
        data-aue-resource="urn:test:/content/test-app/text"
        data-aue-prop="description"
        data-aue-type="richtext"
        data-aue-behavior="component"
      >
        This is a test app
      </div>
      <ul
        data-aue-resource="urn:test:/content/test-app/list"
        data-aue-type="container"
      >
        <li
          data-aue-resource="urn:test:/content/test-app/listitem"
          data-aue-prop="text"
          data-aue-type="text"
          data-aue-behavior="component"
        >
          List Item 1
        </li>

        <li
          data-aue-resource="urn:test:/content/test-app/listitem"
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
