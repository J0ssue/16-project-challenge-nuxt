<template>
    <div
        class="job-card jobs-card-component lg:border-transparent lg:flex lg:items-center lg:justify-between lg:px-12"
        :class="{'hover:border-jobs-cyan': isHovering}"
    >
        <div class="lg:flex lg:items-center">
            <img
                :src="job.logo"
                alt="job logo"
                class="job-card__img w-16 h-16 lg:mr-6"
            >
            <div>
                <div class="job-card__body flex flex-wrap align-center mb-2">
                    <div
                        v-text="job.company"
                        class="text-sm font-semibold text-jobs-cyan"
                    />
                    <pill
                        class="mx-2"
                        :rounded="true"
                        :blue="true"
                        text="new!"
                    />
                    <pill
                        :rounded="true"
                        :blue="false"
                        text="featured"
                    />
                </div>
                <button
                    @mouseover="isHovering = true"
                    @mouseout="isHovering = false"
                    v-text="job.position"
                    class="job-card__position font-bold tracking-wide mb-3 focus:outline-none hover:text-jobs-cyan transition duration-300 ease-in-out"
                />
                <p
                    v-html="
                        `${job.postedAt} <span class='w-1 h-1 rounded-full bg-gray-500 inline-block mx-2'></span> ${job.contract} <span class='w-1 h-1 rounded-full bg-gray-500 inline-block mx-2'></span> ${job.location}`"
                    class="flex items-center items-center text-gray-500 text-sm mb-2"
                />
            </div>
        </div>
        <!-- main info are ends -->
        <div class="flex items-center flex-wrap -ml-2">
            <div class="p-2">
                <pill
                    @click="addTag(job.level)"
                    class="jobs-pill-tag"
                    :squared="true"
                    :text="job.level"
                />
            </div>
            <div class="p-2">
                <pill
                    @click="addTag(job.role)"
                    class="jobs-pill-tag"
                    :squared="true"
                    :text="job.role"
                />
            </div>
            <div
                class="p-2"
                v-for="(lang, i) in job.languages"
                :key="i"
            >
                <pill
                    @click="addTag(lang)"
                    class="jobs-pill-tag"
                    :squared="true"
                    :text="lang"
                />
            </div>
            <div
                v-if="job.hasOwnProperty('tools')"
                class="flex items-center flex-wrap"
            >
                <div
                    v-for="(tool, i) in job.tools"
                    :key="i"
                    class="inlie-block p-2"
                >
                    <pill
                        @click="addTag(tool)"
                        :squared="true"
                        :text="tool"
                        class="jobs-pill-tag"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Pill from "~/components/Pill";
    export default {
        props: {
            job: {
                type: Object
            }
        },
        components: {
            Pill
        },
        data() {
            return {
                isHovering: false
            };
        },
        methods: {
            addTag(tag) {
                this.$store.dispatch('jobs/addTag', tag);
            }
        },
    }
</script>