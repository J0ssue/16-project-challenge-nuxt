<template>
    <div class="jobs-listing">
        <header class="jobs-listing__hero bg-jobs-cyan">
            <img
                class="jobs-listing__img w-full h-full"
                src="~/assets/images/jobs-listing/bg-header-mobile.svg"
                alt="header background"
            >
        </header>
        <main class="bg-jobs-gray-cyan-one flex flex-col lg:px-40">
            <div
                class="jobs-listing__tags rounded-lg bg-white shadow-xl flex items-center justify-between py-6 px-10"
                v-if="tags.length > 0"
            >
                <div class="flex items-center flex-wrap">
                    <div
                        v-for="(tag, i) in tags"
                        :key="i"
                        class="p-4 -ml-4"
                    >
                        <pill
                            @removeTag="removeTag(tag)"
                            :squared="true"
                            :removeBtn="true"
                            :text="tag"
                        />
                    </div>
                </div>
                <button
                    class="text-jobs-cyan underline cursor-pointer focus:ouline-none"
                    @click="clearTags"
                >clear</button>
            </div>
            <div
                class="px-4 pb-6 flex flex-col self-stretch"
                :class="{
                    'lg:pt-0': i === 0 && tags.length > 0,
                    'pt-12': i === 0,
                    'pt-6': i !== 0
                }"
                v-for="(job, i) in filteredJobs"
                :key="i"
            >
                <job-card
                    class="h-full"
                    :job="job"
                />
            </div>
        </main>
    </div>
</template>

<script>
    import JobCard from "~/components/JobCard";
    import jobs from "~/helpers/jobsListing.json";
    import Pill from "~/components/Pill";
    import { mapState } from "vuex";
    export default {
        head() {
            return {
                title: 'jobs-listing',
            };
        },

        components: {
            JobCard,
            Pill
        },
        mounted() {
            this.$store.dispatch('jobs/setJobs', jobs);
        },
        methods: {
            removeTag(tag) {
                this.$store.dispatch('jobs/removeTag', tag);
            },
            clearTags() {
                this.$store.dispatch('jobs/clearTags');
            }
        },
        computed: {
            ...mapState({
                tags: state => state.jobs.activeTags,
                filteredJobs: state => state.jobs.filteredJobs
            })
        },
    }
</script>