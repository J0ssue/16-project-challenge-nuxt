<template>
    <nuxt-link
        class="shadow-dropdown border-lg block rounded-lg"
        :to="{ name: 'countries-country', params: { country: country.name } }"
    >
        <!-- <header class="h-40"> -->
        <header
            class="pt-aspect-ratio relative bg-center bg-cover rounded-t-lg"
            :style="{'background-image': `url(${country.flag})`}"
        >
        </header>
        <main
            class="pt-6 pb-10 px-6 rounded-b-lg theme-transition"
            :class="{
                'text-white-dark-mode-text-light-mode-elements': theme === 'dark',   
                'bg-countries-Blue-dark-mode-elements': theme === 'dark'
            }"
        >
            <h4
                class="mb-4 font-bold capitalize tracking-wide"
                v-text="country.name"
            />
            <div class="capitalize font-thin">
                <p class="mr-2"><b>population:</b> {{ country.population.toLocaleString() }}</p>
                <p class="mr-2"><b>region:</b> {{ country.region }}</p>
                <p class="mr-2"><b>capital:</b> {{ country.capital }}</p>
            </div>
        </main>
    </nuxt-link>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        props: {
            country: {
                type: Object
            }
        },
        computed: {
            ...mapState({
                theme: state => state.countries.theme
            })
        },
    }
</script>