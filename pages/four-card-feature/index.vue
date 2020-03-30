<template>
    <div class="four-card-ft">
        <header>
            <h1 class="spg-card__title text-5xl mb-4 text-blue-500 text-center">Four Card Feature</h1>
        </header>
        <main class="four-card-ft__main py-12 px-6">
            <header class="text-center px-8">
                <h2 class="text-xl text-gray-700 font-thin">{{ uppertext }}</h2>
                <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
                <p class="text-sm text-gray-600 mb-12">{{ description }}</p>
            </header>
            <section class="four-card-ft__card-container flex flex-col lg:flex-row lg:items-center">
                <div class="four-card-ft__card lg:w-1/3">
                    <card
                        :card="cards[0]"
                        class="border-t-4 border-spg-primary"
                    />
                </div>
                <div class="four-card-ft__card-double lg:w-1/3 lg:mx-6">
                    <card
                        :card="cards[1]"
                        class="border-t-4 border-red-600"
                    />
                    <card
                        :card="cards[2]"
                        class="border-t-4 border-yellow-500"
                    />
                </div>
                <div class="four-card-ft__card lg:w-1/3">
                    <card
                        :card="cards[3]"
                        class="border-t-4 border-blue-500"
                    />
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import Card from "~/components/Card";
    export default {
        components:
        {
            Card
        },
        data() {
            return {
                uppertext: 'Reliable, efficient delivery',
                title: 'Powered by Technology',
                description: 'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful',
                cards: [
                    {
                        id: 'sup_1',
                        title: 'supervisor',
                        description: 'Monitors activity to identify project roadblocks',
                        img: require('~/assets/images/four-card-ft/icon-supervisor.svg')
                    },
                    {
                        id: 'team_1',
                        title: 'Team Builder',
                        description: 'Scans our talent network to create the optimal team for your project',
                        img: require('~/assets/images/four-card-ft/icon-team-builder.svg')
                    },
                    {
                        id: 'karm_1',
                        title: 'karma',
                        description: 'Regularly evaluates our talent to ensure quality',
                        img: require('~/assets/images/four-card-ft/icon-karma.svg')
                    },
                    {
                        id: 'calc_1',
                        title: 'calculator',
                        description: 'Uses data from past projects to provide better delivery estimates',
                        img: require('~/assets/images/four-card-ft/icon-calculator.svg')
                    },
                ]
            };
        },
    }
</script>