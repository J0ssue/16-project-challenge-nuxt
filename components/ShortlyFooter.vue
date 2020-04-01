<template>
    <footer class="shortly-footer bg-shortly-neutral-dark-violet py-16 text-center lg:flex lg:items-baseline lg:px-40">
        <div class="shortly-footer__logo mb-16 lg:mb-0">
            <img
                class="block mx-auto shortly-footer__social-logo"
                src="~/assets/images/shortly/logo-footer.svg"
                alt="shortly logo"
            >
        </div>
        <div
            class="shortly-footer__menu"
            :class="{
                'lg:ml-auto lg:mr-16': i === 0,
                'lg:mr-16': i === 1,
            }"
            v-for="(menu, i) in menuData"
            :key="i"
        >
            <p class="font-bold text-white capitalize text-sm mb-4">{{ menu.title }}</p>
            <nuxt-link
                class="text-sm text-shortly-neutral-gray block mb-2 transition duration-300 ease-in-out hover:text-shortly-primary-cyan"
                to="#"
                v-for="(link, i) in menu.links"
                :key="link + '_' + i"
            >{{ link }}</nuxt-link>
        </div>
        <div class="flex justify-center items-center lg:ml-auto">
            <a
                href="#"
                class="shortly-footer__social-logo block"
                v-for="(icon, i) in icons"
                :key="icon.slug + '_' + i"
                v-html="icon.img"
            >
                <!-- <img
                    :src="icon.img"
                    alt="social icon"
                > -->
            </a>
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