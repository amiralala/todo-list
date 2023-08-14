<script setup>
import { ref } from "vue"
import { useUserStore } from "@/stores/user";


const userStore = useUserStore();

const onSignOut = () => {
    userStore.signOutUser();
};


</script>


<template>
    <span>My ToDo List</span>
    <span v-if="userStore.user">{{ "Hello " + userStore.user.user.email }}</span>
    <span @click="userStore.signOutUser">
        <router-link to="/">Logout </router-link>
    </span>
</template>



<style></style>