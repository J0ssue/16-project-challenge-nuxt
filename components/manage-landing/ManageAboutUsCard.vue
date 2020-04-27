<template>
    <div class="manage-about-us-card md:flex">
        <div>
            <slot name="button-desktop-display"></slot>
        </div>
        <div class="md:ml-6">
            <div>
                <div class="mb-8 flex items-center bg-manage-pale-red rounded-l-full md:bg-white">
                    <slot name="button-mobile-display"></slot>
                    <h4
                        class="pl-4 flex-1 text-manage-dark-blue be-nam-bold md:pl-0"
                        v-text="settings.title"
                    />
                </div>
                <p
                    class="manage-about-us-card__description text-manage-dark-grayish-blue"
                    v-text="settings.description"
                />
            </div>
        </div>
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