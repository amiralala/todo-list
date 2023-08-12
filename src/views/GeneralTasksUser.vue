<script setup>
import HeaderGeneral from '../components/HeaderGeneral.vue'
import TasksList from '../components/TasksList.vue'

</script>


<template>
    <HeaderGeneral></HeaderGeneral>
    <div>
        <input type="text" placeholder="Add a Task" required>
        <input type="text" placeholder="Task Type">
        <input type="date" name="" id="">
        <select name="priority" >
            <option value="high">Emergency!</option>
            <option value="medium" selected>Think of it!</option>
            <option value="low">Can wait..</option>
        </select>
        <button>Add</button>

    </div>
    <TasksList></TasksList>
</template>



<style></style>