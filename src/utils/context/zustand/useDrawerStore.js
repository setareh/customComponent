import { create } from "zustand";

export const useDrawerStore = create((set) => ({
  drawer: {
    isOpenDrawer: false,
    placement: "",
    title: "",
    content: "",
  },
  openDrawer: ({ placement, title, content }) =>
    set((state) => ({
      drawer: {
        isOpenDrawer: true,
        title: title,
        content: content,
        placement: placement,
      },
    })),
  closeDrawer: () =>
    set((state) => ({
      drawer: {
        isOpenDrawer: false,
        title: "",
        content: "",
        placement: "",
      },
    })),
}));
