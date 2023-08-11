<script setup>
import HeaderGeneral from '../components/HeaderGeneral.vue'
</script>


<template>
    <HeaderGeneral></HeaderGeneral>
    <div>
        <input type="text" placeholder="Add a Task" required>
        <button @click="onSubmitSignIn">Add</button>
    </div>
    
</template>



<style></style>