<template>
    <div class="countries">
        <nav class="countries__navbar py-6 px-4 mb-8 flex items-center justify-between shadow-lg text-sm">
            <h3 class="font-semibold">Where in the world?</h3>
            <button class="flex items-center capitalize focus:outline-none">
                <img
                    class="w-4 h-4 inline-block mr-2"
                    src="/countries/moon-outline.svg"
                    alt="dark mode image"
                >
                <span class="tracking-wide">dark mode</span>
            </button>
        </nav>
        <header>
            <div class="px-4">
                <nuxt-link
                    to="/countries"
                    class="mb-16 pl-4 pr-6 py-1 text-dark-gray-light-mode-input inline-block bg-white shadow-dropdown rounded-sm focus:outline-none"
                >
                    <icon-arrow
                        class="inline-block"
                        :options="{
                    gray: true,
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
                class="px-4 mb-12"
                v-if="$route.name === 'countries'"
            >
                <!-- search bar with shadow (could be a form) -->
                <div class="countries__search flex items-center rounded-lg">
                    <!-- button with dynamic icon component -->
                    <button
                        @click="searchFor"
                        class="px-6 bg-white rounded-l rounded-lg focus:outline-none self-stretch flex items-center justify-center"
                    >
                        <search-icon :options="{
                        gray: true,
                        sm: true
                    }" />
                    </button>
                    <!-- input -->
                    <input
                        class="pr-8 py-4 flex-1 text-xs tracking-wide focus:outline-none text-dark-gray-light-mode-input tracking-wide rounded-r rounded-lg"
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
                        black: true,
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
                options: ['africa', 'america', 'asia', 'europe', 'oceania']
            };
        },
        computed: {
            ...mapState({
                countries: state => state.countries.countries
            })
        },
        methods: {
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