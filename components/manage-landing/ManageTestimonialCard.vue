<template>
    <div class="manage-testimonial-card px-6 pb-10 bg-manage-gray text-center">
        <img
            class="manage-testimonial-card__avatar mx-auto inline-block"
            :src="settings.img"
            alt="avatar"
        >
        <h4 v-text="settings.name" />
        <p
            class="text-manage-dark-grayish-blue"
            v-text="settings.review"
        />
    </div>
</template>

<script>
    export default {
        props: {
            settings: {
                type: Object
            }
        }
    }
</script>
