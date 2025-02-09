import Button from "./components/Button/Button";
import Textfield from "./components/Textfield/Textfield";

function App() {
  const events = {
    onClick: () => console.log("Button clicked!"),
    onDoubleClick: () => console.log("Button double-clicked!"),
    onMouseEnter: () => console.log("Mouse entered button!"),
    onMouseLeave: () => console.log("Mouse left button!"),
    onMouseOver: () => console.log("Mouse over button!"),
    onMouseOut: () => console.log("Mouse out of button!"),
    onMouseDown: () => console.log("Mouse button down on button!"),
    onMouseUp: () => console.log("Mouse button up on button!"),
    onFocus: () => console.log("Button focused!"),
    onBlur: () => console.log("Button lost focus!"),
    onKeyDown: () => console.log("Key down on button!"),
    onKeyUp: () => console.log("Key up on button!"),
    onKeyPress: () => console.log("Key pressed on button!"),
    onContextMenu: () => console.log("Context menu requested on button!"),
  };

  return (
    <div className="block mx-auto w-6xl p-6">
      <h1 className="text-3xl font-bold">Custom Component</h1>
      <div className="my-4">
        <Button events={events} className={"bg-indigo-900 font-medium"}>
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
