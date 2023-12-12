<script>

import {inject} from "vue";
import AuthService from "@/auth/AuthService.js";
import Toast from "@/Toast.js";

export default {
    setup(){
        const emitter = inject('emitter')
        const service = new AuthService(emitter);
        return {
            service,
        }
    },
    data(){
        return{
            auth:{
                email:'',
                password:'',
                birthday:null,
            }
        }
    },
    methods:{
        login(){
            this.service.validate(this.auth).then(r=>{
                console.log(r)
            })
        },

    }
}
</script>

<template>
<section class="login-container">
    <div class="panel">


        <input-text placeholder="email" class="widthfit" v-model="auth.email"></input-text>
        <input-text type="password" placeholder="password" class="widthfit" v-model="auth.password"></input-text>
        <Calendar format="dd/mm/yyyy" placeholder="date of birth" v-model="auth.birthday" class="widthfit"></Calendar>
        <Button class="widthfit" @click="login">Verify</Button>
        <div>----</div>
        <h3>Mateusz Świderski, inf 3 wsiiz</h3>
        <Button severity="warning" @click="this.$router.push({name:'game'})">Lab 4, zad 2</Button>
    </div>
</section>
</template>

<style>
.login-container{
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}
.panel{
    width:400px;
    height:400px;
    display:flex;
    flex-direction:column;
    gap:4px;
    border-radius:5px;
    align-items:center;
    justify-content:center;
    border:solid 1px #00000015;
}
.widthfit{
    width:300px;
}
</style>
