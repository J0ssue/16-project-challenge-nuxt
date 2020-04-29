<template>
    <div class="shortly">
        <!-- actual site -->
        <main class="shortly__main relative">
            <shortly-dropdown
                :isDropdownOpen="isDropdownOpen"
                @toggleDropdown="toggleDropdown"
            />
            <!-- navbar -->
            <nav class="shortly__navbar px-4 py-6 flex justify-between items-center lg:mb-16">
                <div class="shortly__navbar-left lg:flex lg:items-center capitalize">
                    <nuxt-link
                        to="/"
                        class="block mr-10"
                    >
                        <img
                            src="~/assets/images/shortly/logo.svg"
                            alt="shortly-logo"
                        >
                    </nuxt-link>
                    <div class="hidden lg:flex lg:items-center text-shortly-neutral-gray">
                        <nuxt-link
                            to="#"
                            class="mr-6 transition duration-300 ease-in-out hover:text-black"
                        >features</nuxt-link>
                        <nuxt-link
                            to="#"
                            class="mr-6 transition duration-300 ease-in-out hover:text-black"
                        >pricing</nuxt-link>
                        <nuxt-link
                            to="#"
                            class="mr-6 transition duration-300 ease-in-out hover:text-black"
                        >resources</nuxt-link>
                    </div>
                </div>
                <div class="shortly__navbar-right hidden lg:flex items-center">
                    <nuxt-link
                        to="#"
                        class="inline-block mr-6 text-shortly-neutral-gray capitalize transition duration-300 ease-in-out hover:text-black"
                    >login</nuxt-link>
                    <button class="shortly-primary-btn">sign up</button>
                </div>
                <button
                    class="block lg:hidden focus:outline-none"
                    @click="toggleDropdown"
                >
                    <div class="shortly__bar burger-bar"></div>
                    <div class="shortly__bar burger-bar"></div>
                    <div class="shortly__bar burger-bar"></div>
                </button>
            </nav>
            <!-- hero -->
            <header class="shortly__header-hero lg:flex lg:items-center lg:px-4">
                <img
                    class="shortly__illustration-img mb-10 lg:w-2/4 lg:mb-0 lg:order-1"
                    src="~/assets/images/shortly/illustration-working.svg"
                    alt="hero illustration"
                >
                <div class="lg:w-2/4">
                    <h1
                        v-html="title"
                        class="text-4xl font-bold text-center leading-tight mb-4 lg:text-6xl lg:text-left"
                    ></h1>
                    <p class="text-shortly-neutral-gray text-center px-4 mb-10 lg:text-left">{{ description }}</p>
                    <button class="shortly-primary-btn mx-auto lg:ml-0">get started</button>
                </div>
            </header>
            <!-- section -->
            <section class="px-4 mb-16 bg-gray-200 lg:mb-0 lg:pb-40">
                <url-shortener />
                <statistics-display />
            </section>
            <!-- section -->
            <section class="shortly__cta bg-shortly-primary-violet py-24">
                <p class="text-white text-2xl font-bold text-center mb-2 lg:text-4xl">Boost your links today</p>
                <button class="shortly-primary-btn mx-auto">get started</button>
            </section>
            <!-- footer -->
            <shortly-footer />
        </main>
    </div>
</template>

<script>
    import UrlShortener from "~/components/UrlShortener";
    import StatisticsDisplay from "~/components/StatisticsDisplay";
    import ShortlyFooter from "~/components/ShortlyFooter";
    import ShortlyDropdown from "~/components/ShortlyDropdown";
    export default {
        head() {
            return {
                title: 'shortly',
            };
        },
        components: {
            UrlShortener,
            StatisticsDisplay,
            ShortlyFooter,
            ShortlyDropdown
        },
        data() {
            return {
                isDropdownOpen: false,
                title: 'More than just <br> shorter links',
                description: 'Build your brand\'s recognition and get detail insights on how your links are performing.',
            };
        },
        methods: {
            toggleDropdown() {
                this.isDropdownOpen = !this.isDropdownOpen;
            }
        },
    }
</script>