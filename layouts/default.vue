<template>
    <div class="default">
        <button
            class="navbar__toggle focus:outline-none"
            @click="toggleNavigation"
        >other<br>projects</button>
        <nav
            class="navbar flex flex-col md:flex-row items-center px-12 uppercase p-10 bg-shortly-primary-violet rounded-lg text-shortly-neutral-gray"
            :class="{'navbar--open': isMainNavbarOpen}"
            role="navigation"
            aria-label="main navigation"
        >
            <button
                class="navbar__close-btn absolute bg-shortly-neutral-dark-violet hover:bg-shortly-neutral-gray-violet transition duration-300 ease-in-out px-3 text-sm rounded-lg py-1 focus:outline-none text-white"
                @click="toggleNavigation"
            >close</button>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/single-price-grid"
            >Single Price Grid</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/four-card-feature"
            >four card feature</nuxt-link> <span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/huddle"
            >huddle</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/base-apparel"
            >base apparel</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/sign-up-form"
            >Sign up form</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/monthly"
            >Monthly</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/shortly"
            >Shortly</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/jobs-listing"
            >Jobs listing</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/countries"
            >countries</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/easybank"
            >easybank</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/my-team"
            >my team</nuxt-link><span class="hidden lg:inline-block">|</span>
        </nav>
        <!-- <div> -->
        <div class="container mx-auto">
            <nuxt />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isMainNavbarOpen: false
            };
        },
        methods: {
            toggleNavigation() {
                this.isMainNavbarOpen = !this.isMainNavbarOpen;
            }
        },
        watch: {
            $route() {
                if (this.isMainNavbarOpen) {
                    this.toggleNavigation();
                }
            }
        },
    }
</script>
