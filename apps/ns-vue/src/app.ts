import { createApp } from 'nativescript-vue';
import Home from './components/Home.vue';
import CollectionView from '@nativescript-community/ui-collectionview/vue3';

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import {createPinia} from "pinia";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

import { useColorMode } from "@nativescript-use/vue";
useColorMode({ initialValue: 'auto' })

createApp(Home).use(pinia).use(CollectionView).start();
