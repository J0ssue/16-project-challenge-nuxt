<template>
    <div class="manage-landing text-base be-nam-light">
        <div class="manage-overlay hidden"></div>
        <!-- navbar -->
        <header class="manage-landing__header related">
            <nav class="manage-landing__navbar flex items-center justify-between px-4 py-10">
                <div>
                    <img
                        class="manage-landing__logo"
                        :src="manage.navbar.logo"
                        alt="brand logo"
                    >
                </div>

                <!-- desktop only -->
                <div class="hidden">
                    <nuxt-link
                        to="#"
                        v-for="(link, i) in manage.navbar.menu"
                        :key="i"
                    >{{ link }}</nuxt-link>
                </div>
                <manage-button-primary
                    class="hidden"
                    :settings="{
                    text: 'primary',
                    primary: true,
                    secondary: false
                }"
                />
                <!-- desktop only end -->
                <button>
                    <img
                        src="/manage-landing/icon-hamburger.svg"
                        alt="hamburger image"
                    >
                </button>
            </nav>
            <!-- header -->
            <div class="manage-landing__hero px-4 pt-6 pb-40 flex flex-col-reverse">
                <div>
                    <div>
                        <h1
                            class="text-manage-dark-blue mb-4 text-4xl be-nam-bold leading-tight text-center"
                            v-text="manage.header.title"
                        />
                        <p
                            class="manage-landing__hero-description mx-auto mb-8 text-manage-dark-grayish-blue"
                            v-text="manage.header.description"
                        />
                        <manage-button-primary
                            class="mx-auto block"
                            :settings="{
                        text: 'primary',
                        primary: true,
                        shadow: true,
                        secondary: false
                    }"
                        />
                    </div>
                </div>
                <div>
                    <div>
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
            <section class="manage-landing__about-us">
                <div class="text-center mb-16">
                    <div>
                        <h2
                            class="mb-8 text-3xl be-nam-bold text-manage-dark-blue"
                            v-html="manage['about-us'].title"
                        />
                        <p
                            class="text-manage-dark-grayish-blue"
                            v-text="manage['about-us'].description"
                        />
                    </div>
                </div>
                <div class="pl-4 rounded-l-full">
                    <div
                        class="mb-16"
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
            <section class="manage-landing__testimonials">
                <h2 v-text="manage.testimonials.title" />
                <div>
                    <VueSlickCarousel v-bind="carouselSettings">
                        <div
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
                    </VueSlickCarousel>
                </div>
                <manage-button-primary :settings="{
                    text: 'primary',
                    primary: true,
                    secondary: false
                }" />
            </section>
            <!-- cta -->
            <section class="manage-landing__cta">
                <div>
                    <h2 v-text="manage.cta.title" />
                </div>
                <div>
                    <manage-button-primary :settings="{
                        text: 'secondary',
                        primary: false,
                        secondary: true
                    }" />
                </div>
            </section>
        </main>
        <!-- footer -->
        <footer class="manage-landing__footer">
            <div>
                <div>
                    <form @submit.prevent="submit">
                        <input type="text">
                        <manage-button-primary :settings="{
                            text: 'go',
                            primary: true,
                            secondary:false 
                        }" />
                    </form>
                </div>
                <div>
                    <ul>
                        <li
                            v-for="(link, i) in manage.footer.menu"
                            :key="i"
                        >
                            <nuxt-link :to="'#' + link">{{ link }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li
                            v-for="(legal, i) in manage.footer.legal"
                            :key="i"
                        >
                            <nuxt-link :to="'#' + legal">{{ legal }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <div>
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
                        <div>
                            <img
                                :src="manage.footer.logo"
                                alt="footer logo"
                            >
                        </div>
                        <div>
                            <p v-text="manage.footer.copyright" />
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