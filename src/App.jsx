import Button from "./components/Button/Button";
import Textfield from "./components/Textfield/Textfield";
import Modal from "./components/Modal/Modal";
import { useStore } from "./utils/context/zustand/store";
import Drawer from "./components/Drawer/Drawer";
import { useDrawerStore } from "./utils/context/zustand/useDrawerStore";

function App() {
  const { isOpen, openModal, closeModal } = useStore((state) => state);
  const { isOpenDrawer } = useDrawerStore((state) => state.drawer);

  const { openDrawer, closeDrawer } = useDrawerStore((state) => state);

  // const drawerStorRight = useDrawerStore((state) => state);
  // const drawerStorLeft = useDrawerStore((state) => state);

  return (
    <>
      <Drawer />
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
        <div className="my-4">
          <Button onClick={openModal}>Open Modal</Button>
          <Modal
            title={"Something"}
            isOpen={isOpen}
            onClose={closeModal}
            content={
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  recusandae dolore accusantium dolorum delectus explicabo saepe
                  ipsam rerum velit, nemo aliquam natus aspernatur quos
                  perferendis numquam repellendus quas itaque dolor!
                </p>
                <Button className={"my-4"} onClick={closeModal}>
                  Ok
                </Button>
              </>
            }
          />
        </div>
        <div className="my-4 flex flex-row">
          <div className="mr-2">
            <Button
              onClick={() =>
                openDrawer({
                  placement: "left",
                  title: "ssss",
                  content: "content lorem",
                })
              }
            >
              Drawer left
            </Button>
          </div>
          <div className="mr-2">
            <Button
              onClick={() =>
                openDrawer({
                  placement: "right",
                  title: "ssss",
                  content: "content lorem",
                })
              }
            >
              Drawer Right
            </Button>
          </div>
          <div className="mr-2">
            <Button
              onClick={() =>
                openDrawer({
                  placement: "top",
                  title: "ssss",
                  content: "content lorem",
                })
              }
            >
              Drawer top
            </Button>
          </div>
          <div className="mr-2">
            <Button
              onClick={() =>
                openDrawer({
                  placement: "bottom",
                  title: "bottom test",
                  content: "content lorem",
                })
              }
            >
              Drawer bottom
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
