<template>
    <div class="base-apparel">
        <header>
            <h1 class="spg-card__title text-5xl mb-10 md:mb-32 text-blue-500 text-center">Base Apparel</h1>
        </header>
        <main class="base-apparel__main">
            <header>
                <nuxt-link
                    to="/"
                    class="p-8 block"
                >
                    <img
                        src="~/assets/images/base-apparel/logo.svg"
                        alt="base apparel logo"
                    >
                </nuxt-link>
            </header>
            <section>
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcset="~/assets/images/base-apparel/hero-desktop.jpg"
                    >
                    <img
                        src="~/assets/images/base-apparel/hero-mobile.jpg"
                        alt="base apparel hero image"
                    >
                </picture>
            </section>
            <section class="px-8 py-16 text-center">
                <h2 class="text-3xl text-grayish-red uppercase tracking-xl-wide mb-4 leading-tight"><span class="font-hairline text-sat-red">We're</span> coming soon</h2>
                <p class="text-sm italic text-sat-red mb-10">{{ description }}</p>
                <form
                    @submit.prevent="submit"
                    class="base-apparel__form flex border border-sat-red rounded-full px-4 relative"
                >
                    <input
                        class="base-apparel__input placeholder-sat-red italic text-sm text-sat-red block w-full focus:outline-none"
                        type="email"
                        placeholder="Email Address"
                        v-model="email"
                    >
                    <img
                        class="base-apparel__error-icon opacity-0"
                        :class="{'opacity-100': !isEmailValid}"
                        src="~/assets/images/base-apparel/icon-error.svg"
                        alt="error icon"
                    >
                    <button class="base-apparel__btn border-none px-5 rounded-full py-2 absolute focus:outline-none"><img
                            :class="{'base-apparel__btn-disabled': !isEmailValid}"
                            src="~/assets/images/base-apparel/icon-arrow.svg"
                            alt="arrow icon"
                        ></button>
                </form>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isEmailValid: true,
                email: '',
                description: 'Hello fellow shoppers! We\'re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.'
            };
        },
        methods: {
            submit() {
                if (!this.validateEmail()) {

                } else {
                    alert('your email was successfully sent.');
                }
            },
            validateEmail() {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email);
            }
        }
    }
</script>