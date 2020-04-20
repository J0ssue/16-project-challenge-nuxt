<template>
    <div>
        <img
            :src="settings.img"
            alt="avatar"
        >
        <h4 v-text="settings.name" />
        <p v-text="settings.review" />
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
