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

const onSubmitSignIn = () => {
    userStore.signInUser(email.value, password.value);
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
        // router.push("/taskslist")
        console.log("after creation", userStore.user);
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

    <div v-if="(logChoice === 'sign-in')">
        <input class="sign" type="email" placeholder="Enter your email address" v-model="email" required>
        <br>
        <input class="sign" type="password" placeholder="Password" v-model="password" required>
        <br>
        <button class="signIn" @click="onSubmitSignIn">Sign in</button>
    </div>

    <div v-if="(logChoice === 'new')">
        <input  type="text" placeholder="Enter your First and Last name" v-model="userName" required>
        <br>
        <input type="email" placeholder="Enter your email address" v-model="email" required>
        <br>
        <input type="tel" placeholder="Enter your phone number" v-model="phone" required>
        <br>
        <input type="password" placeholder="Password" v-model="password" required>
        <br>
        <input type="password" placeholder="Confirm Password" v-model="password2" required>
        <br>
        <button @click="onSubmitNew">Register</button>
    </div>
</template>

<style>
body {
    font-size: 20px;
    margin: 0px 10em 0px 10em;
    padding: 0;
    font-family: Roboto;
    background-color: #F2F4FC;
}
.sign {
    width: 400px;
    background-color: rgb(254, 224, 230);
    border: none;
}
.signIn{
    width: 400px;
    background-color: rgb(232, 181, 189);
    border: none;
    color: rgb(130, 16, 67);
    

}

</style>