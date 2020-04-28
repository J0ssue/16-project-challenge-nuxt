<template>
    <div class="manage-landing text-base be-nam-light">
        <div class="manage-overlay hidden"></div>
        <!-- navbar -->
        <header class="manage-landing__header related">
            <nav class="manage-landing__navbar flex items-center justify-between px-4 py-10 lg:mb-12">
                <div>
                    <img
                        class="manage-landing__logo"
                        :src="manage.navbar.logo"
                        alt="brand logo"
                    >
                </div>

                <!-- desktop only -->
                <div class="hidden lg:flex lg:flex-1 lg:justify-around lg:justify-center">
                    <nuxt-link
                        class="inline-block text-sm text-manage-dark-blue"
                        :class="{'mr-10': i !== (manage.navbar.menu.length -1)}"
                        to="#"
                        v-for="(link, i) in manage.navbar.menu"
                        :key="i"
                    >{{ link }}</nuxt-link>
                </div>
                <manage-button-primary
                    class="hidden lg:block"
                    :settings="{
                    text: 'primary',
                    primary: true,
                    secondary: false
                }"
                />
                <!-- desktop only end -->
                <button class="lg:hidden">
                    <img
                        src="/manage-landing/icon-hamburger.svg"
                        alt="hamburger image"
                    >
                </button>
            </nav>
            <!-- header -->
            <div class="manage-landing__hero px-4 pt-6 pb-40 flex flex-col-reverse md:items-center lg:pb-20 lg:flex-row lg:justify-between">
                <div class="md:w-2/4">
                    <div>
                        <h1
                            class="manage-landing__hero-title text-manage-dark-blue mb-4 text-4xl be-nam-bold leading-tight text-center md:text-left md:text-5xl"
                            v-text="manage.header.title"
                        />
                        <p
                            class="manage-landing__hero-description mx-auto mb-8 text-manage-dark-grayish-blue md:ml-0"
                            v-text="manage.header.description"
                        />
                        <manage-button-primary
                            class="mx-auto block md:ml-0"
                            :settings="{
                                text: 'primary',
                                primary: true,
                                shadow: true,
                                secondary: false
                            }"
                        />
                    </div>
                </div>
                <div class="md:w-2/4">
                    <div class="md:flex md:justify-end">
                        <img
                            src="/manage-landing/illustration-intro.svg"
                            alt="hero image"
                        >
                    </div>
                </div>
            </div>
        </header>
        <main>
            <!-- about us -->
            <section class="manage-landing__about-us lg:px-4 md:flex md:flex-col md:items-center lg:flex-row lg:items-baseline">
                <div class="text-center mb-16 lg:text-left lg:w-2/4">
                    <div class="manage-landing__about-header">
                        <h2
                            class="mb-8 text-3xl be-nam-bold text-manage-dark-blue lg:text-4xl"
                            v-html="manage['about-us'].title"
                        />
                        <p
                            class="manage-landing__about-header-description text-manage-dark-grayish-blue"
                            v-text="manage['about-us'].description"
                        />
                    </div>
                </div>
                <div class="pl-4 rounded-l-full lg:w-2/4">
                    <div
                        class="manage-landing__about-cards mb-16"
                        v-for="(point, i) in manage['about-us'].points"
                        :key="i"
                    >
                        <manage-about-us-card :settings="{
                            slug: point.slug,
                            title: point.title,
                            description: point.description
                        }">
                            <template slot="button-mobile-display">
                                <manage-button-primary
                                    class="lg:hidden"
                                    :settings="{
                                    text: '0' + (i + 1),
                                    primary: true,
                                    secondary: false
                                }"
                                />
                            </template>
                            <template slot="button-desktop-display">
                                <manage-button-primary
                                    class="hidden lg:block"
                                    :settings="{
                                    text: '0' + (i + 1),
                                    primary: true,
                                    secondary: false
                                }"
                                />
                            </template>
                        </manage-about-us-card>
                    </div>
                </div>
            </section>
            <!-- testimonials -->
            <section class="manage-landing__testimonials px-4 overflow-hidden">
                <h2
                    class="mb-16 text-3xl be-nam-bold text-manage-dark-blue text-center"
                    v-text="manage.testimonials.title"
                />
                <div class="mb-16">
                    <VueSlickCarousel v-bind="carouselSettings">
                        <div
                            class="manage-landing__slide pt-20 mb-8"
                            v-for="(review,i) in manage.testimonials.reviews"
                            :key="i"
                        >
                            <manage-testimonial-card :settings="{
                                slug: review.slug,
                                img: review.image,
                                title: review.name,
                                review: review.review
                            }" />
                        </div>
                        <template #customPaging="page">
                            <div
                                class="manage-landing__custom-dot"
                                :class="{'manage-landing--active-dot': page === i}"
                            >
                            </div>
                        </template>
                    </VueSlickCarousel>
                </div>
                <manage-button-primary
                    class="mx-auto block mb-10"
                    :settings="{
                    text: 'primary',
                    primary: true,
                    secondary: false
                }"
                />
            </section>
            <!-- cta -->
            <section class="manage-landing__cta px-8 py-20 bg-manage-bright-red lg:flex lg:items-center lg:justify-between lg:px-20">
                <div>
                    <h2
                        class="text-white text-center manage-cta-title mb-8 lg:w-3/4 lg:text-left"
                        v-text="manage.cta.title"
                    />
                </div>
                <div>
                    <manage-button-primary
                        class="mx-auto block"
                        :settings="{
                        text: 'Get Started',
                        primary: false,
                        secondary: true,
                        shadowSecondary: true
                    }"
                    />
                </div>
            </section>
        </main>
        <!-- footer -->
        <footer class="manage-landing__footer bg-manage-darker-blue px-8 py-12 lg:px-20">
            <div class="lg:flex lg:justify-between lg:flex-row-reverse">
                <div class="lg:self-stretch lg:flex lg:flex-col lg:justify-between lg:pl-10 xl:pl-32">
                    <form
                        class="flex items-center justify-between"
                        @submit.prevent="submit"
                    >
                        <input
                            class="border-none inline-block bg-white px-8 py-3 rounded-full text-xs focus:outline-none lg:mr-2"
                            type="text"
                            placeholder="Updates in your inbox..."
                        >
                        <manage-button-primary
                            class="inline-block"
                            :settings="{
                                text: 'go',
                                primary: true,
                                secondary:false,
                                small:true
                            }"
                        />
                    </form>

                    <p
                        class="hidden text-sm text-center text-manage-dark-grayish-blue lg:block"
                        v-text="manage.footer.copyright"
                    />
                </div>
                <div class="my-10 flex justify-between text-white lg:my-0 lg:flex-1">
                    <ul>
                        <li
                            v-for="(link, i) in manage.footer.menu"
                            :key="i"
                        >
                            <nuxt-link
                                class="inline-block mb-2"
                                :to="'#' + link"
                            >{{ link }}</nuxt-link>
                        </li>
                    </ul>
                    <ul>
                        <li
                            v-for="(legal, i) in manage.footer.legal"
                            :key="i"
                        >
                            <nuxt-link
                                class="inline-block mb-2"
                                :to="'#' + legal"
                            >{{ legal }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="lg:self-stretch">
                    <div class="lg:flex lg:flex-col-reverse lg:justify-between lg:h-full lg:pr-10 xl:pr-32">
                        <div class="flex items-center justify-between mb-10 lg:mb-0">
                            <div
                                v-for="(social, i) in manage.footer.social"
                                :key="i"
                            >
                                <a
                                    href="#"
                                    v-html="social.icon"
                                />
                            </div>
                        </div>
                        <div class="mb-10 lg:mb-0">
                            <img
                                class="block mx-auto"
                                :src="manage.footer.logo"
                                alt="footer logo"
                            >
                        </div>
                        <div class="lg:hidden">
                            <p
                                class="text-sm text-center text-manage-dark-grayish-blue"
                                v-text="manage.footer.copyright"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import manage from '~/helpers/manageDb';
    import ManageAboutUsCard from "~/components/manage-landing/ManageAboutUsCard";
    import ManageButtonPrimary from "~/components/manage-landing/ManageButtonPrimary";
    import ManageTestimonialCard from "~/components/manage-landing/ManageTestimonialCard";
    export default {
        // <link  >
        layout: 'default',
        components: {
            ManageAboutUsCard,
            ManageTestimonialCard,
            ManageButtonPrimary
        },
        head() {
            return {
                link: [
                    {
                        href: "https://fonts.googleapis.com/css2?family=Be+Vietnam:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap",
                        rel: "stylesheet"
                    }
                ]
            };
        },
        data() {
            return {
                manage,
                carouselSettings: {
                    "dots": true,
                    "focusOnSelect": false,
                    "infinite": true,
                    "speed": 500,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "touchThreshold": 5,
                    "variableWidth": true,
                    "arrows": false,
                    "responsive": [
                        {
                            "breakpoint": 768,
                            "settings": {
                                "slidesToShow": 3
                            }
                        }
                    ]
                }
            };
        },
        methods: {
            submit() {
                alert('submitted');
            }
        },
    }
</script>