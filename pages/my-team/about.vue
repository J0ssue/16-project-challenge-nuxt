<template>
    <div class="myteam-about">
        <header>
            <h1 v-text="about.title" />
            <p v-text="about.description" />
        </header>
        <main>
            <section>
                <h2 v-text="about.directors.title" />
                <div>
                    <div
                        v-for="(director, i) in about.directors.directors"
                        :key="i"
                    >
                        <myteam-directors-card :settings="{
                                slug: director.slug,
                                fb: director.fb,
                                in: director.in,
                                avatar: director.avatar,
                                name: director.name,
                                back: director.back,
                                job: director.job,
                                closeIcon: about.directors.closeIcon,
                                plusIcon: about.directors.plusIcon,
                                twIcon: about.directors.twIcon,
                                inIcon: about.directors.inIcon,
                            }" />
                    </div>
                </div>
            </section>
            <section>
                <h2 v-text="about.clients.title" />
                <div>
                    <div
                        v-for="(client, i) in about.clients.clients"
                        :key="i"
                    >
                        <img
                            :src="client"
                            alt="client image"
                        >
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import db from "~/helpers/my-team-db";
    import MyteamDirectorsCard from "~/components/myteam/MyteamDirectorsCard";
    export default {
        layout: 'my-team',
        components: {
            MyteamDirectorsCard
        },
        data() {
            return {
                about: db.about
            };
        },
    }
</script>