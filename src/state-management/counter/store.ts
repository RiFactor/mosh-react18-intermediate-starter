import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

// not doing export default here b/c won't be named and easily found or imported
const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  max: 5,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ max: 10 })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Counter Store", useCounterStore);
}

export default useCounterStore;
