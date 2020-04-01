<template>
    <div class="jobs-listing">
        <header class="jobs-listing__hero">

        </header>
        <main></main>
    </div>
</template>

<script>
    import jobs from "~/helpers/jobsListing.json";
    import { mapState } from "vuex";
    export default {
        mounted() {
            this.$store.dispatch('jobs/setJobs', jobs);
        },
        computed: {
            ...mapState({
                tags: state => state.jobs.activeTags,
                jobs: state => state.jobs.jobs
            })
        },
    }
</script>