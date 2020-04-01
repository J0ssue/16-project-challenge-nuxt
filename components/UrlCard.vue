<template>
    <div class="url-card rounded-lg lg:py-2 lg:flex lg:items-center">
        <div class="url-card__header p-4 border-b border-1 border-gray-400 italic lg:border-none lg:flex-1">
            {{ getUrl }}
        </div>
        <input
            ref="shortInput"
            class="url-card__body px-4 pt-4  pb-1 text-shortly-primary-cyan bg-transparent focus:outline-none"
            v-model="url.short"
            readonly
        />
        <div class="px-4 pb-4 lg:pb-0">
            <button
                @click="copy(url.hashid)"
                class="url-card__btn shortly-primary-btn-sqr py-3 lg:py-2 lg:px-6 focus:outline-none"
                :class="{'bg-shortly-primary-violet pointer-events-none': url.copied}"
                :disabled="url.copied"
            >{{ url.copied === true ? 'copied!' : 'copy' }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            url: {
                type: Object
            },
        },
        methods: {
            copy(id) {
                this.$store.dispatch('urlStore/copy', id);
                let shortUrl = this.$refs.shortInput;
                shortUrl.select();
                shortUrl.setSelectionRange(0, 99999); /*For mobile devices*/
                document.execCommand("copy");

            }
        },
        computed: {
            getUrl() {
                if (this.url.url.length >= 50) {
                    return this.url.url.substring(1, 50) + '...';
                } else {
                    return this.url.url;
                }
            }
        },
    }
</script>