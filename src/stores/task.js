import { defineStore } from "pinia"
import supabase from "../lib/supabase"
import { ref } from "vue"

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select()

    if (error) { console.log(error); }
    else tasks.value = data;
    console.log("tasks: ", tasks.value);
  }
  const insertTask = async (title, task_type, is_complete, priority, deadline) => {
    let rowData = {};
    rowData.title = title;
    rowData.task_type = task_type;
    rowData.is_complete = is_complete;
    rowData.priority = priority;
    rowData.deadline = deadline;

    console.log(rowData);
    const { error } = await supabase
      .from('tasks')
      .insert(rowData)

    if (error) { console.log(error); }
  }

  const deleteTask = async (idToDelete) => {

    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', idToDelete);

    if (error) { console.log(error); }
  }

  const changeTask = async (task) => {
    const { error } = await supabase
      .from('tasks')
      .update(task)
      .eq('id', task.id)
    if (error) { console.log(error); }
  }
  return { tasks, fetchTasks, insertTask, deleteTask, changeTask }
})