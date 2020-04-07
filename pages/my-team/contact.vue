<template>
    <div class="myteam-contact">
        <header>
            <h1 v-text="contact.title" />
            <p v-text="contact.description" />
        </header>
        <section>
            <form @submit.prevent="submit">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                    >
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Email Address"
                    >
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Company Name"
                    >
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                    >
                </div>
                <div>
                    <textarea placeholder="Message"></textarea>
                </div>
                <button
                    type="submit"
                    v-text="'submit'"
                />
            </form>
        </section>
    </div>
</template>

<script>
    import db from "~/helpers/my-team-db";
    export default {
        layout: 'my-team',
        data() {
            return {
                contact: db.contact
            };
        },
        methods: {
            submit() {
                console.log('hello world');
            }
        },
    }
</script>