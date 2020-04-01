<template>
    <div
        class="shortly-dropdown bg-shortly-primary-violet px-4 py-8 rounded-lg absolute"
        :class="{'shortly-dropdown--open': isDropdownOpen}"
    >
        <div class="shortly-dropdonwn__menu border-b border-shortly-neutral-gray-violet pb-6 mb-6">
            <nuxt-link
                class="shortly-dropdown-link"
                to=""
                @click.native="toggleDropdown"
            >features</nuxt-link>
            <nuxt-link
                class="shortly-dropdown-link my-6"
                to=""
                @click.native="toggleDropdown"
            >pricing</nuxt-link>
            <nuxt-link
                class="shortly-dropdown-link"
                to=""
                @click.native="toggleDropdown"
            >resources</nuxt-link>
        </div>
        <div class="shortly-dropdown__controls">
            <nuxt-link
                class="shortly-dropdown-link mb-6"
                to=""
                @click.native="toggleDropdown"
            >login</nuxt-link>
            <button
                class="shortly-primary-btn mx-auto focus:outline-none"
                @click="toggleDropdown"
            >sign up</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isDropdownOpen: {
                type: Boolean
            }
        },
        methods: {
            toggleDropdown() {
                this.$emit('toggleDropdown');
            }
        },
    }
</script>