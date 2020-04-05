<template>
    <div class="easybank">
        <!-- visual separator -->
        <nav class="easybank__nav px-6 py-4 relative z-10 shadow-xl flex items-center justify-between bg-white">
            <div>
                <img
                    src="/easybank/logo.svg"
                    alt="brand image"
                >
            </div>
            <!-- desktop menu -->
            <ul class="hidden text-bank-grayish-blue capitalize lg:block">
                <li>
                    <nuxt-link
                        class="inline-block"
                        :class="{
                        'mr-8': i !== (easybankDB.navbar.length - 1)
                    }"
                        :to="'#' + link"
                        v-text="link"
                        v-for="(link, i) in easybankDB.navbar"
                        :key="i"
                    />
                </li>
            </ul>
            <div class="hidden lg:block">
                <easybank-btn text="request invite" />
            </div>
            <!-- desktop menu ends -->
            <button
                class="pt-8 pl-8 block relative focus:outline-none lg:hidden"
                @click="toggleMenu"
            >
                <img
                    src="/easybank/icon-hamburger.svg"
                    alt="burger icon"
                    class="easybank__burger center-absolute"
                    :class="{
                        'fade-in': !isdropdownMenuOpen,
                        'fade-out': isdropdownMenuOpen
                    }"
                >
                <img
                    src="/easybank/icon-close.svg"
                    alt="close icon"
                    class="easybank__close center-absolute"
                    :class="{
                        'fade-in': isdropdownMenuOpen,
                        'fade-out': !isdropdownMenuOpen
                    }"
                >
            </button>
        </nav>

        <main class="relative overflow-x-hidden">
            <div>
                <ul
                    class="easybank__dropdown py-8 mx-6 mt-6 top-0 inset-x-0 bg-white rounded-lg shadow-xl text-center capitalize z-10"
                    :class="{
                        'drop-down':isdropdownMenuOpen,
                        'drop-up':!isdropdownMenuOpen,
                    }"
                >
                    <li
                        v-for="(link, i) in easybankDB.navbar"
                        :key="i"
                    >
                        <nuxt-link
                            class="mb-4 inline-block text-bank-dark-blue"
                            :to="'#' + link"
                            v-text="link"
                            @click.native="toggleMenu"
                        />
                    </li>
                </ul>
            </div>
            <!-- overlay -->

            <button
                class="easybank__overlay absolute top-0 left-0 w-full h-full cursor-pointer"
                :class="{
                    'fade-in': isdropdownMenuOpen,
                    'fade-out': !isdropdownMenuOpen
                }"
                @click="toggleMenu"
            />

            <!-- visual separator -->

            <header class="easybank__hero px-5 pb-20 flex flex-col-reverse bg-bank-very-light-gray text-center leading-snug lg:pl-20 lg:pr-0 lg:py-40 lg:flex-row lg:text-left lg:items-center">
                <div class="lg:w-1/3">
                    <h1
                        class="mt-8 mb-2 text-4xl font-thin"
                        v-text="easybankDB.hero.title"
                    />
                    <p
                        class="mb-8 font-md leading-6 text-bank-grayish-blue"
                        v-text="easybankDB.hero.description"
                    />
                    <easybank-btn text="request invite" />
                </div>
                <div class="lg:flex-1 lg:relative">
                    <img
                        class="easybank__hero-img lg:absolute"
                        src="/easybank/image-mockups.png"
                        alt="mockups image"
                    >
                </div>
            </header>

            <!-- visual separator -->

            <section class="easybank__benefits py-20 px-6 bg-bank-light-grayish-blue text-bank-grayish-blue text-center lg:px-20 lg:text-left">
                <header class="mb-12">
                    <h2
                        class="mb-3 text-bank-dark-blue text-4xl leading-thin font-thin"
                        v-text="easybankDB.benefits_title"
                    />
                    <p
                        class="lg:w-2/4"
                        v-text="easybankDB.benefits_description"
                    />
                </header>
                <div class="lg:-mx-6 lg:flex lg:items-center">
                    <div
                        class="lg:mb-0 lg:p-2"
                        :class="{
                            'mb-12': i !== (easybankDB.benefits.length - 1)
                        }"
                        v-for="(benefit, i) in easybankDB.benefits"
                        :key="i"
                    >
                        <easybank-benefits-card :benefit="benefit" />
                    </div>
                </div>
            </section>

            <!-- visual separator -->

            <section class="easybank_articles px-6 py-20 bg-bank-very-light-gray text-bank-grayish-blue lg:px-20">
                <h2
                    class="mb-6 text-center text-bank-dark-blue text-4xl leading-thin font-thin lg:text-left"
                    v-text="easybankDB.articles_title"
                />
                <div class="flex flex-col items-center md:-mx-3 md:flex-row md:flex-wrap">
                    <div
                        class="md:w-2/4 lg:w-1/4 self-stretch md:px-3 md:py-3"
                        :class="{
                            'mb-12': i !== (easybankDB.benefits.length - 1),
                            'md:mb-0': i !== (easybankDB.benefits.length - 1)
                        }"
                        v-for="(article, i) in easybankDB.articles"
                        :key="i"
                    >
                        <easybank-articles-card :article="article" />
                    </div>
                </div>
            </section>

            <!-- visual divider -->

            <footer class="easybank__footer py-10 bg-bank-dark-blue text-center text-bank-grayish-blue lg:px-20 lg:flex lg:items-center lg:justify-between lg:text-left">

                <div class="mb-8 lg:mb-0 lg:flex lg:flex-col lg:justify-between lg:self-stretch lg:w-1/4">
                    <img
                        class="mb-6 mx-auto inline-block lg:ml-0"
                        src="/easybank/logo-footer.svg"
                        alt="brand image"
                    >
                    <div class="flex items-center justify-center lg:justify-start">
                        <img
                            :class="{
                            'mr-3': i !== (easybankDB.footer.social - 1)
                        }"
                            :src="icon"
                            alt="social icon"
                            v-for="(icon, i) in easybankDB.footer.social"
                            :key="i"
                        >
                    </div>
                </div>
                <div class="mb-8 text-white lg:mb-0 lg:flex lg:items-center lg:flex-1 lg:justify-between lg:self-stretch">
                    <ul
                        v-for="(links, i) in easybankDB.footer.menu"
                        :key="i"
                    >
                        <li
                            v-for="(link, i) in links"
                            :key="i"
                        >
                            <nuxt-link
                                class="inline-block focus:outline-none"
                                :class="{
                                    'mb-2': i !== (links - 1)
                                }"
                                :to="'#' + link"
                                v-text="link"
                            />
                        </li>
                    </ul>
                </div>
                <div class="lg:w-2/4 lg:flex lg:flex-col lg:items-end">
                    <easybank-btn
                        class="mb-6"
                        text="Request Invite"
                    />
                    <p>&copy; Easybank. All Rights Reserved</p>
                </div>
            </footer>
        </main>
    </div>
</template>

<script>
    import easybankDB from "~/helpers/easybankDB";
    import EasybankBtn from "~/components/easybank/EasybankBtn";
    import EasybankArticlesCard from "~/components/easybank/EasybankArticlesCard";
    import EasybankBenefitsCard from "~/components/easybank/EasybankBenefitsCard";
    export default {
        components: {
            EasybankBtn,
            EasybankArticlesCard,
            EasybankBenefitsCard
        },
        data() {
            return {
                easybankDB,
                isdropdownMenuOpen: false
            };
        },
        methods: {
            toggleMenu() {
                this.isdropdownMenuOpen = !this.isdropdownMenuOpen;
            }
        },
    }
</script>