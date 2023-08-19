<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref } from "vue";
import { useUserStore } from "@/stores/user";



const userStore = useUserStore();

const logChoice = ref("sign-in");
const email = ref("");
const userName = ref("");
const phone = ref("");
const password = ref("");
const password2 = ref("");

const onSubmitSignIn = async () => {
    await userStore.signInUser(email.value, password.value);
    console.log("depuis page sign in ", userStore.user);

    router.push('/taskslist')
}

const onSubmitNew = () => {
    if (password.value.length < 6) {
        window.alert("Password should be 6 characters minimum");
    }
    else if (password.value !== password2.value) {
        window.alert("Passwords do not match");
    }
    else {
        userStore.createNewUser(email.value, password.value);
        router.push("/taskslist")
        console.log("after creation", userStore.user);
    }
}
</script>

<template>
    <fieldset>
        <div class=" signing-choice">
            <input type="radio" name="log-option" value="new" v-model="logChoice" />
            <label for="new">New to "My TODO List ? Join us !</label>
        </div>
        <div><input type="radio" name="log-option" value="sign-in" v-model="logChoice" checked />
            <label for="sign-in">Already a User? Sign In !</label>
        </div>

        <fieldset v-if="(logChoice === 'sign-in')">
            <input class="inputs" type="email" placeholder="Enter your email address" v-model="email" required>
            <br>
            <input class="inputs" type="password" @keyup.enter="onSubmitSignIn" placeholder="Password" v-model="password" required>
            <br>
            <button class="submit-btn" @click="onSubmitSignIn">Sign in</button>
        </fieldset>

        <div v-if="(logChoice === 'new')">
            <input class="inputs" type="text" placeholder="Enter your First and Last name" v-model="userName" required>
            <br>
            <input class="inputs" type="email" placeholder="Enter your email address" v-model="email" required>
            <br>
            <input class="inputs" type="tel" placeholder="Enter your phone number" v-model="phone" required>
            <br>
            <input class="inputs" type="password" placeholder="Password" v-model="password" required>
            <br>
            <input class="inputs" type="password" @keyup.enter="onSubmitNew" placeholder="Confirm Password" v-model="password2" required>
            <br>
            <button class="submit-btn" @click="onSubmitNew">Register</button>
        </div>
    </fieldset>
    
</template>

<style>

body {
    font-size: 1rem;
    margin: 1rem 10rem 1rem 10rem;
    padding: 0;
    color: rgb(177, 109, 109);

}

.inputs {
    width: 100%;
    background-color: rgb(242, 212, 218);
    border: none;
    
}

.submit-btn {
    width: 100%;
    background-color: rgb(212, 166, 173);
    border: none;
    color: rgb(130, 16, 67);

}
</style>