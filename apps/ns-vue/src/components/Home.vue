<script lang="ts" setup>
import { Label, Button, TextField, Frame, Page, StackLayout, Switch } from "@nativescript/core";
import { $navigateTo, $showModal, ref } from "nativescript-vue";
import Cards from "./Cards.vue";
import SimpleModal from "./SimpleModal.vue";
import { useSampleStore } from '~/stores/sample';
import { useColorMode } from '@nativescript-use/vue'
const { system, schema, theme, modes } = useColorMode();

const store = useSampleStore();

const name = ref('');
const check = ref(true);

function testClick() {
  console.log("testClick");
  $showModal(SimpleModal, {
    fullscreen: false,
    animated: true,
    stretched: true,
    transition: {
      name: "slideBottom",
      duration: 500,
      curve: "easeIn"
    },
  });
}

function changeOnCheck() {
  console.log("changeCheck");
  if (check.value) {
    schema.value = 'dark';
  } else {
    schema.value = 'light';
  }

}

</script>
<template>
  <Frame>

    <Page>
      <StackLayout class="p-1">
        <Label>
          Hello World
        </Label>
        <Button @tap="testClick()" class="my-1 text-white bg-blue-500 rounded" text="Test" />
        <Button @tap="$navigateTo(Cards)" class="my-1 text-white bg-red-500 rounded" text="Cards" />
        <StackLayout>
          <Label text="First Name" />
          <TextField v-model="name" />
          <Label :text="name" />
          <Switch v-model="check" @checkedChange="changeOnCheck" />
          <Label :text="check" />
        </StackLayout>
      </StackLayout>


    </Page>

  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
