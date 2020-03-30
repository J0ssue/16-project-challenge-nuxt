<template>
    <div class="huddle">
        <header>
            <h1 class="spg-card__title text-5xl mb-10 md:mb-32 text-blue-500 text-center">Huddle</h1>
        </header>
        <main class="huddle__main bg-huddle-primary px-8 py-10">
            <header>
                <div class="huddle__logo">
                    <img
                        class="w-40 mb-16"
                        src="~/assets/images/huddle/logo.svg"
                        alt="huddle logo"
                    >
                </div>
            </header>
            <section class="huddle__hero mb-16">
                <img
                    src="~/assets/images/huddle/illustration-mockups.svg"
                    alt="hero illustration"
                >
            </section>
            <section class="huddle__content text-center text-white">
                <h2 class="text-2xl capitalize mb-6">{{ title }}</h2>
                <p class="text-sm font-light">{{ description }}</p>
            </section>
            <button class="huddle__button mt-10 mb-16 focus:outline-none bg-white text-huddle-primary text-center block w-64 mx-auto rounded-full capitalize font-light py-2 shadow-xl">register</button>
            <div class="huddle__social flex items-center justify-center">
                <div
                    class="huddle__icon border border-white rounded-full w-8 h-8 flex items-center justify-center"
                    :class="{'mx-2': i === 1}"
                    v-for="(icon,i) in icons"
                    :key="i"
                >
                    <img
                        class="w-2"
                        :src="icon"
                        alt="facebook icon"
                    >
                </div>
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
                    require("~/assets/images/huddle/facebook-f-brands.svg"),
                    require("~/assets/images/huddle/twitter-brands.svg"),
                    require("~/assets/images/huddle/instagram-brands.svg")
                ]
            };
        },
    }
</script>