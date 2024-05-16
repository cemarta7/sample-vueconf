import { defineStore } from "pinia";
import { usePiniaWebpackHotHMR } from "~/utils/piniaHmr";
export const useSampleStore = defineStore('sample_store', {
	state: () => ({
		someValue:"FooBar"
	}),
	getters: {
	},
	actions: {
	},
});

if ((import.meta as any).webpackHot) {
	usePiniaWebpackHotHMR((import.meta as any).webpackHot, useSampleStore);
}