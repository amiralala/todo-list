<script setup>
import UserLogging from '../components/UserLogging.vue'
</script>

<template>
    <nav>
        <ul class="menu">
            <li> <a href="features">Features</a></li>
            <li><a href="contact-us">Contact Us</a></li>
            <li><a href="learn-more">Learn more</a></li>
        </ul>

    </nav>
    <div class="logo-todo"></div>
    <!-- <div><img class="logo-todo" src="../images/1692298872046.PNG" alt=""></div> -->
    <UserLogging></UserLogging>
    <div class="deskpicture">" "</div>
    <p class="desktext">"Easily organize your task for free"</p>

    <section>
        <p>Already one user</p>
        <p>Join me!</p>
        <p>Simply powerful, you'll have everything neatly organized</p>
    </section>
</template>

<style>
.menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;

}

/* .menu {
  color: rgb(25, 0, 255);
} */

.menu a {
    text-decoration: none;
    color: rgb(177, 109, 109);
    font-weight: bold;
}

.logo-todo {
    /* width: 300px; */
    background-image: url(../images/1692298872046.PNG);
    background-size:contain;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    min-height:20em;
}

.deskpicture {
    background-image: url(../images/deskpicture.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(4px);
    font-size: 2em;
    text-align: center;
    width: 100%;
    height: 10em;
    position:relative;
    
}

.desktext {
    position: relative;
    top: -10em;
    left: 25%;
    /* text-align: center; */
    color: rgb(46, 170, 127);
    font-size: 30px;
    font-family:Verdana, Geneva, Tahoma, sans-serif ;

}
section{
    background-color: rgb(195, 245, 228);
    color: rgb(189, 189, 24);
    
}
</style>