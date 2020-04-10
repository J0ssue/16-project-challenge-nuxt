<template>
    <div class="myteam-drawer fixed right-0 top-0 bg-myteam-police-blue text-white px-10 pt-20">
        <nuxt-link
            to="/my-team"
            class="text-white livvic-semibold hover:text-myteam-light-coral block mb-8 transition duration-300 ease-in-out"
            v-text="'home'"
        />
        <nuxt-link
            to="/my-team/about"
            class="text-white livvic-semibold hover:text-myteam-light-coral block mb-16 transition duration-300 ease-in-out"
            v-text="'about'"
        />
        <nuxt-link
            class="bg-transparent border-2 border-white rounded-full w-full block text-center py-2 hover:bg-white hover:text-myteam-sacramento-state-green transition duration-300 ease-in-out"
            to="/my-team/contact"
            v-text="'contact'"
        />
    </div>
</template>

<script>
    export default {

    }
</script>