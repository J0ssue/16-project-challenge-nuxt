<template>
    <div class="myteam-contact pt-10 pb-32 relative lg:flex lg:items-end">
        <header class="text-white px-4 relative md:px-32 lg:pr-0 lg:w-2/4">
            <img
                class="absolute top-0 left-0"
                src="/my-team/bg-pattern-about-2-contact-desktop.png"
                alt="background top"
            >
            <h1
                class="mb-2 subheading capitalize livvic-bold text-center md:mb-0 md:leading-none lg:text-left"
                v-text="contact.title"
            />
            <p
                class="text-myteam-light-coral mb-8 text-3xl md:text-4xl livvic-semibold text-center md:mb-16 lg:text-left"
                v-text="contact.description"
            />
            <div>
                <div
                    class="mb-8 flex items-center justify-between md:justify-start"
                    v-for="(sugestion, i) in contact.sugestions"
                    :key="i"
                >
                    <img
                        :src="sugestion.icon"
                        alt="sugestion icon"
                    >
                    <p
                        class="contact-sugestion pl-4"
                        v-text="sugestion.description"
                    />
                </div>
            </div>
        </header>
        <section class="px-4 md:px-32 lg:w-2/4 lg:pl-0">
            <form @submit.prevent="submit">
                <div class="myteam-contact__fieldset relative bg-transparent relative border-b border-white white-transparent">
                    <input
                        id="input-name"
                        class="myteam-contact__input bg-transparent block w-full h-full border-none focus:outline-none"
                        type="text"
                    >
                    <label
                        class="myteam-contact__label absolute"
                        for="input-name"
                    >Name</label>
                </div>
                <!--  -->
                <div class="myteam-contact__fieldset relative bg-transparent relative border-b border-white white-transparent">
                    <input
                        id="input-email"
                        class="myteam-contact__input bg-transparent block w-full h-full border-none focus:outline-none"
                        type="text"
                    >
                    <label
                        class="myteam-contact__label absolute"
                        for="input-email"
                    >Email Address</label>
                </div>
                <!--  -->
                <div class="myteam-contact__fieldset relative bg-transparent relative border-b border-white white-transparent">
                    <input
                        id="input-company"
                        class="myteam-contact__input bg-transparent block w-full h-full border-none focus:outline-none"
                        type="text"
                    >
                    <label
                        class="myteam-contact__label absolute"
                        for="input-company"
                    >Company Name</label>
                </div>
                <!--  -->
                <div class="myteam-contact__fieldset relative bg-transparent relative border-b border-white white-transparent">
                    <input
                        id="input-title"
                        class="myteam-contact__input bg-transparent block w-full h-full border-none focus:outline-none"
                        type="text"
                    >
                    <label
                        class="myteam-contact__label absolute"
                        for="input-title"
                    >Title</label>
                </div>
                <!--  -->
                <div class="myteam-contact__fieldset-area relative bg-transparent relative border-b border-white white-transparent">
                    <textarea
                        id="input-message"
                        class="myteam-contact__textarea bg-transparent block w-full h-full border-none focus:outline-none"
                        @input="resizeTextArea"
                    ></textarea>
                    <label
                        class="myteam-contact__label absolute"
                        for="input-message"
                    >Message</label>
                </div>
                <button
                    class="text-myteam-sacramento-state-green px-6 py-2 bg-white rounded-full livvic-semibold focus:outline-none"
                    type="submit"
                    v-text="'submit'"
                />
            </form>
        </section>
        <picture>
            <source
                media="(min-width: 768px)"
                srcset="/my-team/bg-pattern-contact-2.png"
            >
            <img
                class="absolute right-0 bottom-0"
                src="/my-team/bg-pattern-contact-2-mobile.png"
                alt="contact background bottom"
            >
        </picture>
    </div>
</template>

<script>
    import db from "~/helpers/my-team-db";
    import MyteamBenefitsCard from "~/components/myteam/MyteamBenefitsCard";
    export default {
        layout: 'my-team',
        data() {
            return {
                contact: db.contact
            };
        },
        methods: {
            resizeTextArea(event) {
                event.target.style.height = "";
                event.target.style.height = event.target.scrollHeight + 3 + "px";
            },
            submit() {
                console.log('hello world');
            }
        },
    }
</script>