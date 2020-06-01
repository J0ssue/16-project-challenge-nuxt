<template>
    <div
        v-on="$listeners"
        class="pill text-xs font-bold inline-block shadow-sm flex items-center"
        :class="{
            'uppercase': rounded,
            'text-jobs-cyan': squared,
            'text-white': rounded,
            'bg-black': !blue && !squared,
            'bg-jobs-cyan': blue,
            'rounded-full': rounded,
            'rounded-sm': squared,
            'bg-jobs-gray-cyan-one': squared,
        }"
    >
        <span class="inline-block py-1 px-2">
            {{ text }}
        </span>
        <span
            v-if="removeBtn"
            @click="removeTag(text)"
            class="flex items-center justify-content px-1 rounded-r-sm bg-jobs-cyan self-stretch hover:bg-black cursor-pointer transition duration-300 ease-in-out"
        >
            <img
                src="/jobs-listing-images/icon-remove.svg"
                alt="remove icon"
            >
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            rounded: {
                type: Boolean
            },
            squared: {
                type: Boolean
            },
            blue: {
                type: Boolean
            },
            text: {
                type: String
            },
            removeBtn: {
                type: Boolean
            }
        },
        methods: {
            removeTag(tag) {
                this.$emit('removeTag', tag);
            }
        },
    }
</script>