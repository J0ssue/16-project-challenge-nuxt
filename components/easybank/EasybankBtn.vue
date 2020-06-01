<template>
    <button
        v-on="$listeners"
        class="easybank-btn px-6 py-2 rounded-full capitalize text-bank-very-light-gray"
        v-text="text"
    />
</template>

<script>
    export default {
        props: {
            text: {
                type: String
            }
        }
    }
</script>

<style lang="scss">
    .easybank-btn {
        background-image: linear-gradient(
            to right bottom,
            hsl(136, 65%, 51%),
            hsl(192, 70%, 51%)
        );
    }
</style>