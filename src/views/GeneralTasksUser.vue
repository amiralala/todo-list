<script setup>
import { ref } from "vue"
import HeaderGeneral from '../components/HeaderGeneral.vue'
import TasksList from '../components/TasksList.vue'
import TasksStickers from '../components/TasksStickers.vue'
import { useTaskStore } from "@/stores/task";
import { useUserStore } from "@/stores/user";
import myFooter from '../components/MyFooter.vue'

const userStore = useUserStore();
const taskStore = useTaskStore();

const title = ref("");
const taskType = ref("");
const priority = ref("medium");
const deadLine = ref("");

const displayType = ref("list")

// const updateList = () => { taskStore.fetchTasks(); }
const addTask = async () => {
    await taskStore.insertTask(userStore.user.user.id, title.value, taskType.value, false, priority.value, deadLine.value);
    await taskStore.fetchTasks();
    title.value = "";
    taskType.value = "";
    priority.value = "medium";
    deadLine.value = "";
};
</script>


<template>
    <HeaderGeneral></HeaderGeneral>

    <fieldset>
        <legend>New Task</legend>
        <div class="bulles">
            <input class="new-input" type="text" placeholder="Task name" v-model="title" required>
            <input class="new-input" type="text" placeholder="Task type" v-model="taskType">
            <input class="new-input" type="date" name="" v-model="deadLine">
            <select class="new-input" name="priority" v-model="priority">
                <option value="high">Emergency</option>
                <option value="medium" selected>Think of it!</option>
                <option value="low">Can wait..</option>
            </select>
            <button class="addbutton" @click="addTask">Add</button>
        </div>
    </fieldset>

    <br>
    <hr>
    <label for="display">Display Style : </label>
    <select class="display-select" id="display" v-model="displayType">
        <option value="list">List</option>
        <option value="stickers">Cards</option>
    </select>
    <TasksList v-if="displayType === 'list'"></TasksList>
    <TasksStickers v-if="displayType === 'stickers'"></TasksStickers>
    <myFooter></myFooter>
</template>



<style>
fieldset {
    margin: 1rem 0;
    background-color: rgb(250, 224, 236);
}

.bulles {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.new-input {
    border-style: solid;
    border-width: 1px;
    border-radius: 15px;
    border-color: rgb(200, 198, 195);
    padding: 5px;

}

.addbutton {
    background-color: rgb(224, 191, 206);
    border-style: hidden;
    border-radius: 15px;
    color: rgb(24, 8, 1);
    margin-left: 1%;
}

.display-select {
    margin-bottom: 2%;
}
</style>