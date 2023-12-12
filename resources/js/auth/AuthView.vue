<script>

import {inject} from "vue";
import AuthService from "@/auth/AuthService.js";
import Toast from "@/Toast.js";

export default {
    setup(){
        const emitter = inject('emitter')
        const service = new AuthService(emitter);
        const toast = new Toast();
        return {
            service,
            emitter,
            toast
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
    mounted(){
        this.onEmit()
    },
    methods:{
        login(){
            this.service.validate(this.auth).then(r=>{
                console.log(r)
            })
        },
        onEmit(){
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
}
</script>

<template>
<section class="login-container">
    <div class="panel">
        <h3>Mateusz Świderski, inf 3 wsiiz</h3>
        <input-text placeholder="email" class="widthfit" v-model="auth.email"></input-text>
        <input-text type="password" placeholder="password" class="widthfit" v-model="auth.password"></input-text>
        <Calendar format="dd/mm/yyyy" placeholder="date of birth" v-model="auth.birthday" class="widthfit"></Calendar>
        <Button class="widthfit" @click="login">Verify</Button>
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
