import { create } from 'zustand'

const usePanelStore = create((set) => ({
    panels: {},
    addPanel: (data) => {
        return set((state) => ({ panels: { ...state.panels, ...data }}))
    }
}));

export default usePanelStore;