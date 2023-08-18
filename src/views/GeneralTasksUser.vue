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

    <fieldset>
        <legend>NewTask</legend>
        
        <div class="bulles">
        <input id="task-name" class="new-input" type="text" placeholder="Task name" v-model="title" required>
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
    <TasksList></TasksList>
</template>



<style>
fieldset{
    margin:1rem 0;
    background-color: rgb(250, 224, 236);
}

.new-input {
    border-style: solid;
    border-width: 1px;
    border-radius: 15px;
    border-color: rgb(200, 198, 195);
    
}
.addbutton{
    background-color: rgb(224, 191, 206);
    border-style:hidden ;
    border-radius: 15px;
    color: rgb(24, 8, 1);
    
}
.bulles{
    display: flex;
    justify-content: space-evenly;
}
#task-name{
    flex-grow:0.6 ;
}

</style>