<script setup>
import { useTaskStore } from "@/stores/task";
const taskStore = useTaskStore();
import { onMounted } from 'vue'


const removeTask = (task) => {
    if (Window.confirm("Are you sure you want to delete this task ?")) {
        taskStore.deleteTask(task.id);
        taskStore.fetchTasks();
    }
}

const checkDeadline = (task) => {
    const deadline = new Date(task.deadline);
    console.log("Date : ", Date());
    return (Date.now()>=deadline);
}

onMounted(() => {
    taskStore.fetchTasks();
})
</script>


<template>
    <table>
        <thead class="header">
            <td>Done</td>
            <td>Title</td>
            <td>Type</td>
            <td>Priority</td>
            <td>Deadline</td>
            <td>Remove</td>
            <td>Edit</td>
        </thead>

        <tr v-for="task in taskStore.tasks" >
            <td>
                <input type="checkbox" name="done" v-model="task.is_complete">
            </td>
            <td>
                <input type="text" placeholder="Add a Task" v-model="task.title" required
                :class="{finishedTask: task.is_complete}">
            </td>

            <td>
                <input type="text" placeholder="Task Type" v-model="task.task_type">
            </td>
            <td>
                <select name="priority" v-model="task.priority">
                    <option value="high">Emergency</option>
                    <option value="medium">Think of it!</option>
                    <option value="low">Can wait..</option>
                </select>
            </td>
            <td>
                <input type="date" name="" v-model="task.deadline" :class="{'too-late': checkDeadline(task)}">
            </td>
            <td>
                <img class="edit-remove" src="../icones/delete1.png">
            </td>
            <td>
                <router-link :to="{ name: 'taskedit', params: { task_id: task.id } }">
                    <img class="edit-remove" src="../icones/edit1.png" @click=editTask(task)>
                </router-link>
            </td>
        </tr>
    </table>
</template>


<style>
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 20px;
    background-color: rgb(245, 224, 232);
}

td {
    border-style: none;

    text-align: center;
    min-width: 100px;
}

tr {
    border-style: solid;
    border-width: 1px;
    border-color: black;
}

.edit-remove {
    width: 40px;
}

.finishedTask{
    text-decoration: line-through;
}

.too-late{
    background-color: red;
}
</style>