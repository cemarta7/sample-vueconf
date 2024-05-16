<template>
	<Page @loaded="onLoaded" :height="modalHeight" :width="modalWidth">
		<GridLayout rows="auto, auto, *">
			<StackLayout row="0" height="100" width="100%" class="bg-[#12a296]" orientation="horizontal"
				horizontalAlignment="center" verticalAlignment="center">
				<StackLayout horizontalAlignment="center" verticalAlignment="center">
					<Label text="Simple Modal" class="text-black" textAlignment="right" />
				</StackLayout>
			</StackLayout>

			<StackLayout row="1" class="mx-10 my-5">
				<Label :text="someText" class="py-2 text-center" />
				<Button text="Close Modal" @tap="closeModal" class="bg-[#12a296] w-1/2 py-2" />
			</StackLayout>
		</GridLayout>

	</Page>
</template>

<script setup lang="ts">
import { Page, StackLayout, EventData, Screen, GridLayout } from '@nativescript/core';
import { ref, computed } from 'nativescript-vue';
import { useSampleStore } from '~/stores/sample';

const store = useSampleStore();

const someText = computed(() => store.getSomeValue);

//const someText = ref('Value');
const page = ref({});
const modalHeight = ref(0)
const modalWidth = ref(0)


function onLoaded(args: EventData) {
	const screenWidth = Screen.mainScreen.widthDIPs;
	modalWidth.value = Math.round(screenWidth * 0.9);
	const screenHeight = Screen.mainScreen.heightDIPs;
	modalHeight.value = Math.round(screenHeight * 0.5);
	console.log(modalHeight.value)
	console.log(modalWidth.value)
	page.value = args.object as Page;
	console.log(someText.value);
}


function closeModal() {
	console.log('Closing Modal');
	page.value.closeModal();
}
</script>

<style scoped>
.page {
	background-color: #ffffff;
}
</style>