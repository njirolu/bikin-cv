import { StoreApi, create } from "zustand";
import {
  IProfessionalExperienceItem,
  IProfessionalExperienceStore,
} from "./types";
import { produce } from "immer";
import generateUUID from "@/utils/uuid";
import CV from "@/const/cv.json";
import { transformProfessionalExperience } from "@/utils/transform";

const addProfessionalExperience =
  (set: StoreApi<IProfessionalExperienceStore>["setState"]) => () => {
    set(
      produce((state: IProfessionalExperienceStore) => {
        state.experiences.push({
          id: generateUUID(),
          companyName: "",
          date: "",
          description: "",
          jobTitle: "",
          location: "",
        });
      })
    );
  };

const updateProfessionalExperience =
  (set: StoreApi<IProfessionalExperienceStore>["setState"]) =>
  (
    index: number,
    updatedProfessionalExperience: IProfessionalExperienceItem
  ) => {
    set(
      produce((state: IProfessionalExperienceStore) => {
        state.experiences[index] = updatedProfessionalExperience;
      })
    );
  };

const removeProfessionalExperience =
  (set: StoreApi<IProfessionalExperienceStore>["setState"]) =>
  (index: number) => {
    set((state: IProfessionalExperienceStore) => ({
      experiences: state.experiences
        .slice(0, index)
        .concat(state.experiences.slice(index + 1)),
    }));
  };

const moveUpProfessionalExperience =
  (set: StoreApi<IProfessionalExperienceStore>["setState"]) =>
  (index: number) => {
    set(
      produce((state: IProfessionalExperienceStore) => {
        if (index > 0) {
          const currentExperience = state.experiences[index];
          state.experiences[index] = state.experiences[index - 1];
          state.experiences[index - 1] = currentExperience;
        }
      })
    );
  };

const moveDownProfessionalExperience =
  (set: StoreApi<IProfessionalExperienceStore>["setState"]) =>
  (index: number) => {
    set(
      produce((state: IProfessionalExperienceStore) => {
        const totalExperience = state.experiences.length;
        if (index < totalExperience - 1) {
          const currentExperience = state.experiences[index];
          state.experiences[index] = state.experiences[index + 1];
          state.experiences[index + 1] = currentExperience;
        }
      })
    );
  };

const useProfessionalExperience = create<IProfessionalExperienceStore>(
  (set) => ({
    title: "Professional Experience",
    visible: true,
    experiences: transformProfessionalExperience(CV.experiences),
    add: addProfessionalExperience(set),
    update: updateProfessionalExperience(set),
    remove: removeProfessionalExperience(set),
    moveUp: moveUpProfessionalExperience(set),
    moveDown: moveDownProfessionalExperience(set),
    setTitle: (title: string) => set(() => ({ title: title })),
    toggle: () =>
      set((state: IProfessionalExperienceStore) => ({
        visible: !state.visible,
      })),
  })
);

export default useProfessionalExperience;
