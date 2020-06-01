<template>
    <div class="sign-up-form md:pt-16">
        <main class="sign-up-form__main flex flex-col relative px-6 py-24 text-white text-xl lg:flex-row lg:items-center lg:px-32">
            <!-- background image -->
            <div class="sign-up-form__bg absolute top-0 left-0 w-full h-full">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcset="~/assets/images/sign-up-form/bg-intro-desktop.png"
                    >
                    <img
                        class="absolute top-0 left-0 w-full h-full"
                        src="~/assets/images/sign-up-form/bg-intro-mobile.png"
                        alt="Flowers"
                    >
                </picture>
            </div>

            <!-- text section -->
            <header class="sign-up-form__header text-center leading-tight relative lg:w-2/4 lg:text-left lg:pr-10 lg:pt-32">
                <h2 class="font-bold text-3xl mb-4 lg:text-5xl">{{ title }}</h2>
                <p class="text-md mb-16 lg:text-sm">{{ description }}</p>
            </header>

            <!-- form section -->
            <section class="sign-up-form__form-container relative lg:w-2/4">
                <nuxt-link
                    class="sign-up-form__btn-purp bg-form-blue block text-center text-sm rounded-md py-4 mb-6"
                    to="#"
                    v-html="linkPurple"
                ></nuxt-link>
                <form
                    @submit.prevent="submit"
                    class="sign-up-form__form p-6 block bg-white rounded-md"
                >
                    <div
                        class="sign-up-form__form-field relative"
                        v-for="(field, i) in Object.keys(this.form)"
                        :key="i"
                    >
                        <input
                            @keyup="clearError(field)"
                            class="block w-full px-4 py-3 text-sm text-gray-700 font-semibold placeholder-gray-700 focus:outline-none border-gray-300 rounded-md transition-all duration-300 ease-form-input"
                            :class="{
                                'focus:border-form-blue': !hasError(field),
                                'border-form-red': hasError(field),
                                'border': !hasError(field),
                                'border-2': hasError(field)
                            }"
                            type="text"
                            :placeholder="setPlaceholder(field)"
                            v-model="form[field]"
                        >
                        <img
                            class="sign-up-form__error-icon absolute"
                            src="~/assets/images/base-apparel/icon-error.svg"
                            alt="error icon"
                            v-show="hasError(field)"
                        >
                        <div
                            class="text-form-red text-xs text-right"
                            v-show="hasError(field)"
                        >{{ errorMessage[field] }}</div>
                    </div>
                    <button
                        type="submit"
                        class="sign-up-form__btn block w-full uppercase text-sm bg-form-green py-4 mb-4 rounded-md focus:outline-none"
                    >claim your free trial</button>
                    <p class="text-xs text-center text-gray-500">By clicking the button, you are agreeing to <br> our <nuxt-link
                            class="text-form-red font-bold"
                            to="#"
                        >Terms of Service</nuxt-link>
                    </p>
                </form>
            </section>
        </main>
    </div>
</template>

<script>
    import formMixin from "~/mixins/formMixin";
    export default {
        head() {
            return {
                title: 'sign-up-form',
            };
        },
        mixins: [formMixin],
        data() {
            return {
                title: 'Learn to code by watching others',
                description: 'See how experienced developers solve problems in real time. Watching scripted tutorials is great, but understanding how developers think is invaluable.',
                linkPurple: '<b>Try it free 7 days</b> <br class="remove-br"> then $20/mo. thereafter',
                errorMessage: {
                    name: 'First Name cannot be empty',
                    last: 'Last Name cannot be empty',
                    email: 'Looks like this is not an email',
                    password: 'Password cannot be empty & must be 4 characters or greater'
                }
            };
        },
    }
</script>