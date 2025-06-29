import { create } from "zustand";

// TODO: Implement CRUD operations
const useBoothStore = create(set => ({
	booths: [
		// Dummy data for now
		{
			id: 1,
			name: "adasd",
			source_count: 3,
			timestamp: new Date("2021-09-01"),
		},
		{
			id: 2,
			name: "math 202",
			source_count: 5,
			timestamp: new Date("2025-03-01"),
		},
		{
			id: 3,
			name: "comp 346",
			source_count: 1,
			timestamp: new Date("2025-03-10"),
		},
	],
	setBooths: booths => set({ booths }),

	createBooth: async booth => {
		set(state => ({
			booths: [
				...state.booths,
				{
					// TODO: make the id supplied from the backend
					id: Math.max(...state.booths.map(b => b.id)) + 1,
					timestamp: new Date(),
					source_count: 0,
					...booth,
				},
			],
		}));
	},
	renameBooth: async (id, name) => {
		set(state => ({
			booths: state.booths.map(booth =>
				booth.id === id ? { ...booth, name } : booth,
			),
		}));
	},
	deleteBooth: async id => {
		set(state => ({
			booths: state.booths.filter(booth => booth.id !== id),
		}));
	},
}));

export default useBoothStore;
