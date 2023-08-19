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
        <img class="logo-todou" src="../images/logo-tache.png" alt="logo">
        <div class="hello" v-if="userStore.user">{{ "Hello " + userStore.user.user.email }}</div>
        <div  @click="userStore.signOutUser">
            <router-link class="outbutton" to="/">Log out</router-link>
        </div>
    </nav>
</template>



<style>
.logo-todou {
    width: 20%;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-image: url(../images/fond3.jpg) ;
}
.outbutton{
    border: none;
    background-color: rgb(220, 151, 151);
    border-radius: 20PX;
    color: rgb(254, 239, 254);
    font-size: 1rem;
    padding: 0.5rem;
    text-decoration: none;
}
.hello{
    font-size: 20PX;
    color: rgb(133, 111, 3);
}

</style>