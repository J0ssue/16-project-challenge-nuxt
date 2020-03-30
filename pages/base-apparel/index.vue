<template>
    <div class="base-apparel">
        <header>
            <h1 class="spg-card__title text-5xl mb-10 md:mb-32 text-blue-500 text-center">Base Apparel</h1>
        </header>
        <main class="base-apparel__main grid lg:grid-cols-5 lg:grid-rows-3">
            <header class="lg:row-span-1 lg:col-span-3">
                <nuxt-link
                    to="/"
                    class="p-8 lg:px-32 block"
                >
                    <img
                        src="~/assets/images/base-apparel/logo.svg"
                        alt="base apparel logo"
                    >
                </nuxt-link>
            </header>
            <section class="lg:row-span-3 lg:col-span-2">
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcset="~/assets/images/base-apparel/hero-desktop.jpg"
                    >
                    <img
                        class="w-full"
                        src="~/assets/images/base-apparel/hero-mobile.jpg"
                        alt="base apparel hero image"
                    >
                </picture>
            </section>
            <section class="base-apparel__content px-8 py-16 text-center lg:pt-0 lg:pr-64 lg:pl-32 lg:text-left lg:row-span-2 lg:col-span-3">
                <h2 class="text-3xl text-grayish-red uppercase tracking-xl-wide mb-4 leading-tight lg:text-6xl"><span class="font-hairline text-sat-red">We're</span> coming soon</h2>
                <p class="text-sm italic text-sat-red mb-10">{{ description }}</p>
                <form
                    @submit.prevent="submit"
                    class="base-apparel__form flex border border-sat-red rounded-full px-4 relative transition-all duration-150 ease"
                    :class="{'border-soft-red': !isEmailValid}"
                >
                    <input
                        @keyup="handleKeyup"
                        class="base-apparel__input placeholder-sat-red italic text-sm text-sat-red block w-full focus:outline-none"
                        type="email"
                        placeholder="Email Address"
                        v-model="email"
                    >
                    <img
                        class="base-apparel__error-icon opacity-0 transition-all duration-150 ease"
                        :class="{'opacity-100': !isEmailValid}"
                        src="~/assets/images/base-apparel/icon-error.svg"
                        alt="error icon"
                    >
                    <button
                        class="base-apparel__btn border-none px-6 rounded-full py-3 absolute focus:outline-none bg-transparent transition-all duration-150 ease"
                        :class="{'base-apparel__btn-disabled': !isEmailValid }"
                    ><img
                            src="~/assets/images/base-apparel/icon-arrow.svg"
                            alt="arrow icon"
                        ></button>
                </form>
                <span
                    class="text-sat-red text-left text-sm block ml-6 mt-3 opacity-0 transition-all duration-150 ease"
                    :class="{'opacity-100': !isEmailValid}"
                >{{ feedback }}</span>
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
                description: 'Hello fellow shoppers! We\'re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.',
                feedback: 'Please provide a valid email address'
            };
        },
        methods: {
            submit() {
                if (!this.validateEmail()) {
                    this.isEmailValid = false;
                } else {
                    alert('your email was successfully sent.');
                    this.email = '';
                }
            },
            handleKeyup() {
                if (this.validateEmail()) {
                    this.clearForm();
                }
            },
            clearForm() {
                this.isEmailValid = true;
            },
            validateEmail() {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email);
            }
        }
    }
</script>