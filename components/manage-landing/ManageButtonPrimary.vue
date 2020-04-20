<template>
    <button
        class="px-8 py-2 bg-manage-bright-red text-white rounded-full text-center transition duration-300 ease-in-out"
        :class="{
            'button-primary hover:bg-manage-pale-red': settings.primary,
            'button-secondary': settings.secondary,
            'manage-button-primary-shadow': settings.shadow
        }"
        v-text="settings.text"
    />
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