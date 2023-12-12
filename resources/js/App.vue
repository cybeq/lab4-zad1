<script>
import AuthView from "@/auth/AuthView.vue";

export default {
    name: 'App',
    components: {AuthView},
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
