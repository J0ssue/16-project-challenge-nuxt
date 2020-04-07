<template>
    <div class="testimonials-card relative text-white text-center">
        <p
            class="testimonials-card__quote mx-auto mb-6 livvic-semibold"
            v-text="settings.description"
        />
        <div>
            <p
                class="mb-1 capitalize livvic-bold text-myteam-rapture-blue"
                v-text="settings.name"
            />
            <p class="mb-6 livvic-medium-italic capitalize"><small>{{settings.job}}</small></p>
            <div class="testimonials-card__avatar mx-auto relative rounded-full border-2 border-myteam-rapture-blue">
                <img
                    class="absolute top-0 left-0 w-full h-full rounded-full"
                    :src="settings.icon"
                    alt="avatar icon"
                >
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