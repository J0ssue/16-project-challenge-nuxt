<template>
    <main class="flex flex-col md:flex-wrap md:flex-row">
        <div
            class="px-12 pb-10 md:px-6 md:w-2/4 lg:w-1/4"
            v-for="(country, i) in countries"
            :key="i"
        >
            <country-card
                class="self-stretch block h-full"
                :country="country"
            />
        </div>
    </main>
</template>

<script>
    import { mapState } from "vuex";
    import CountryCard from "~/components/CountryCard";
    export default {
        components: {
            CountryCard
        },
        computed: {
            ...mapState({
                countries: state => state.countries.countries
            })
        },
    }
</script>