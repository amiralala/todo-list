<script setup>
import { useTaskStore } from "@/stores/task";
const taskStore = useTaskStore();
import { onMounted } from 'vue'


const removeTask = async (task) => {
    if (window.confirm("Are you sure you want to delete this task ?")) {
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

        <tr v-for="task in taskStore.tasks" class="table-row">
            <td>
                <input type="checkbox" name="done" v-model="task.is_complete">
            </td>
            <td>
                <input type="text" placeholder="Add a Task" v-model="task.title" required
                    :class="{ finishedTask: task.is_complete }">
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
                <input type="date" name="" v-model="task.deadline" :class="{ 'too-late': checkDeadline(task) }">
            </td>
            <td>
                <img class="edit-remove" @click=removeTask(task) src="../icones/delete1.png">
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
    background-color: rgb(255, 255, 255);
}

input {
    border-style: none;
    text-decoration: none;
}

td {
    border-style: none;
    color: rgba(99, 3, 90, 0.39);
}

table {
    width: 100%;
}

tr:hover{
    background-color:rgb(231, 224, 229);
}

.edit-remove {
    width: 40px;

}

.edit-remove:hover{cursor: pointer;}

.finishedTask {
    text-decoration: line-through;
}

.too-late {
    background-color: red;
}

.header {
    background-color: rgb(231, 224, 229);
}
</style>