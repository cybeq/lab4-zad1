<script>
import AuthView from "@/auth/AuthView.vue";
import {inject} from "vue";
import Toast from "@/Toast.js";

export default {
    name: 'App',
    components: {AuthView},
    setup(){
        const emitter = inject('emitter')
        const toast = new Toast();
        return {
            emitter,
            toast
        }
    },
    mounted(){
        this.emitter.on('warn', (message)=>{
            this.toast.warn(message)
        })
        this.emitter.on('error', (message)=>{
            this.toast.error(message)
        })
        this.emitter.on('success', (message)=>{
            this.toast.success(message)
        })
    }
}
</script>

<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style >
@import 'mdi/css/materialdesignicons.css';
@import '@mdi/font/css/materialdesignicons.css';
@import 'primevue/resources/primevue.min.css';
@import url('primevue/resources/themes/lara-light-indigo/theme.css');
@import 'primeicons/primeicons.css';
</style>
