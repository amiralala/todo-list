<script setup>
import UserLogging from '../components/UserLogging.vue'
import MyFooter from '../components/MyFooter.vue'
</script>

<template>
    <nav>
        <ul class="menu">
            <li><a href="features">Features</a></li>
            <li><a href="contact-us">Contact Us</a></li>
            <li><a href="learn-more">Learn more</a></li>
        </ul>
    </nav>

    <div class="logo-todo"></div>
    <!-- <div><img class="logo-todo" src="../images/1692298872046.PNG" alt=""></div> -->
    <UserLogging></UserLogging>
    <div class="deskpicture">
        <p class="quote">"Easily organize your tasks for free"</p>
    </div>

    <section class="green-section">
        <p>Already 1 user</p>
        <p>Join me!</p>
        <q class="simply">Simply powerful, you'll have everything neatly organized</q><br>
        <q class="dojacat">My mom</q>
    </section>

    <section class="l-picture">
        <img class="mobile" src="../images/imagenius.png" alt="picture">
        <q class="quote2">Easy, User-friendly, <br> All your tasks at a glance!</q>
    </section>
    <MyFooter></MyFooter>
</template>

<style>
.menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    width: 90%;
}

.menu a {
    text-decoration: none;
    color: rgb(167, 7, 58);
    font-weight: bold;
    margin-right: 2%;
    white-space: nowrap;
    overflow: hidden;
}

.logo-todo {
    /* width: 300px; */
    background-image: url(../images/logo-tache.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    min-height: 10rem;
}

.deskpicture {
    background-image: url(../images/deskpicture.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-size: 2em;
    width: 100%;
    height: 10em;
    color: rgb(28, 195, 142);
    display: flex;
    align-items: end;
    justify-content: center;

}

.quote {
    text-align: center;
}

.green-section {
    background-color: rgb(208, 251, 237);
    color: rgb(173, 173, 24);
    text-align: center;
    padding: 0.5em;
    margin: 0.5em;
}

.simply {
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;
}

.dojacat {
    font-style: italic;
    font-size: 13px;
    font-family: 'Times New Roman', Times, serif;

}

.l-picture {
    background-color: rgb(253, 249, 201);
    display: flex;
    align-items: center;
}

.mobile {
    width: 80%;
    margin: 2%;
}
</style>