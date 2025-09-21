import { create } from "zustand";

interface ActiveUser {
  id: string;
  fullName: string;
  email?: string;
  image?: string;
}

interface UserState {
  user: ActiveUser | null;
  setUser: (user: ActiveUser) => void;
  logout: () => void;

  activeUser: ActiveUser | null;
  setActiveUser: (user: ActiveUser) => void;
  clearActiveUser: () => void;

  activeRoomId: number | null;
  setRoomId: (roomId: number) => void;
  clearRoomId: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),

  activeUser: null,
  setActiveUser: (user) => set({ activeUser: user }),
  clearActiveUser: () => set({ activeUser: null }),

  activeRoomId: null,
  setRoomId: (roomId) => set({ activeRoomId: roomId }),
  clearRoomId: () => set({ activeRoomId: null }),
}));

export default useUserStore;
