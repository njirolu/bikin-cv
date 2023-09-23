import { StoreApi, create } from "zustand";
import { IEducationItem, IEducationStore } from "./types";
import { produce } from "immer";
import generateUUID from "@/utils/uuid";
import CV from "@/const/cv.json";

const addEducation = (set: StoreApi<IEducationStore>["setState"]) => () => {
  set(
    produce((state: IEducationStore) => {
      state.educations.push({
        id: generateUUID(),
        schoolName: "",
        date: "",
        degreeAndMajor: "",
        gpa: "",
        description: "",
      });
    })
  );
};

const updateEducation =
  (set: StoreApi<IEducationStore>["setState"]) =>
  (index: number, updatedEducation: IEducationItem) => {
    set(
      produce((state: IEducationStore) => {
        state.educations[index] = updatedEducation;
      })
    );
  };

const removeEducation =
  (set: StoreApi<IEducationStore>["setState"]) => (index: number) => {
    set((state: IEducationStore) => ({
      educations: state.educations
        .slice(0, index)
        .concat(state.educations.slice(index + 1)),
    }));
  };

const moveUpEducation =
  (set: StoreApi<IEducationStore>["setState"]) => (index: number) => {
    set(
      produce((state: IEducationStore) => {
        if (index > 0) {
          const currentEducation = state.educations[index];
          state.educations[index] = state.educations[index - 1];
          state.educations[index - 1] = currentEducation;
        }
      })
    );
  };

const moveDownEducation =
  (set: StoreApi<IEducationStore>["setState"]) => (index: number) => {
    set(
      produce((state: IEducationStore) => {
        const totalEducation = state.educations.length;
        if (index < totalEducation - 1) {
          const currentEducation = state.educations[index];
          state.educations[index] = state.educations[index + 1];
          state.educations[index + 1] = currentEducation;
        }
      })
    );
  };

const useEducation = create<IEducationStore>((set) => ({
  title: "Education",
  visible: true,
  educations: CV.educations,
  setTitle: (title: string) => set(() => ({ title: title })),
  toggle: () =>
    set((state: IEducationStore) => ({
      visible: !state.visible,
    })),
  add: addEducation(set),
  moveUp: moveUpEducation(set),
  moveDown: moveDownEducation(set),
  remove: removeEducation(set),
  update: updateEducation(set),
}));

export default useEducation;
