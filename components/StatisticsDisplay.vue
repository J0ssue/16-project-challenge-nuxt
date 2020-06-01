<template>
    <section class="statistics-display px-4 text-center">
        <header class="mb-24">
            <h2 class="font-semibold text-3xl capitalize mb-8 lg:text-5xl lg:mb-2">{{ title }}</h2>
            <p class="text-shortly-neutral-gray lg:w-2/4 lg:mx-auto">{{ description }}</p>
        </header>
        <main class="statistics-display__main lg:flex lg:items-center lg:justify-between">
            <div class="statistics-display--connector bg-shortly-primary-cyan transition duration-300 ease"></div>
            <statistics-card
                :class="{
                'statistics-card--2': i === 1,
                'statistics-card--3': i === 2,
            }"
                v-for="(stat, i) in statistics"
                :key="i"
                :statistic="stat"
            />
        </main>
    </section>
</template>

<script>
    import helpers from "~/helpers/index.js";
    import StatisticsCard from "~/components/StatisticsCard";
    export default {
        components: {
            StatisticsCard
        },
        data() {
            return {
                title: 'advanced statistics',
                description: 'Track how your links are performing accross the web with our advanced statistics dashboard.',
                statistics: helpers.get('statistics')
            };
        },
    }
</script>