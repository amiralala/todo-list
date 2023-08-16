<script setup>
import { useTaskStore } from "@/stores/task";
const taskStore = useTaskStore();
import { onMounted } from 'vue'

const removeTask = (task) => {
    if (Window.confirm("Are you sure you want to delete this task ?")) {
        taskStore.deleteTask(task.id);
        taskStore.fetchTasks();
    }
    console.log("remove")
}
const editTask = (task) => {
    console.log("edit")
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

        <tr v-for="task in taskStore.tasks">
            <!-- <tr> -->
            <td>
                <input type="checkbox" name="done" :checked="task.is_complete">
            </td>
            <td>
                {{ task.title }}
            </td>

            <td>
                {{ task.task_type }}
            </td>
            <td>
                {{ task.priority }}
            </td>
            <td>
                {{ task.deadline }}
            </td>
            <td>
                <img src="../icones/delete1.png" @click=removeTask(task)>
            </td>
            <td>
                <img src="../icones/edit1.png" @click=editTask(task)>
            </td>
        </tr>
    </table>
</template>


<style>
td {
    border-style: solid;
    border-width: 1px;
    text-align: center;
    min-width: 100px;
}
</style>