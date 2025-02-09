import ReactDOM from "react-dom";
import { useDrawerStore } from "../../utils/context/zustand/useDrawerStore";

export default function Drawer() {
  const { isOpenDrawer, placement, title, content } = useDrawerStore(
    (state) => state.drawer
  );
  const { closeDrawer } = useDrawerStore((state) => state);

  if (!isOpenDrawer) return null;

  let justifyContent = "justify-center";
  let alignItems = "items-center";

  if (placement === "top" || placement === "bottom") {
    alignItems = "";
  }

  if (placement === "left" || placement === "right") {
    justifyContent = "";
  }

  return ReactDOM.createPortal(
    <div className={`fixed inset-0 flex ${justifyContent} ${alignItems} z-50`}>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeDrawer}
      ></div>
      <div
        className={`fixed ${placement}-0 ${
          placement == "top" || placement == "bottom"
            ? "w-full h-64  "
            : "w-64 h-full top-0"
        } bg-white shadow-lg z-10`}
      >
        <div
          className={`p-4 border-b border-gray-200 flex  justify-between items-center`}
        >
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={closeDrawer}
          >
            &times;
          </button>
        </div>
        <div className="p-4">{content}</div>
      </div>
    </div>,
    document.body
  );
}
