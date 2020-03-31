<template>
    <div class="url-card">
        <div class="url-card__header">
            {{ url.url }}
        </div>
        <div class="url-card__body">{{ url.short }}</div>
        <button class="url-card__btn">copy</button>
    </div>
</template>

<script>
    export default {
        props: {
            url: {
                type: Object
            },
            copiedUrls: {
                type: Array
            }
        }
    }
</script>