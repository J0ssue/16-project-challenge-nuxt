<template>
    <section class="statistics-display">
        <header>
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </header>
        <main>
            <div class="statistics-display--connector"></div>
            <statistics-card
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