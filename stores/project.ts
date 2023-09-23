import { StoreApi, create } from "zustand";
import { produce } from "immer";
import generateUUID from "@/utils/uuid";
import CV from "@/const/cv.json";
import { IProjectItem, IProjectStore } from "./types";

const addProject = (set: StoreApi<IProjectStore>["setState"]) => () => {
  set(
    produce((state: IProjectStore) => {
      state.projects.push({
        id: generateUUID(),
        projectName: "",
        date: "",
        description: "",
      });
    })
  );
};

const updateProject =
  (set: StoreApi<IProjectStore>["setState"]) =>
  (index: number, updatedProject: IProjectItem) => {
    set(
      produce((state: IProjectStore) => {
        state.projects[index] = updatedProject;
      })
    );
  };

const removeProject =
  (set: StoreApi<IProjectStore>["setState"]) => (index: number) => {
    set((state: IProjectStore) => ({
      projects: state.projects
        .slice(0, index)
        .concat(state.projects.slice(index + 1)),
    }));
  };

const moveUpProject =
  (set: StoreApi<IProjectStore>["setState"]) => (index: number) => {
    set(
      produce((state: IProjectStore) => {
        if (index > 0) {
          const currentProject = state.projects[index];
          state.projects[index] = state.projects[index - 1];
          state.projects[index - 1] = currentProject;
        }
      })
    );
  };

const moveDownProject =
  (set: StoreApi<IProjectStore>["setState"]) => (index: number) => {
    set(
      produce((state: IProjectStore) => {
        const totalProject = state.projects.length;
        if (index < totalProject - 1) {
          const currentProject = state.projects[index];
          state.projects[index] = state.projects[index + 1];
          state.projects[index + 1] = currentProject;
        }
      })
    );
  };

const useProject = create<IProjectStore>((set) => ({
  title: "Projects",
  visible: true,
  projects: CV.projects,
  setTitle: (title: string) => set(() => ({ title: title })),
  toggle: () =>
    set((state: IProjectStore) => ({
      visible: !state.visible,
    })),
  add: addProject(set),
  moveUp: moveUpProject(set),
  moveDown: moveDownProject(set),
  remove: removeProject(set),
  update: updateProject(set),
}));

export default useProject;
