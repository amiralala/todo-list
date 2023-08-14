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

    if (error) { window.alert(error) }
    else {
      ("Data: ", console.log(data))
      user.value = data;
      console.log("info user: ", user.value);
    }
  };

  const signInUser = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
      window.alert(error);
    }
    user.value = data;
    console.log("user signed in :", user.value);
    console.log(error);
  };
  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) window.alert("Error: ", error);
  };


  return { user, createNewUser, signInUser, signOutUser }
})