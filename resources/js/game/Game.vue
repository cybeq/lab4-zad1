<script>
import {inject} from "vue";
import GameService from "@/game/GameService.js";

export default{
    setup(){
        const emitter = inject('emitter')
        const service = new GameService(emitter);
        return {
            service,
        }
    },
    data(){
        return{
            game:{
                num:null,
            }
        }
    },

    methods:{
        login(){
            this.service.shoot(this.game).then(r=>{
                console.log(r)
            })
        },

    }
}
</script>

<template>
<section class="login-container">
    <div class="panel">

        <InputNumber :min="1" :max="10" class="widthfit" placeholder="min 1 / max 10" v-model="game.num"></InputNumber>
        <Button class="widthfit" @click="login">Shoot</Button>
        <div>----</div>
        <h3>Mateusz Świderski, inf 3 wsiiz</h3>
        <Button severity="success" @click="this.$router.push({name:'Auth'})">Lab 4, zad 1</Button>
    </div>
</section>
</template>

<style scoped>

</style>
