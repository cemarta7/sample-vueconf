<script lang="ts" setup>
import { Label, Button, StackLayout, ObservableArray, FlexboxLayout, backgroundColorProperty } from "@nativescript/core";
import Icon from "./Icon.vue";
import { dataCards } from "~/carddata";

const cards = new ObservableArray(dataCards);


</script>

<template>
	<Page>
		<StackLayout class="p-1">
			<CollectionView :items="cards">
				<template #default="{ item }">
					<FlexboxLayout borderRadius="16" boxShadow="0 0 3 3 rgba(0,0,0,.12)"
						:backgroundColor="item.backgroundColor"
						class="flex-col justify-between h-full p-3 rounded-lg">
						<Icon :icon="item.icon" class="text-4xl text-center" />
						<Label :text="item.name" class="text-lg font-bold" />
						<Label :text="item.number" class="text-lg font-bold" />
					</FlexboxLayout>

				</template>
			</CollectionView>
		</StackLayout>
	</Page>
</template>

<style></style>