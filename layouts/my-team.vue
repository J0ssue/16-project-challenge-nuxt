<template>
    <div class="my-team__layout relative bg-myteam-midnight-green font-livvic">
        <div class="my-team__container">
            <nav class="px-4 py-12 flex items-center justify-between">
                <div>
                    <img
                        class="my-team__logo-nav"
                        :src="db.footer.logo"
                        alt="logo"
                    >
                </div>

                <!-- desktop menu -->
                <div class="hidden">
                    <nuxt-link
                        :to="'/my-team/' + page"
                        v-text="page"
                        v-for="(page, i) in db.pages"
                        :key="i"
                    />
                </div>
                <div class="hidden">
                    <nuxt-link
                        to="/my-team/contact"
                        v-text="'contact us'"
                    />
                </div>

                <!-- mobile burger menu -->
                <button
                    class="block cursor-pointer focus:outline-none"
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
            <div class="my-team__cta py-32 px-10 bg-myteam-light-coral text-center">
                <h2
                    v-text="db.cta.title"
                    class="mb-8 livvic-bold text-3xl text-myteam-dark-green leading-none"
                />
                <nuxt-link
                    class="px-4 py-2 border-2 border-myteam-dark-green rounded-full livvic-semibold"
                    to="/my-team/contact"
                    v-text="'contact us'"
                />
            </div>

            <!-- footer -->
            <footer class="bg-myteam-dark-green py-20">
                <div>
                    <img
                        class="my-team__logo-footer mx-auto mb-8"
                        :src="db.footer.logo"
                        alt="logo"
                    >
                    <div class="flex items-center justify-center text-white livvic-semibold mb-8">
                        <nuxt-link
                            :class="{
                                'mr-4': i === 0
                            }"
                            :to="'/my-team/' + page"
                            v-text="page"
                            v-for="(page, i) in db.pages"
                            :key="i"
                        />
                    </div>
                </div>
                <div class="mb-8 text-center livvic-semibold text-myteam-police-blue">
                    <address v-html="db.footer.address" />
                </div>
                <div>
                    <div class="mb-8 flex items-center justify-center">
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
                            <img
                                :src="icon.icon"
                                alt="social icon"
                            >
                        </a>
                    </div>
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
    export default {
        components: {
            MyteamDrawer
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