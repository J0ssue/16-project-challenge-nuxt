<template>
    <div class="my-team">
        <header class="px-4 text-center lg:flex lg:flex-wrap lg:justify-between lg:relative lg:px-32 lg:text-left">
            <img
                class="my-team__hero-bg hidden lg:inline-block lg:absolute lg:left-0"
                src="/my-team/bg-pattern-home-desktop-1.png"
                alt="home background image"
            >
            <h1
                class="mb-4 home-heading-title livvic-bold text-white leading-none md:mt-20 lg:my-0"
                v-html="home.header.title"
            />
            <div class="my-team__header-description mx-auto mb-32 text-white paragraph md:mb-40 lg:flex lg:flex-col lg:justify-between lg:mb-0 lg:mx-0">
                <div class="hidden lg:block w-10 h-1 bg-myteam-rapture-blue"></div>
                <p>{{ home.header.description }}</p>
            </div>
            <div class="lg:w-full lg:mt-32">
                <img
                    class="mx-auto lg:mr-0"
                    src="/my-team/bg-pattern-home-2.svg"
                    alt="hero background img"
                >
            </div>
        </header>
        <main>
            <section class="my-team__benefits px-4 py-20 bg-myteam-sacramento-state-green md:px-20 md:py-24 lg:px-32 lg:flex lg:justify-between lg:py-32">
                <div>
                    <div class="w-12 h-1 mb-10 bg-myteam-light-coral"></div>
                    <h2
                        class="subheading mb-16 w-56 livvic-bold text-white leading-none md:w-100 lg:w-98"
                        v-text="home.benefits.title"
                    />
                </div>
                <div class="px-4 lg:px-0 lg:mt-10">
                    <myteam-benefits-card
                        :class="{
                            'mb-10': i !== 2 
                        }"
                        :options="{
                            title: benefit.title,
                            description: { show: true, description: benefit.description },
                            img: benefit.img
                        }"
                        v-for="(benefit, i) in home.benefits.benefits"
                        :key="i"
                    />
                </div>
            </section>
            <section class="my-team__testimonials bg-myteam-deep-jungle-green relative pb-20 pt-40 md:px-20 md:pt-24 lg:py-32 lg:px-32">
                <h2
                    class="mb-12 mx-auto livvic-bold subheading leading-none text-center text-white lg:mb-16"
                    v-html="home.testimonials.title"
                />
                <div class="px-4 md:px-0 lg:-mx-4 lg:flex">
                    <div
                        class="lg:px-4 lg:flex"
                        :class="{
                            'pb-16 lg:pb-0': i !== (home.testimonials.testimonials.length - 1)
                        }"
                        v-for="(testimonial, i) in home.testimonials.testimonials"
                        :key="i"
                    >
                        <myteam-testimonials-card
                            class="lg:flex lg:flex-col lg:h-full lg:justify-between"
                            :settings="{
                                icon: testimonial.img,
                                name: testimonial.name,
                                job: testimonial.job,
                                description: testimonial.description
                            }"
                        />
                    </div>
                </div>
                <img
                    class="hidden lg:inline-block lg:absolute lg:bottom-0 lg:right-0"
                    src="/my-team/bg-pattern-home-5.svg"
                    alt="background image bottom right"
                >
            </section>
        </main>
    </div>
</template>

<script>
    import db from "~/helpers/my-team-db";
    import MyteamBenefitsCard from "~/components/myteam/MyteamBenefitsCard";
    import MyteamTestimonialsCard from "~/components/myteam/MyteamTestimonialsCard";
    export default {
        head() {
            return {
                title: 'my-team',
            };
        },

        components: {
            MyteamBenefitsCard,
            MyteamTestimonialsCard
        },
        layout: 'my-team',
        data() {
            return {
                home: db.home
            };
        },
    }
</script>