<template>
    <div class="statistics-card relative bg-white rounded-lg px-8 pb-8">
        <div class="statistics-card--img-circle bg-shortly-primary-violet mx-auto rounded-full p-4">
            <img
                :src="statistic.img"
                alt="statistic image"
            >
        </div>
        <h3 class="font-bold capitalize text-xl mb-4">{{ statistic.title }}</h3>
        <p class="text-sm text-shortly-neutral-gray">{{ statistic.description }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            statistic: {
                type: Object
            }
        }
    }
</script>
