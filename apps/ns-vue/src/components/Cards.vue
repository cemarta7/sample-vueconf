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
					<StackLayout :backgroundColor="item.backgroundColor">
						<Icon :icon="item.icon" class="text-4xl text-center" />
						<Label :text="item.name" class="text-lg font-bold" />
						<Label :text="item.number" class="text-lg font-bold" />
					</StackLayout>

				</template>
			</CollectionView>
		</StackLayout>
	</Page>
</template>

<style></style>