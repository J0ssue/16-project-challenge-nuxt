<template>
    <div class="myteam-about">
        <header class="relative text-white pb-32 pt-12 px-4 text-center md:px-32 md:flex md:text-left">
            <h1
                class="mb-4 text-4xl capitalize livvic-semibold md:text-6xl"
                v-text="about.title"
            />
            <div class="myteam-about__header-description md:mx-auto md:mr-0">
                <div class="hidden w-10 h-1 bg-myteam-light-coral md:block md:mb-8"></div>
                <p
                    class="paragraph"
                    v-text="about.description"
                />
            </div>
            <picture>
                <source
                    media="(min-width: 768px)"
                    srcset="/my-team/bg-pattern-about-1-desktop.png"
                >
                <img
                    class="absolute right-0 bottom-0"
                    src="/my-team/bg-pattern-about-1-mobile-corner.png"
                    alt="corner background image"
                >
            </picture>
        </header>
        <main>
            <section class="relative bg-myteam-deep-jungle-green overflow-y-hidden px-4 pt-20 pb-32 md:px-32">
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcset="/my-team/bg-pattern-about-2-contact-desktop.png"
                    >
                    <img
                        class="myteam-about__bg-top"
                        src="/my-team/bg-pattern-about-2-contact-mobile.png"
                        alt="about background image top"
                    >
                </picture>
                <h2
                    class="mb-10 livvic-semibold text-white text-center subheading"
                    v-text="about.directors.title"
                />
                <div class="flex flex-wrap md:-mx-2">
                    <div
                        class="md:w-2/4 md:px-2 lg:w-1/3"
                        :class="{
                            'pb-16': i !== (about.directors.directors.length - 1)
                        }"
                        v-for="(director, i) in about.directors.directors"
                        :key="i"
                    >
                        <myteam-directors-card
                            :settings="{
                                slug: director.slug,
                                fb: director.fb,
                                in: director.in,
                                avatar: director.avatar,
                                name: director.name,
                                back: director.back,
                                job: director.job,
                                closeIcon: about.directors.closeIcon,
                                plusIcon: about.directors.plusIcon,
                                twIcon: about.directors.twIcon,
                                inIcon: about.directors.inIcon,
                            }"
                            :activeScreen="activeScreen"
                            @togglePopup="togglePopup"
                            @closePopup="closePopup"
                        />
                    </div>
                </div>
                <img
                    class="absolute bottom-0 right-0"
                    src="/my-team/bg-pattern-home-4-about-3.svg"
                    alt="background image bottom"
                >
            </section>
            <section class="py-32 px-4 bg-myteam-sacramento-state-green relative md:px-10 lg:px-32">
                <picture>
                    <source
                        media="(min-width: 1280px)"
                        srcset="/my-team/bg-pattern-about-4.svg"
                    >
                    <source
                        media="(min-width: 768px)"
                        srcset="/my-team/bg-pattern-home-3-desktop.png"
                    >
                    <img
                        class="absolute top-0 left-0"
                        src="/my-team/bg-pattern-about-4-mobile.png"
                        alt="background image top"
                    >
                </picture>
                <h2
                    class="mb-16 subheading capitalize text-white livvic-semibold text-center"
                    v-text="about.clients.title"
                />
                <div class="flex flex-col items-center md:flex-row md:justify-between">
                    <div
                        :class="{
                            'pb-16 md:pb-0': i !== (about.clients.clients.length - 1)
                        }"
                        v-for="(client, i) in about.clients.clients"
                        :key="i"
                    >
                        <img
                            :class="{ [`${about.clients.classNames[i]}`]: about.clients.classNames[i].length > 0 }"
                            :src="client"
                            alt="client image"
                        >
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import db from "~/helpers/my-team-db";
    import MyteamDirectorsCard from "~/components/myteam/MyteamDirectorsCard";
    export default {
        layout: 'my-team',
        components: {
            MyteamDirectorsCard
        },
        data() {
            return {
                activeScreen: '',
                about: db.about
            };
        },
        methods: {
            togglePopup(active) {
                this.activeScreen = active;
            },
            closePopup() {
                this.activeScreen = '';
            }
        },
    }
</script>