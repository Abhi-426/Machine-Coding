import Tabs from "./components/Tabs";

function App() {
  return (
    <div>
      <Tabs
        tabs={[
          { title: "Tab1", content: "Hellow World" },
          { title: "Tab2", content: "Hellow World 2" },
        ]}
      />
    </div>
  );
}

export default App;
