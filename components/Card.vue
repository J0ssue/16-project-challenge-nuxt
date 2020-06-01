<template>
    <div class="card shadow-xl rounded pt-4 pb-40 px-4 mb-6 relative lg:pb-0 lg:h-64">
        <h3 class="font-bold capitalize text-lg">{{ card.title }}</h3>
        <p class="text-sm text-gray-500">{{ card.description }}</p>
        <img
            class="card__img"
            :src="card.img"
            alt="card image"
        >
    </div>
</template>

<script>
    export default {
        props: {
            card: {
                type: Object
            },
        }
    }
</script>
