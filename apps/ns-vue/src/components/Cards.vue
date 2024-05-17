<script lang="ts" setup>
import { Label, Button, StackLayout, ObservableArray, FlexboxLayout, backgroundColorProperty } from "@nativescript/core";
import Icon from "./Icon.vue";
import { dataCards } from "~/carddata";
const cards = new ObservableArray(dataCards);
</script>
<template>
	<Page>
		<StackLayout class="p-1">
			<CollectionView :items="cards" class="h-full" height="100%">
				<template #default="{ item }">
					<StackLayout class="p-2" :backgroundColor="item.backgroundColor">
						<!-- <Icon :icon="item.icon" class="m-2 text-2xl text-center" /> -->
						<Label :text="item.name" class="m-2 text-xl text-center" />
						<Label :text="item.number" class="m-2 text-sm text-center" />
					</StackLayout>
				</template>
			</CollectionView>
		</StackLayout>
	</Page>
</template>
<style></style>