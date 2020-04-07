<template>
    <div>
        <!-- visible card -->
        <div>
            <div>
                <img
                    :src="settings.avatar"
                    alt="avatar"
                >
            </div>
            <p v-text="settings.name" />
            <p><small>{{ settings.job }}</small></p>
        </div>
        <!-- popup card -->
        <div>
            <p v-text="settings.name" />
            <p><small>{{ settings.back }}</small></p>
            <div>
                <a
                    :href="settings.fb"
                    target="_blank"
                >
                    <img
                        :src="settings.twIcon"
                        alt="social icon"
                    >
                </a>
                <a
                    :href="settings.in"
                    target="_blank"
                >
                    <img
                        :src="settings.inIcon"
                        alt="social icon"
                    >
                </a>
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