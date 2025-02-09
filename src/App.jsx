import Button from "./components/Button/Button";
import Textfield from "./components/Textfield/Textfield";

function App() {
  return (
    <div className="block mx-auto w-6xl p-6">
      <h1 className="text-3xl font-bold">Custom Component</h1>
      <div className="my-4">
        <Button
          onClick={() => console.log("Clicked")}
          className={"bg-indigo-900 font-medium"}
        >
          custom text
        </Button>
      </div>
      <div className="my-4">
        <Textfield
          label={"Something"}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
