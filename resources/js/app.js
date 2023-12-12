import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from "primevue/config";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import routes from "@/routes.js";
import Button from "primevue/button";
import {TinyEmitter} from "tiny-emitter";
import Calendar from "primevue/calendar";


console.log('pawiant')
const app = createApp(App);

app.use(PrimeVue);

app.component('InputNumber', {
    extends: InputNumber,
    props: {
        maxFractionDigits: {
            type: Number,
            default: 2
        },
        minFractionDigits: {
            type: Number,
            default: 2
        },
        locale: {
            type: String,
            default: 'pl-PL'
        }
    }
});
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Calendar', Calendar)
app.use(routes)
app.provide('emitter', new TinyEmitter())
app.mount('#app');
