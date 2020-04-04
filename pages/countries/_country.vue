<template>
    <div class="px-4">
        <div v-if="Object.keys(country).length === 0 || country === null || country === undefined">No country found</div>
        <div
            v-else
            class="md:flex md:items-center"
        >
            <header>
                <img
                    :src="country.flag"
                    alt=""
                >
            </header>
            <main class="pt-8 md:pt-4 md:pl-20">
                <h2
                    class="mb-4 font-semibold capitalize theme-transition"
                    :class="{
                        'text-black': theme === 'light',
                        'text-white-dark-mode-text-light-mode-elements': theme === 'dark'
                    }"
                    v-text="country.name"
                />
                <div class="leading-8 tracking-wide text-sm font-thin md:flex md:flex-wrap md:justify-between md:leading-7">
                    <div
                        v-for="(Arr, i) in fields"
                        :key="i"
                    >
                        <div v-if="i === 0">
                            <p
                                class="capitalize text-dark-gray-light-mode-input"
                                v-for="(field, i) in Arr"
                                :key="i"
                            ><b
                                    class="inline-block mr-2 theme-transition"
                                    :class="{
                                        'text-black': theme === 'light',
                                        'text-white-dark-mode-text-light-mode-elements': theme === 'dark'
                                    }"
                                >{{ field.name }}</b>{{ country[field.slug] }}</p>
                        </div>
                        <div
                            v-else
                            class="pt-8"
                        >
                            <p
                                v-for="(field, i) in Arr"
                                :key="i"
                                class="text-dark-gray-light-mode-input"
                            >
                                <b
                                    class="capitalize theme-transition"
                                    :class="{
                                        'text-black': theme === 'light',
                                        'text-white-dark-mode-text-light-mode-elements': theme === 'dark'
                                    }"
                                >{{ field.name }}</b>
                                <span v-if="i === 0">
                                    <span
                                        v-for="(innerField,i) in country[field.slug]"
                                        :key="i"
                                    >
                                        {{ innerField }}
                                    </span>
                                </span>
                                <span v-else>
                                    <span
                                        v-for="(innerField,i) in country[field.slug]"
                                        :key="i"
                                    >
                                        {{ innerField.name }}
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="pt-8 md:w-full md:flex md:items-center md:flex-wrap">
                        <p
                            class="capitalize md:mr-3 theme-transition"
                            :class="{
                                'text-black': theme === 'light',
                                'text-white-dark-mode-text-light-mode-elements': theme === 'dark'
                            }"
                        ><b>border countries:</b></p>
                        <div class="-mx-2 flex items-center flex-wrap">
                            <div
                                class="p-2"
                                v-for="(border,i) in country.borders"
                                :key="i"
                            >
                                <button
                                    class="px-8 text-xs text-dark-gray-light-mode-input inline-block bg-white shadow-dropdown rounded-sm focus:outline-none"
                                    @click="getCountry(border)"
                                    v-text="border"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        mounted() {
            this.fetchCountry();
        },
        data() {
            return {
                country: {},
                fields: [
                    [
                        { slug: 'nativeName', name: 'native name' },
                        { slug: 'population', name: 'population' },
                        { slug: 'region', name: 'region' },
                        { slug: 'subregion', name: 'sub region' },
                        { slug: 'capital', name: 'capital' },
                    ],
                    [
                        { slug: 'topLevelDomain', name: 'top level domain' },
                        { slug: 'currencies', name: 'currencies' },
                        { slug: 'languages', name: 'languages' },
                    ]
                ],
            };
        },
        methods: {
            async getCountry(code) {
                try {
                    let countries = this.$api.get('countries');
                    let cd = code.toLowerCase();
                    let { data } = await countries.filter({ searchBy: 'alpha', keyword: cd });
                    this.$router.push({ name: 'countries-country', params: { country: data.name } });
                } catch (error) {
                    console.log(error);
                }
            },
            async fetchCountry(countriesApi) {
                try {
                    let countries = this.$api.get('countries');
                    let country = this.$route.params.country;
                    let { data } = await countries.filter({ searchBy: 'name', keyword: country });
                    this.country = data[0];
                } catch (error) {
                    console.log(error);
                }
            },
        },
        computed: {
            ...mapState({
                theme: state => state.countries.theme
            })
        },
    }
</script>