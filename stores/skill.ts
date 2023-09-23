import { StoreApi, create } from "zustand";
import { ISkillStore } from "./types";
import { produce } from "immer";
import CV from "@/const/cv.json";

const updateSkill =
  (set: StoreApi<ISkillStore>["setState"]) => (updateSkill: string) => {
    set(
      produce((state: ISkillStore) => {
        state.skills = updateSkill;
      })
    );
  };

const useSkill = create<ISkillStore>((set) => ({
  title: "Skill",
  visible: true,
  skills: CV.skills,
  setTitle: (title: string) => set(() => ({ title: title })),
  toggle: () =>
    set((state: ISkillStore) => ({
      visible: !state.visible,
    })),
  update: updateSkill(set),
}));

export default useSkill;
