<template>
    <div
        class="countries theme-transition"
        :class="{
        'bg-white': theme === 'light',
        'bg-countries-dark-mode-blue-bg': theme === 'dark'
    }"
    >
        <nav
            class="countries__navbar py-6 px-4 mb-8 flex items-center justify-between shadow-lg text-sm theme-transition"
            :class="{
                'text-white-dark-mode-text-light-mode-elements': theme === 'dark'   
            }"
        >
            <h3 class="font-semibold">Where in the world?</h3>
            <button
                class="flex items-center capitalize focus:outline-none"
                @click="toggleTheme"
            >
                <!-- <img
                    class="w-4 h-4 inline-block mr-2"
                    src="/countries/moon-outline.svg"
                    alt="dark mode image"
                > -->
                <svg
                    class="w-4 h-4 inline-block mr-2 theme-transition moon-stroke fill-current text-white"
                    :class="{
                        'moon-light': theme === 'dark',
                        'moon-dark': theme === 'light'
                    }"
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                >
                    <path d='M152.62,126.77c0-33,4.85-66.35,17.23-94.77C87.54,67.83,32,151.89,32,247.38,32,375.85,136.15,480,264.62,480c95.49,0,179.55-55.54,215.38-137.85-28.42,12.38-61.8,17.23-94.77,17.23C256.76,359.38,152.62,255.24,152.62,126.77Z' />
                </svg>
                <span class="tracking-wide">dark mode</span>
            </button>
        </nav>
        <header class="md:flex md:justify-between">
            <div
                class="px-4"
                v-if="$route.name === 'countries-country'"
            >
                <nuxt-link
                    to="/countries"
                    class="mb-16 pl-4 pr-6 py-1 text-dark-gray-light-mode-input inline-block bg-white shadow-dropdown rounded-sm focus:outline-none theme-transition"
                    :class="{
                        'text-white-dark-mode-text-light-mode-elements': theme === 'dark',   
                        'bg-countries-Blue-dark-mode-elements': theme === 'dark'
                    }"
                >
                    <icon-arrow
                        class="inline-block"
                        :options="{
                    gray: theme === 'light',
                    white: theme === 'dark',
                    sm: true
                }"
                    />
                    <span class="inline-block ml-2">back</span>
                </nuxt-link>
            </div>
            <!-- 
                search component with containre
                TODO:: (extract component for future use). 
             -->
            <!-- search container -->
            <div
                class="px-4 mb-12 md:w-1/3"
                v-if="$route.name === 'countries'"
            >
                <!-- search bar with shadow (could be a form) -->
                <div class="countries__search flex items-center rounded-lg">
                    <!-- button with dynamic icon component -->
                    <button
                        @click="searchFor"
                        class="px-6 bg-white rounded-l-lg focus:outline-none self-stretch flex items-center justify-center theme-transition"
                        :class="{
                            'bg-countries-Blue-dark-mode-elements': theme === 'dark'
                        }"
                    >
                        <search-icon :options="{
                        gray: true,
                        sm: true
                    }" />
                    </button>
                    <!-- input -->
                    <input
                        class="pr-8 py-4 flex-1 text-xs tracking-wide focus:outline-none text-dark-gray-light-mode-input tracking-wide rounded-r-lg theme-transition"
                        :class="{
                            'bg-countries-Blue-dark-mode-elements': theme === 'dark'
                        }"
                        type="text"
                        placeholder="Search for a country..."
                        v-model="search"
                    >
                </div>
            </div>

            <!-- base dropdown -->
            <div
                class="px-4 mb-8 relative z-10"
                v-if="$route.name === 'countries'"
            >
                <base-dropdown
                    :settings="{
                        options: options
                    }"
                    @activeOption="fetchFilteredCountries"
                >
                    <icon-chevron :options="{
                        white: theme === 'dark',
                        black: theme === 'light',
                        sm: true
                    }" />
                </base-dropdown>
            </div>
        </header>
        <nuxt-child :key="$route.path" />
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import SearchIcon from "~/components/icons/SearchIcon";
    import BaseDropdown from "~/components/BaseDropdown";
    import IconChevron from "~/components/icons/IconChevron";
    import IconArrow from "~/components/icons/IconArrow";
    export default {
        head() {
            return {
                title: 'countries',
            };
        },

        components: {
            SearchIcon,
            BaseDropdown,
            IconChevron,
            IconArrow
        },
        mounted() {
            let countries = this.$api.get('countries');
            this.setCountries(countries);
        },
        data() {
            return {
                search: '',
                options: ['africa', 'asia', 'europe', 'oceania']
            };
        },
        computed: {
            ...mapState({
                countries: state => state.countries.countries,
                theme: state => state.countries.theme,
            })
        },
        methods: {
            toggleTheme() {
                this.$store.dispatch('countries/toggleTheme');
            },
            async searchFor() {
                try {
                    let countries = this.$api.get('countries');
                    let country = this.search;
                    let { data } = await countries.filter({ searchBy: 'name', keyword: country });
                    this.$store.dispatch('countries/addCountries', data);
                    this.search = '';
                } catch (error) {
                    console.log(error);
                }
            },
            async fetchFilteredCountries(filter) {
                let countriesApi = this.$api.get('countries');
                const { data } = await countriesApi.filter(filter);
                this.$store.dispatch('countries/addCountries', data);
            },
            setCountries(countries) {
                this.$store.dispatch('countries/fetchCountries', countries);
            }
        },
    }
</script>