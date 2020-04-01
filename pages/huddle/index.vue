<template>
    <div class="huddle">
        <header>
            <h1 class="spg-card__title mb-10 md:mb-32 text-blue-500 text-center font-bold uppercase text-2xl">Huddle</h1>
        </header>
        <main class="huddle__main bg-huddle-primary px-8 py-10 flex-wrap items-center lg:px-16 lg:flex">
            <header class="w-full">
                <div class="huddle__logo">
                    <img
                        class="w-40 mb-16"
                        src="~/assets/images/huddle/logo.svg"
                        alt="huddle logo"
                    >
                </div>
            </header>
            <section class="huddle__hero mb-16 lg:w-2/4">
                <img
                    src="~/assets/images/huddle/illustration-mockups.svg"
                    alt="hero illustration"
                >
            </section>
            <section class="huddle__content text-center text-white lg:w-2/4 lg:text-left lg:pl-12">
                <h2 class="text-2xl font-bold capitalize mb-6">{{ title }}</h2>
                <p class="text-sm font-light">{{ description }}</p>
                <nuxt-link
                    to="/sign-up-form"
                    class="huddle__button mt-10 mb-16 focus:outline-none bg-white text-huddle-primary text-center block w-64 mx-auto rounded-full capitalize font-light py-2 shadow-xl lg:w-40 lg:ml-0 transition-all duration-150 ease hover:bg-purple-300"
                >register</nuxt-link>
            </section>
            <div class="huddle__social flex items-center justify-center w-full lg:justify-end">
                <a
                    :href="icon.link"
                    target="_blank"
                    class="huddle__icon border border-white rounded-full w-8 h-8 flex items-center justify-center transition-transform duration-150 ease transform hover:scale-110"
                    :class="{'mx-2': i === 1}"
                    v-for="(icon,i) in icons"
                    :key="i"
                >
                    <img
                        class="w-2"
                        :src="icon.img"
                        alt="facebook icon"
                    >
                </a>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'build the community your fans will love',
                description: 'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.',
                icons: [
                    {
                        link: 'http://www.facebook.com',
                        img: require("~/assets/images/huddle/facebook-f-brands.svg")
                    },
                    {
                        link: 'http://www.twitter.com',
                        img: require("~/assets/images/huddle/twitter-brands.svg"),
                    },
                    {
                        link: 'http://www.instagram.com',
                        img: require("~/assets/images/huddle/instagram-brands.svg")
                    }
                ]
            };
        },
    }
</script>