<template>
    <footer class="shortly-footer">
        <div class="shortly-footer__logo">
            <img
                src="~/assets/images/shortly/logo.svg"
                alt="shortly logo"
            >
        </div>
        <div
            class="shortly-footer__menu"
            v-for="(menu, i) in menuData"
            :key="i"
        >
            <p>{{ menu.title }}</p>
            <nuxt-link
                to="#"
                v-for="(link, i) in menu.links"
                :key="link + '_' + i"
            >{{ link }}</nuxt-link>
        </div>
        <div>
            <img
                :src="icon.img"
                alt="social icon"
                v-for="(icon, i) in icons"
                :key="icon.slug + '_' + i"
            >
        </div>
    </footer>
</template>

<script>
    import helpers from "~/helpers";
    export default {
        data() {
            return {
                menuData: helpers.get('shortlyMenu'),
                icons: helpers.get('shortlyIcons')
            };
        },
    }
</script>