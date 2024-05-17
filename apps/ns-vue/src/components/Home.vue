<script lang="ts" setup>
import { Label, Button, TextField, Frame, Page, StackLayout, Switch } from "@nativescript/core";
import { $navigateTo, $showModal, ref } from "nativescript-vue";
import Cards from "./Cards.vue";
import SimpleModal from "./SimpleModal.vue";
import { useSampleStore } from '~/stores/sample';
import { useColorMode } from '@nativescript-use/vue'
const { schema } = useColorMode();

const store = useSampleStore();

const firstname = ref('');

const check = ref(true);

function testClick() {
  console.log("testClick");
  store.changeValue('Some Value new');
  // $showModal(SimpleModal, {
  //   fullscreen: true,
  //   animated: true,
  //   stretched: true,
  //   transition: {
  //     name: "slideTop",
  //     duration: 1000,
  //     curve: "spring"
  //   },
  // });
}

function changeOnCheck() {
  console.log("changeCheck");

  if (check.value) {
    schema.value = 'light';
  } else {
    schema.value = 'dark';
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
          <Label text="Frist Name" />
          <TextField v-model="firstname" />
          <StackLayout orientaion="horizontal">
            <Label text="Switch" />
            <Switch v-model="check" @checkedChange="changeOnCheck" />
          </StackLayout>
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
