<template>
    <main class="flex flex-col">
        <div
            class="px-12 pb-10"
            v-for="(country, i) in countries"
            :key="i"
        >
            <country-card :country="country" />
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