<script lang="ts" setup>
import { Label, Button } from "@nativescript/core";
import { Frame, Page, StackLayout } from "@nativescript/core";
import { $navigateTo } from "nativescript-vue";
import Cards from "./Cards.vue";

function testClick() {
  console.log("testClick");
}
</script>

fun

<template>
  <Frame>

    <Page>
      <StackLayout class="p-1">
        <Label>
          Hello World
        </Label>
        <Button @tap="testClick()" class="my-1 text-white bg-blue-500 rounded" text="Test" />
        <Button @tap="$navigateTo(Cards)" class="my-1 text-white bg-red-500 rounded" text="Cards" />
      </StackLayout>
    </Page>

  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
