<script setup>
import { ref } from "vue"
import { useUserStore } from "@/stores/user";


const userStore = useUserStore();

const onSignOut = () => {
    userStore.signOutUser();
};


</script>


<template>
    <nav>
        <div><img class="logo-todou" src="../images/IMG_20230817_210139.jpg" alt=""></div>
        <div v-if="userStore.user">{{ "Hello " + userStore.user.user.email }}</div>
        <div  @click="userStore.signOutUser">
            <router-link class="outbutton" to="/">Log out</router-link>
        </div>
    </nav>
</template>



<style>
.logo-todou {
    width: 150px;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
.outbutton{
    border: none;
    background-color: rgb(176, 84, 170);
    border-radius: 20PX;
    color: rgb(239, 216, 238);
    font-size: 1rem;
    padding: 0.5rem;
    text-decoration: none;
}
</style>