<template>
    <svg
        :class="{
            'stroke-current text-dark-gray-light-mode-input': options.gray,
            'stroke-current text-black': options.black,
            'w-4 h-4': options.sm
        }"
        xmlns='http://www.w3.org/2000/svg'
        width='512'
        height='512'
        viewBox='0 0 512 512'
    >
        <polyline
            class="icon-arrow"
            points='244 400 100 256 244 112'
        />
        <line
            x1='120'
            y1='256'
            x2='412'
            y2='256'
            class="icon-arrow"
        /></svg>
</template>

<script>
    export default {
        props: {
            options: { type: Object }
        }
    }
</script>

<style lang="scss" scoped>
    .icon-arrow {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 48px;
    }
</style>