<script setup>
import { ref } from "vue"
import HeaderGeneral from '../components/HeaderGeneral.vue'
import TasksList from '../components/TasksList.vue'
import { useTaskStore } from "@/stores/task";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const taskStore = useTaskStore();

const title = ref("");
const taskType = ref("");
const priority = ref("medium");
const deadLine = ref("");

const updateList = () => { taskStore.fetchTasks(); }
const addTask = () => {
    taskStore.insertTask(title.value, taskType.value, false, priority.value, deadLine.value);
    taskStore.fetchTasks();
    //updateList();
};
</script>


<template>
    <HeaderGeneral></HeaderGeneral>
    <!-- <button @click="updateList">Update</button> -->
    <div>
        <input type="text" placeholder="Add a Task" v-model="title" required>
        <input type="text" placeholder="Task Type" v-model="taskType">
        <input type="date" name="" v-model="deadLine">
        <select name="priority" v-model="priority">
            <option value="high">Emergency</option>
            <option value="medium" selected>Think of it!</option>
            <option value="low">Can wait..</option>
        </select>
        <button @click="addTask">Add</button>

    </div>
    <TasksList></TasksList>
</template>



<style></style>