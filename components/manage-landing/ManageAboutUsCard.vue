<template>
    <div class="manage-about-us-card">
        <div>
            <slot name="button-desktop-display"></slot>
        </div>
        <div>
            <div>
                <div class="mb-8 flex items-center bg-manage-pale-red rounded-l-full">
                    <slot name="button-mobile-display"></slot>
                    <h4
                        class="pl-4 flex-1 text-manage-dark-blue be-nam-bold"
                        v-text="settings.title"
                    />
                </div>
                <p
                    class="text-manage-dark-grayish-blue"
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