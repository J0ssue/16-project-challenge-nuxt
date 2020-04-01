<template>
    <div class="url-shortener mb-6">
        <form
            @submit.prevent="shortenUrl"
            class="url-shortener__form bg-shortly-primary-violet rounded-lg p-6 mb-8 lg:p-10 lg:flex lg:items-center relative"
        >
            <input
                ref="shortener"
                class="block w-full p-4 rounded-lg mb-4 focus:outline-none lg:flex-1 lg:mr-4 lg:mb-0 transition duration-300 ease"
                @keyup="clearError"
                @paste="addValue"
                :class="{
                    'border border-3 border-shortly-secondary-red': error
                }"
                type="text"
                placeholder="Shorten a link here..."
            >
            <button
                class="shortly-primary-btn-sqr w-full lg:w-1/6 focus:outline-none"
                type="submit"
            >Shorten it!</button>
            <span
                v-show="error"
                class="url-shortener__error-msg text-sm italic text-shortly-secondary-red transition duration-300 ease"
            >{{ feedback }}</span>
        </form>
        <div
            class="url-shortener__list"
            v-if="urls.length > 0"
        >
            <url-card
                v-for="(url,i) in urls"
                :key="i"
                :url="url"
            />
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import UrlCard from "~/components/UrlCard";
    export default {
        components: {
            UrlCard
        },
        data() {
            return {
                error: false,
                feedback: '',
                form: {
                    url: ''
                },
            };
        },
        methods: {
            clearInput() {
                let id = setTimeout(() => {
                    this.form.url = '';
                    this.$refs.shortener.value = '';
                    clearTimeout(id);
                }, 500);
            },
            addValue(evt) {
                let id = setTimeout(() => {
                    this.form.url = evt.target.value;
                    clearTimeout(id);
                }, 500);
            },
            clearError() {
                this.error = false;
                this.feedback = '';
            },
            async shortenUrl() {
                let urlShort = this.$api.get('urlShortener');
                if (this.form.url.length === 0) {
                    this.feedback = 'Please add a link';
                    this.error = true;
                    return;
                } else {
                    try {
                        let { data } = await urlShort.create(this.form.url);
                        Object.assign(data, { short: `https://rel.ink/${data.hashid}`, copied: false });
                        this.$store.dispatch('urlStore/addUrl', data);
                        this.clearInput();
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        },
        computed: {
            ...mapState({
                urls: state => state.urlStore.urls
            })
        },
    }
</script>