<template>
    <div class="monthly">
        <header>
            <h1 class="spg-card__title text-5xl mb-10 md:mb-32 text-blue-500 text-center">Monthly</h1>
        </header>
        <main class="monthly__main bg-monthly-blue py-16 px-4">
            <header class="monthly__header mb-16">
                <h2 class="monthly__title text-center font-semibold text-2xl mb-6 text-monthly-dark-grayish-blue">{{ title }}</h2>

                <!-- toggle action button -->
                <div class="monthly__toggle-container flex items-center justify-center text-monthly-grayish-blue">
                    <p>Anually</p>
                    <button
                        @click="togglePlan"
                        class="monthly__toggle monthly-linear-gradient w-6 h-4 rounded-full relative mx-4 focus:outline-none block"
                    >
                        <button
                            class="monthly__toggle-btn absolute w-3 h-3 bg-white rounded-full focus:outline-none block"
                            :class="{'monthly--annually-active': activePlan === 'annually'}"
                        ></button>
                    </button>
                    <p>Monthly</p>
                </div>

            </header>
            <section class="monthly__deals flex flex-col lg:flex-row justify-center mx-auto">
                <price-card
                    :deal="deal"
                    :active_plan="activePlan"
                    v-for="(deal, i) in deals"
                    :key="i"
                />
            </section>
        </main>
    </div>
</template>

<script>
    import PriceCard from "~/components/PriceCard";
    export default {
        components: {
            PriceCard
        },
        data() {
            return {
                title: 'Our pricing',
                activePlan: 'monthly',
                deals: [
                    {
                        monthly: {
                            slug: 'basic_monthly',
                            title: 'basic',
                            price: 19.99,
                            features: [
                                '500 GB storage',
                                '2 Users Allowed',
                                'Send up to 3 GB'
                            ]
                        },
                        annually: {
                            slug: 'basic_annually',
                            title: 'basic',
                            price: 199.99,
                            features: [
                                '500 GB storage',
                                '2 Users Allowed',
                                'Send up to 3 GB'
                            ]
                        }
                    },
                    {
                        monthly: {
                            slug: 'professional_monthly',
                            title: 'professional',
                            price: 24.99,
                            features: [
                                '1 TB storage',
                                '5 Users Allowed',
                                'Send up to 10 GB'
                            ]
                        },
                        annually: {
                            slug: 'professional_annually',
                            title: 'professional',
                            price: 249.99,
                            features: [
                                '1 TB storage',
                                '5 Users Allowed',
                                'Send up to 10 GB'
                            ]
                        }
                    },
                    {
                        monthly: {
                            slug: 'master_monthly',
                            title: 'master',
                            price: 39.99,
                            features: [
                                '2 TB storage',
                                '10 Users Allowed',
                                'Send up to 20 GB'
                            ]
                        },
                        annually: {
                            slug: 'master_annually',
                            title: 'master',
                            price: 399.99,
                            features: [
                                '2 TB storage',
                                '10 Users Allowed',
                                'Send up to 20 GB'
                            ]
                        }
                    }
                ]
            };
        },
        methods: {
            togglePlan() {
                if (this.activePlan === 'monthly') {
                    this.activePlan = 'annually';
                } else {
                    this.activePlan = 'monthly';
                }
            }
        },
    }
</script>