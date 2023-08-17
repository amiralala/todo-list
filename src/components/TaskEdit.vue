<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTaskStore } from "@/stores/task";
import router from '../router';

const taskStore = useTaskStore();
const route = useRoute();

const task = ref({});
const newTask = ref(false);
const getTask = () => {
    console.log(route.params.task_id);
    for (let i = 0; i < taskStore.tasks.length; i++) {
        if (taskStore.tasks[i].id === Number(route.params.task_id)) {
            task.value = taskStore.tasks[i];
            break;
        }
    }
}

const updateTask = () => {
    console.log("update");
    if (window.confirm("Are you sure you want to make changes on this task?")) {
        taskStore.changeTask(task.value);
        router.push('/taskslist');
    }
}

onMounted(() => {
    getTask();
}
)

watch(
    () => route.params.task_id,
    () => { getTask(); }
)
</script>

<template>
    <div>
        <input type="checkbox" name="done" v-model="task.is_complete">
        <input type="text" placeholder="Add a Task" v-model="task.title" required>
        <input type="text" placeholder="Task Type" v-model="task.task_type">
        <input type="date" v-model="task.deadline">
        <select name="priority" v-model="task.priority">
            <option value="high">Emergency</option>
            <option value="medium">Think of it!</option>
            <option value="low">Can wait..</option>
        </select>
        <button @click="updateTask">Update</button>
    </div>
</template>

<style></style>