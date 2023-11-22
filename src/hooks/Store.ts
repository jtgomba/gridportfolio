import { create } from 'zustand';

interface StoreState {
  started: boolean;
  setStart: () => void;
}

const useStore = create<StoreState>()((set) => ({
  started: false,
  setStart: () => set((state: StoreState) => ({ ...state, started: true })),
}));

export { useStore };
export type { StoreState };
