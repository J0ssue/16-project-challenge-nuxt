<template>
    <div class="default relative h-full">
        <button
            class="navbar__toggle focus:outline-none"
            @click="toggleNavigation"
        >my<br>projects</button>
        <nav
            class="navbar flex flex-col items-center px-12 uppercase bg-black text-white pt-20"
            :class="{'navbar--open': isMainNavbarOpen, 'navbar--close': !isMainNavbarOpen}"
            role="navigation"
            aria-label="main navigation"
        >
            <button
                class="navbar__close-btn absolute bg-shortly-neutral-dark-violet hover:bg-shortly-neutral-gray-violet transition duration-300 ease-in-out px-3 text-sm rounded-lg py-1 focus:outline-none text-white"
                @click="toggleNavigation"
            >close</button>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/"
            >home</nuxt-link>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                :to="'/' + slug"
                v-for="(slug, i) in portfolio.menu"
                :key="i"
            >{{ slug.replace('-', ' ') }}</nuxt-link>
        </nav>
        <!-- <div> -->
        <div class="container mx-auto">
            <nuxt />
        </div>
        <button
            class="default--overlay block absolute top-0 left-0 w-full h-full focus:outline-none"
            :class="{'default--overlay-open': isMainNavbarOpen}"
            @click="toggleNavigation"
        ></button>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import portfolio from "~/helpers/portfolio";
    export default {
        data() {
            return {
                portfolio
            };
        },
        mounted() {
            let nuxt = document.querySelector('#__nuxt');
            let layout = document.querySelector('#__layout');
            if (this.$route.name === 'index') {
                document.body.style.height = 'initial';
                nuxt.style.height = 'initial';
                layout.style.height = 'initial';
            }
        },
        methods: {
            toggleNavigation() {
                this.$store.dispatch('controls/togglePortfolioDrawer');
                if (!this.isMainNavbarOpen) {
                    this.addScroll();
                } else {
                    this.removeScroll();
                }
            },
            addScroll() {
                document.body.style.overflow = 'scroll';
            },
            removeScroll() {
                document.body.style.overflow = 'hidden';
            },
        },
        computed: {
            ...mapState({
                isMainNavbarOpen: state => state.controls.portfolioDrawer
            })
        },
        watch: {
            $route(to) {
                let nuxt = document.querySelector('#__nuxt');
                let layout = document.querySelector('#__layout');
                if (this.isMainNavbarOpen) {
                    this.toggleNavigation();
                }
                if (to.name === 'index') {
                    document.body.style.height = 'initial';
                    nuxt.style.height = 'initial';
                    layout.style.height = 'initial';
                }
                if (to.name !== 'index') {
                    document.body.style.height = '100%';
                    nuxt.style.height = '100%';
                    layout.style.height = '100%';
                }
            }
        },
    }
</script>
