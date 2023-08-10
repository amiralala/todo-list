<script setup>
import { useUserStore } from "@/stores/user";
import { onMounted, ref } from "vue";
const userStore = useUserStore();

const logChoice = ref("sign-in");
const email = ref("");
const phone = ref("");
const password = ref("");
const password2 = ref("");

const onSubmitSignIn = () => {
        useUserStore.signInUser(email, password);
}

const onSubmitNew = () => {
    if (password.value.length < 6) {
        window.alert("Password should be 6 characters minimum");
    }
    else if (password.value !== password2.value){
        window.alert("Passwords do not match");
    }
    else {
        useUserStore.signInUser(email, password);
    }
}
</script>

<template>
    <!-- <fieldset> -->
    <div>
        <input type="radio" name="log-option" value="new" v-model="logChoice" />
        <label for="new">Create Account. <span>New to "My Wise TODO List"</span></label>
    </div>
    <div><input type="radio" name="log-option" value="sign-in" v-model="logChoice" checked />
        <label for="sign-in"> Already a User? Sign In.</label>
    </div>
    <!-- </fieldset> -->

    <form v-if="(logChoice === 'sign-in')" @submit="onSubmitSignIn">
        <input type="email" placeholder="Enter your email address" v-model="email" required>
        <br>
        <input type="password" placeholder="Password" v-model="password" required>
        <br>
        <input type="submit">
    </form>

    <form v-if="(logChoice === 'new')" @submit="onSubmitNew">
        <input type="email" placeholder="Enter your email address" v-model="email" required>
        <br>
        <input type="tel" placeholder="Enter your phone number" v-model="phone" required>
        <br>
        <input type="password" placeholder="Password" v-model="password" required>
        <br>
        <input type="password" placeholder="Confirm Password" v-model="password2" required>
        <br>
        <input type="submit">
    </form>
</template>

<style></style>