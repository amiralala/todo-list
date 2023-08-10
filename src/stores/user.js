import { defineStore } from "pinia";
import supabase from "../lib/supabase";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const user = ref();

  const createNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) console.log("Error: ", error);
    else {
      ("Data: ", console.log(data))
      user.value = data;
      console.log(user);
    }
  };

  const signInUser = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    })
    if (error)  window.alert("Error: ", error);
    else {
      ("Data: ", console.log(data))
      user.value = data;
    }
  }
  return {user, createNewUser, signInUser}
})