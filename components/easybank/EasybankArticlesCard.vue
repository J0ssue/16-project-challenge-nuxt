<template>
    <div class="easybank-article-card bg-white rounded-lg shadow-lg lg:h-full">
        <header class="lg:pt-aspect-ratio relative">
            <img
                class="inline-block rounded-t-lg w-full h-full lg:absolute top-0 left-0"
                :src="article.img"
                alt="article image"
            >
        </header>
        <main class="bg-white p-6 rounded-b-lg">
            <p
                class="mt-6text-xs"
                v-text="article.uppertext"
            />
            <h4
                class="my-3 text-lg text-bank-dark-blue leading-tight"
                v-text="article.title"
            />
            <p
                class="text-sm"
                v-text="article.description"
            />
        </main>
    </div>
</template>

<script>
    export default {
        props: {
            article: {
                type: Object
            }
        }
    }
</script>
<style lang="css">
    .easybank-article-card {
        height: 100%;
    }
</style>