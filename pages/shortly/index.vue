<template>
    <div class="shortly">
        <header>
            <h1 class="spg-card__title text-5xl mb-10 md:mb-24 text-blue-500 text-center">Shortly</h1>
        </header>
        <main class="shortly__main">
            <nav class="shortly__navbar">
                <nuxt-link to="#">
                    <img
                        src="~/assets/images/shortly/logo.svg"
                        alt="shortly-logo"
                    >
                </nuxt-link>
                <button>
                    <div class="shortly__bar"></div>
                    <div class="shortly__bar"></div>
                    <div class="shortly__bar"></div>
                </button>
            </nav>
            <header class="shortly__header-hero">
                <img
                    src="~/assets/images/shortly/illustration-working.svg"
                    alt="hero illustration"
                >
                <div>
                    <h1 v-html="title"></h1>
                    <p>{{ description }}</p>
                    <button>get started</button>
                </div>
            </header>
            <url-shortener />
            <statistics-display />
            <section class="shortly__cta">
                <p>Boost your links today</p>
                <button>get started</button>
            </section>
            <shortly-footer />
        </main>
    </div>
</template>

<script>
    import UrlShortener from "~/components/UrlShortener";
    import StatisticsDisplay from "~/components/StatisticsDisplay";
    import ShortlyFooter from "~/components/ShortlyFooter";
    export default {
        components: {
            UrlShortener,
            StatisticsDisplay,
            ShortlyFooter
        },
        data() {
            return {
                title: 'More than just <br> shorter links',
                description: 'Build your brand\'s recognition and get detail insights on how your links are performing.',
            };
        },
    }
</script>