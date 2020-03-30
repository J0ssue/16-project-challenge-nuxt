<template>
    <div class="px-6 md:px-0">
        <header>
            <h1 class="spg-card__title text-5xl mb-10 md:mb-32 text-blue-500 text-center">Single Price Grid</h1>
        </header>
        <main class="spg-card shadow-spg-card flex flex-col md:flex-row md:flex-wrap md:w-spg-card-width mx-auto rounded">
            <section class="w-full">
                <div class="spg-card__main py-8 px-6">
                    <h4 class="spg-card__main-title text-2xl tracking-wider text-spg-primary">{{ title }}</h4>
                    <p class="spg-card__main-subtitle text-spg-green my-6">{{ subtitle }}</p>
                    <p class="spg-card__main-description text-gray-500 text-sm">{{ main_description }}</p>
                </div>
            </section>
            <section class="w-full md:w-2/4 rounded-bl bg-spg-primary text-white py-8 px-6">
                <h4 class="spg-card__subscription-title font-bold mb-6">{{ subscription.title }}</h4>
                <p class="flex items-center mb-2"><span class="tracking-wider text-3xl mr-2">${{ subscription.price }}</span> <span class="text-white opacity-50">per month</span></p>
                <p class="text-sm mb-6">{{ subscription.description }}</p>
                <button class="bg-spg-green hover:bg-gray-200 transition ease-in-out rounded text-center w-full inline-block py-4 capitalize shadow-spg-card focus:outline-none">Sign up</button>
            </section>
            <section class="w-full md:w-2/4 rounded-br bg-spg-secondary text-white py-8 px-6">
                <h4 class="spg-card__whyus-title text-bold text-xl capitalize mb-4">{{ why_us.title }}</h4>
                <p
                    class="text-white opacity-75 text-sm"
                    v-for="(reason, i) in why_us.description"
                    :key="i"
                >{{ reason }}</p>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Join our community',
                subtitle: '30-day, hassle-free money back guarantee',
                main_description: 'Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills',
                subscription: {
                    title: 'Monthly Subscription',
                    price: 29,
                    description: 'Full access for less than $1 a day',
                },
                why_us: {
                    title: 'why us',
                    description: ['Tutorials by industry experts', 'Peer & expert code review', 'Codiing exercises', 'Access to our GitHub repos', 'Community forum', 'Flashcard decks', 'New videos every week']
                }
            };
        },
    }
</script>