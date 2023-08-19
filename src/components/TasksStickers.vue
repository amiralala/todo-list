<script setup>
import { useTaskStore } from "@/stores/task";
const taskStore = useTaskStore();
import { onMounted } from 'vue'


const removeTask = async (task) => {
    if (Window.confirm("Are you sure you want to delete this task ?")) {
        await taskStore.deleteTask(task.id);
        await taskStore.fetchTasks();
    }
}

const checkDeadline = (task) => {
    const deadline = new Date(task.deadline);
    console.log("Date : ", Date());
    return (Date.now() >= deadline);
}

onMounted(async () => {
    await taskStore.fetchTasks();
})
</script>


<template>
    <div class="stickers-container">
        <div v-for="task in taskStore.tasks" class="sticker" :class="{ 'finishedTask': task.is_complete }">
            <div>{{ task.title }} </div>
            <div> {{ task.type }}</div>
            <select name=" priority" v-model="task.priority">
                <option value="high">Emergency</option>
                <option value="medium">Think of it!</option>
                <option value="low">Can wait..</option>
            </select>
            <div :class="{ 'too-late': checkDeadline(task) }"> {{ task.deadline }} </div>
            <p v-if="task.is_complete">Done !</p>
            <p v-else>To Do !</p>

            <div>
                <img class="edit-remove" @click="removeTask" src="../icones/delete1.png">
                <router-link :to="{ name: 'taskedit', params: { task_id: task.id } }">
                    <img class="edit-remove" src="../icones/edit1.png" @click=editTask(task)>
                </router-link>
            </div>
        </div>
    </div>
</template>


<style>
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 20px;
    background-color: rgb(255, 255, 255);
}

.stickers-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.sticker {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    white-space: nowrap;
    margin: 5%;
    padding: 1%;
    box-shadow: 10px 5px 5px rgb(250, 224, 236);
    border-radius: 5px;
    border-style: solid;
}

.sticker * {
    padding: 5px;
}

.sticker:hover {
    scale: 125%;
}

.edit-remove {
    width: 40px;
}

.finishedTask {
    text-decoration: none;
}

.too-late {
    color: red;
    background-color: transparent;
}

.header {
    background-color: rgb(231, 224, 229);
}
.edit-remove:hover{cursor: pointer;}
</style>