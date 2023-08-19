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

const updateTask = async () => {
    console.log("update");
    if (window.confirm("Are you sure you want to make changes on this task?")) {
        await taskStore.changeTask(task.value);
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
    <fieldset class="bulles">
        <div class="first-line">
            <input type="text" id="task-name" class="new-input" placeholder="Add a Task" v-model="task.title" required>
            <label for="done">Done</label>
            <input type="checkbox" name="done" v-model="task.is_complete">
        </div>

        <input type="text" class="new-input" placeholder="Task Type" v-model="task.task_type">
        <input type="date" class="new-input" v-model="task.deadline">
        <select class="new-input" name="priority" v-model="task.priority">
            <option value="high">Emergency</option>
            <option value="medium">Think of it!</option>
            <option value="low">Can wait..</option>
        </select>

        <button class="update-button" @click="updateTask">Update</button>
    </fieldset>
</template>

<style>
.bulles {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    flex-wrap: wrap;

}

.new-input {
    border-style: solid;
    border-width: 1px;
    border-radius: 15px;
    border-color: rgb(200, 198, 195);
    padding: 5px;
    margin-bottom: 2%;
    align-self: stretch;
}

.update-button {
    background-color: rgb(224, 191, 206);
    border-style: hidden;
    border-radius: 15px;
    color: rgb(24, 8, 1);
    margin-bottom: 1%;
}

.first-line {
    display: flex;
    flex-direction: row;
    margin-bottom: 2%;
}

#task-name {
    flex-grow: 0.6;
    margin-right: 2%;
    margin-bottom: 0;
}
</style>