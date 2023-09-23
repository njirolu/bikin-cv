import { create } from "zustand";
import { IBasicStore } from "./types";
import CV from "@/const/cv.json";

const useBasic = create<IBasicStore>((set) => ( {
  name: CV.basic.name,
  objective: CV.basic.objective,
  email: CV.basic.email,
  website: CV.basic.website,
  location: CV.basic.location,
  phoneNumber: CV.basic.phoneNumber,
  wantedJobTitle: CV.basic.wantedJobTitle,
  setName: (name: string) => set(() => ({ name: name })),
  setObjective: (objective: string) => set(() => ({ objective: objective })),
  setEmail: (email: string) => set(() => ({ email: email })),
  setWebsite: (website: string) => set(() => ({ website: website })),
  setLocation: (location: string) => set(() => ({ location: location })),
  setPhoneNumber: (phoneNumber: string) =>
    set(() => ({ phoneNumber: phoneNumber })),
  setWantedJobTitle: (wantedJobTitle: string) =>
    set(() => ({ wantedJobTitle: wantedJobTitle })),
}));

export default useBasic;
