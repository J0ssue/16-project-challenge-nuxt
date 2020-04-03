<template>
    <div class="base-dropdown relative w-dropdown-width">
        <button
            class="px-6 py-4 w-full bg-white shadow-dropdown rounded-lg flex items-center justify-between focus:outline-none text-sm font-thin"
            @click="toggleDropdown"
        >
            <span
                class="cursor-pointer"
                v-text="activeOption"
            />
            <slot></slot>
        </button>
        <ul
            class="base-dropdown__tooltip bg-white px-6 py-4 w-full rounded-lg shadow-dropdown"
            :class="{
                'base-dropdown--tooltip-open': isDropdownOpen,
                'base-dropdown--tooltip-close': !isDropdownOpen
                }"
        >
            <li
                v-for="(option, i) in settings.options"
                :key="i"
            >
                <button
                    v-text="option"
                    class="py-1 inline-block w-full text-left capitalize text-sm font-thin focus:outline-none"
                    @click="toggleActiveOption(option)"
                />
            </li>
        </ul>
    </div>
</template>

<script>
    /*
        *@settings (Object),
        *@settings.options (Array),
        *@slot is used for dropdown (Icon) button
    */
    export default {
        props: {
            settings: {
                type: Object
            }
        },
        data() {
            return {
                activeOption: 'Filter by Region',
                isDropdownOpen: false
            };
        },
        methods: {
            toggleDropdown() {
                this.isDropdownOpen = !this.isDropdownOpen;
            },
            toggleActiveOption(option) {
                this.activeOption = option;
                this.toggleDropdown();
                this.$emit('activeOption', { searchBy: 'region', keyword: option });
            }
        },
    }
</script>