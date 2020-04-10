<template>
    <div class="my-team__layout relative bg-myteam-midnight-green font-livvic">
        <div class="my-team__container mx-auto">
            <nav class="px-4 py-12 flex items-center justify-between md:px-10 lg:px-32 lg:mb-20">
                <nuxt-link to="/my-team">
                    <img
                        class="my-team__logo-nav"
                        :src="db.footer.logo"
                        alt="logo"
                    >
                </nuxt-link>

                <!-- desktop/tablet menu -->
                <div class="hidden pl-12 livvic-semibold text-white md:block md:flex-1">
                    <nuxt-link
                        class="mr-12 hover:text-myteam-light-coral"
                        to="/my-team"
                        v-text="'home'"
                    />
                    <nuxt-link
                        class="hover:text-myteam-light-coral"
                        to="/my-team/about"
                        v-text="'about'"
                    />
                </div>
                <div class="hidden md:block">
                    <nuxt-link
                        class="px-6 py-2 border-2 border-white rounded-full livvic-semibold-italic text-white focus:outline-none hover:bg-white hover:text-myteam-sacramento-state-green transition duration-300 ease-in-out"
                        to="/my-team/contact"
                        v-text="'contact us'"
                    />
                </div>
                <!-- desktop/tablet menu ends -->

                <!-- mobile burger menu -->
                <button
                    class="block cursor-pointer focus:outline-none md:hidden"
                    @click="toggleMenu"
                >
                    <img
                        class="my-team__hamburger"
                        :src="db.hamburgerIcon"
                        alt="hamburger icon"
                    >
                </button>
            </nav>

            <!-- content -->
            <nuxt />
            <!-- content end -->

            <!-- cta -->
            <div
                class="my-team__cta py-32 px-10 bg-myteam-light-coral text-center md:px-24 md:py-24"
                :class="{
                    'hidden': $route.name === 'my-team-contact'
                }"
            >
                <div class="my-team__cta-container md:flex md:items-center md:justify-between lg:mx-auto">
                    <h2
                        v-text="db.cta.title"
                        class="mb-8 livvic-bold text-3xl text-myteam-dark-green leading-none md:mb-0 lg:text-5xl"
                    />
                    <nuxt-link
                        class="px-4 py-2 border-2 border-myteam-dark-green rounded-full livvic-semibold paragraph transition duration-300 ease-in-out hover:bg-myteam-dark-green hover:text-white md:px-8"
                        to="/my-team/contact"
                        v-text="'contact us'"
                    />
                </div>
            </div>

            <!-- footer -->
            <footer class="bg-myteam-dark-green py-20 md:flex md:items-center md:justify-between md:py-12 md:px-10 lg:px-32">
                <div class="md:flex md:flex-col md:self-stretch">
                    <nuxt-link
                        class="inline-block mx-auto mb-8 md:mb-0"
                        to="/my-team"
                    >
                        <img
                            class="my-team__logo-footer"
                            :src="db.footer.logo"
                            alt="logo"
                        >
                    </nuxt-link>
                    <div class="flex items-center justify-center text-white livvic-semibold mb-8 md:mt-auto lg:mb-0">
                        <nuxt-link
                            class="hover:text-myteam-light-coral"
                            :class="{
                                'mr-4': i === 0
                            }"
                            :to="'/my-team/' + page"
                            v-text="page"
                            v-for="(page, i) in db.pages"
                            :key="i"
                        />
                    </div>

                    <!---------------- social links tablet --------------------->
                    <div class="hidden mb-8 items-center justify-center md:flex md:mb-0 lg:hidden">
                        <a
                            class="inline-block"
                            :class="{
                                'mx-4': i === 1
                            }"
                            :href="icon.link"
                            target="_blank"
                            v-for="(icon, i) in db.footer.social"
                            :key="i"
                        >
                            <icon-dynamic>
                                <div v-html="db.icons[icon.slug]" />
                            </icon-dynamic>
                            <!-- <img
                                :src="icon.icon"
                                alt="social icon"
                            > -->
                        </a>
                    </div>
                </div>

                <!---------------- adress mobile/desktop --------------------->
                <div class="mb-8 text-center livvic-semibold text-myteam-police-blue md:hidden lg:block lg:flex-1 lg:text-left lg:pl-24 lg:mb-0">
                    <address v-html="db.footer.address" />
                </div>

                <div class="lg:self-stretch lg:flex lg:flex-col lg:justify-between">
                    <!---------------- social links mobile/desktop --------------------->
                    <div class="mb-8 flex items-center justify-center md:hidden lg:flex lg:justify-end">
                        <a
                            class="inline-block"
                            :class="{
                                'mx-4': i === 1
                            }"
                            :href="icon.link"
                            target="_blank"
                            v-for="(icon, i) in db.footer.social"
                            :key="i"
                        >
                            <icon-dynamic>
                                <div v-html="db.icons[icon.slug]" />
                            </icon-dynamic>
                            <!-- <img
                                :src="icon.icon"
                                alt="social icon"
                            > -->
                        </a>
                    </div>

                    <!---------------- adress tablet --------------------->
                    <div class="hidden mb-8 text-center livvic-semibold text-myteam-police-blue md:block md:text-right lg:hidden">
                        <address v-html="db.footer.address" />
                    </div>

                    <!---------------- copyright --------------------->
                    <p
                        class="text-center livvic-semibold text-myteam-police-blue"
                        v-text="db.footer.copyright"
                    />
                </div>
            </footer>
            <div
                class="my-team__overlay absolute top-0 left-0 w-full h-full cursor-pointer"
                :class="{
                'fade-in': isDrawerOpen,
                'fade-out': !isDrawerOpen
            }"
                @click="toggleMenu"
            ></div>
            <myteam-drawer
                :class="{
                    'slide-in': isDrawerOpen,
                    'slide-out': !isDrawerOpen
                }"
                @toggleMenu="toggleMenu"
            />
        </div>
    </div>
</template>

<script>
    import db from "~/helpers/my-team-db";
    import MyteamDrawer from "~/components/myteam/MyteamDrawer";
    import IconDynamic from "~/components/IconDynamic";
    export default {
        components: {
            MyteamDrawer,
            IconDynamic
        },
        data() {
            return {
                db,
                isDrawerOpen: false
            };
        },
        methods: {
            toggleMenu() {
                if (this.isDrawerOpen) {
                    this.addScroll();
                    this.isDrawerOpen = !this.isDrawerOpen;
                } else {
                    this.removeScroll();
                    this.isDrawerOpen = !this.isDrawerOpen;
                }
            },
            removeScroll() {
                document.body.style.overflowY = 'hidden';
            },
            addScroll() {
                document.body.style.overflowY = 'scroll';
            },
        }
    }
</script>