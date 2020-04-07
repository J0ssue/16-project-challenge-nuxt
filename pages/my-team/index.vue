<template>
    <div class="my-team">
        <header class="px-4 text-center">
            <h1
                class="mb-4 home-heading-title livvic-bold text-white leading-none"
                v-html="home.header.title"
            />
            <p
                class="my-team__header-description mx-auto mb-32 text-white paragraph"
                v-text="home.header.description"
            />
            <img
                src="/my-team/bg-pattern-home-2.svg"
                alt="hero background img"
            >
        </header>
        <main>
            <section class="my-team__benefits px-4 py-20 bg-myteam-deep-jungle-green">
                <div class="w-12 h-1 mb-10 bg-myteam-light-coral"></div>
                <h2
                    class="subheading mb-16 w-56 livvic-bold text-white leading-none"
                    v-text="home.benefits.title"
                />
                <div class="px-4">
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
            <section class="my-team__testimonials pb-20 pt-40">
                <h2
                    class="mb-12 mx-auto livvic-bold subheading leading-none text-center text-white"
                    v-html="home.testimonials.title"
                />
                <div class="px-4">
                    <div
                        :class="{
                            'pb-16': i !== (home.testimonials.testimonials.length - 1)
                        }"
                        v-for="(testimonial, i) in home.testimonials.testimonials"
                        :key="i"
                    >
                        <myteam-testimonials-card :settings="{
                                icon: testimonial.img,
                                name: testimonial.name,
                                job: testimonial.job,
                                description: testimonial.description
                            }" />
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import db from "~/helpers/my-team-db";
    import MyteamBenefitsCard from "~/components/myteam/MyteamBenefitsCard";
    import MyteamTestimonialsCard from "~/components/myteam/MyteamTestimonialsCard";
    export default {
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