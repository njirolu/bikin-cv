import { create } from "zustand";
import { IZoomStore } from "./types";

const useZoom = create<IZoomStore>((set) => ({
  zoom: 50,
  setZoom: (zoomNumber: number) => set(() => ({ zoom: zoomNumber })),
}));

export default useZoom;
