<template>
    <div class="url-shortener">
        <form @submit.prevent="shortenUrl">
            <input
                type="text"
                placeholder="Shorten a link here..."
            >
            <button type="submit">Shorten it!</button>
        </form>
        <div class="url-shortener__list">
            <url-card
                v-for="(url,i) in urls"
                :key="i"
                :url="url"
                :copiedUrls="copiedUrls"
            />
        </div>
    </div>
</template>

<script>
    import UrlCard from "~/components/UrlCard";
    export default {
        components: {
            UrlCard
        },
        data() {
            return {
                form: {
                    url: ''
                },
                copiedUrls: [],
                urls: [
                    {
                        id: 1,
                        url: 'https://hello.com',
                        short: 'hlskd'
                    },
                    {
                        id: 2,
                        url: 'https://world.com',
                        short: 'hslkdjf'
                    }
                ]
            };
        },
        methods: {
            shortenUrl() {
                console.log('shorten');
            }
        },
    }
</script>