<template>
    <div class="benefits-card text-center text-white md:flex md:items-center md:text-left">
        <img
            class="mx-auto mb-6 md:m-0 md:mr-6"
            :src="options.img"
            alt="image"
        >
        <div>
            <p
                class="mb-4 card-title capitalize livvic-semibold text-myteam-light-coral"
                v-text="options.title"
            />
            <p
                class="benefits-card__description paragraph mx-auto benefits-card-text-width"
                v-text="options.description.description || ''"
                v-if="options.description.show"
            />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Object
            }
        }
    }
</script>
