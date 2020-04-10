<template>
    <div class="myteam-directors-card relative text-center text-white bg-myteam-sacramento-state-green py-8">
        <!-- visible card -->
        <div>
            <div class="mx-auto relative w-24 h-24 rounded-full border-2 border-myteam-rapture-blue mb-4">
                <img
                    class="w-full h-full rounded-full absolute top-0 left-0"
                    :src="settings.avatar"
                    alt="avatar"
                >
            </div>
            <p
                class="directors-name capitalize livvic-semibold text-myteam-rapture-blue"
                v-text="settings.name"
            />
            <p class="paragraph capitalize"><small>{{ settings.job }}</small></p>
        </div>
        <!-- popup card -->
        <div class="myteam-directors-card__popup absolute w-full h-full top-0 left-0 overflow-hidden">
            <div
                class="myteam-directors-card__popup-inner bg-myteam-dark-green w-full h-full py-8 px-16"
                :class="{
                    'slide-up': activeScreen === settings.slug,
                    'slide-down-card': activeScreen !== settings.slug,
                }"
            >
                <p
                    class="directors-name mb-3 capitalize livvic-semibold text-myteam-rapture-blue"
                    v-text="settings.name"
                />
                <p class="mb-6 paragraph livvic-semibold"><small>{{ settings.back }}</small></p>
                <div class="flex items-center justify-center">
                    <a
                        class="mr-2"
                        :href="settings.fb"
                        target="_blank"
                    >
                        <div v-html="db.icons.twitter"></div>
                        <!-- <img
                            :src="settings.twIcon"
                            alt="social icon"
                        > -->
                    </a>
                    <a
                        class="ml-2"
                        :href="settings.in"
                        target="_blank"
                    >
                        <div v-html="db.icons.instagram"></div>
                        <!-- <img
                            :src="settings.inIcon"
                            alt="social icon"
                        > -->
                    </a>
                </div>
            </div>
        </div>
        <button
            class="myteam-directors-card__plus-icon bg-myteam-light-coral w-plus-icon h-plus-icon flex items-center justify-center rounded-full absolute transition duration-300 ease-in-out focus:outline-none"
            :class="{
                'fade-in-btn hover:bg-myteam-rapture-blue': activeScreen !== settings.slug,
                'fade-out-btn hover:bg-transparent': activeScreen === settings.slug,
            }"
            @click="togglePopup"
        >
            <img
                src="/my-team/icon-cross.svg"
                alt="cross icon"
            >
        </button>
        <button
            class="myteam-directors-card__close-icon bg-myteam-rapture-blue w-plus-icon h-plus-icon flex items-center justify-center rounded-full absolute transition duration-300 ease-in-out focus:outline-none"
            :class="{
                'fade-in-btn hover:bg-myteam-light-coral': activeScreen === settings.slug,
                'fade-out-btn hover:bg-transparent': activeScreen !== settings.slug,
            }"
            @click="closePopup"
        >
            <img
                src="/my-team/icon-close-dark.svg"
                alt="cross icon"
            >
        </button>
    </div>
</template>

<script>
    import db from "~/helpers/my-team-db";
    import IconDynamic from "~/components/IconDynamic";
    export default {
        components: {
            IconDynamic
        },
        props: {
            settings: {
                type: Object
            },
            activeScreen: {
                type: String
            }
        },
        data() {
            return {
                db
            };
        },
        methods: {
            togglePopup() {
                this.$emit('togglePopup', this.settings.slug);
            },
            closePopup() {
                this.$emit('closePopup');
            }
        },
    }
</script>