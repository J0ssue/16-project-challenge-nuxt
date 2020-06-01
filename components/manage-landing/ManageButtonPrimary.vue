<template>
    <button
        class="py-2 px-8 rounded-full text-center transition duration-300 ease-in-out"
        :class="{
            'button-primary bg-manage-bright-red text-white hover:bg-manage-pale-red': settings.primary,
            'button-secondary py-3 bg-manage-pale-red text-manage-bright-red font-semibold text-sm': settings.secondary,
            'manage-button-primary-shadow': settings.shadow,
            'shadow-manage-button-secondary': settings.shadowSecondary,
            'manage-button-small px-4': settings.small
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