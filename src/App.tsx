function App() {
  return (
    <div className="app">
      <h1 className="app-title" data-aue-prop="title" data-aue-type="text">
        Test App
      </h1>
      <h2
        className="app-descrition-title"
        data-aue-prop="title"
        data-aue-type="text"
      >
        Description
      </h2>
      <div
        className="app-description"
        data-aue-prop="description"
        data-aue-type="richtext"
      >
        This is a test app
      </div>
    </div>
  );
}

export default App;
