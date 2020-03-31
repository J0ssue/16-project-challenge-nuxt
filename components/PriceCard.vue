<template>
    <div
        class="price-card p-6 shadow-price-card bg-white rounded-lg mx-auto lg:mx-0"
        :class="{
            'lg:transform': isCardProfessional,
            'lg:scale-110': isCardProfessional,
            'text-black': !isCardProfessional,
            'text-white': isCardProfessional,
            'monthly-linear-gradient': isCardProfessional  
        }"
    >

        <header class="price-card__header">
            <h4
                class="capitalize font-semibold text-sm"
                :class="{
                    'text-monthly-dark-grayish-blue': !isCardProfessional,
                    'text-white': isCardProfessional
                }"
            >{{ deal[active_plan].title }}</h4>
            <h2 class="font-bold text-3xl flex items-center justify-center pb-6 mb-4 border-b tracking-wider lg:text-5xl"> <span class="text-lg">$</span>{{ deal[active_plan].price }}</h2>
        </header>

        <ul>
            <li
                class="border-b mb-4 pb-4 text-sm"
                :class="{
                    'text-white': isCardProfessional,
                    'text-monthly-dark-grayish-blue': !isCardProfessional,
                }"
                v-for="(feature,i) in deal[active_plan].features"
                :key="i"
            >{{ feature }}</li>
        </ul>

        <!-- button slot -->
        <nuxt-link
            to="#"
            class="price-card__btn tracking-wider w-full block rounded-lg py-2 mt-8 text-sm uppercase font-bold"
            :class="{
                'price-card--btn-odd': isCardProfessional,
                'price-card--btn-normal': !isCardProfessional,
                'text-monthly-purple': isCardProfessional,
                'text-white': !isCardProfessional,
                'bg-white': isCardProfessional,
                'monthly-linear-gradient': !isCardProfessional,  
            }"
        >learn more</nuxt-link>
    </div>
</template>

<script>
    export default {
        props: {
            deal: {
                type: Object
            },
            active_plan: {
                type: String
            }
        },
        computed: {
            isCardProfessional() {
                return this.deal[this.active_plan].slug === 'professional_monthly' || this.deal[this.active_plan].slug === 'professional_annually';
            }
        },
    }
</script>