<script setup>

</script>

<template>
    <footer>
        <img class="signature" src="../images/1692436112449.jpg" alt="signature">
        <div class="links">
            <a href="" class="link">Press</a>
            <a href="" class="link">Contact us</a>
            <a href="" class="link">Privacy Policy</a>
            <a href="" class="link">
                <img class="social-logos" src="../icones/facebook_insta.png" alt="social networks logos">
            </a>
        </div>
    </footer>
</template>


<style>
.signature {
    width: 25%;
}

footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:end;
}

.links {
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items:start;
}

.link {
    margin: 0 1%;
    white-space:nowrap;
}

.social-logos {
    width: 20%;
}</style>