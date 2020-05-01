<template>
  <section class="px-6 py-16 bg-bookmark-soft-blue text-white text-center">
    <header>
      <p class="mb-2 text-xs tracking-lg-wide" v-text="cta.uppertext" />
      <h2 class="mb-6 text-2xl leading-snug" v-text="cta.title" />
    </header>
    <main>
      <form @submit.prevent="submit">
        <div>
          <input
            class="mb-3 py-3 px-4 w-full block bg-white border-none rounded-lg shadow-bookmark-btn"
            type="text"
            placeholder="Enter your email address"
          />
          <button
            class="py-3 bg-bookmark-soft-Red block w-full rounded-lg text-center"
            v-text="'Contact us'"
          />
        </div>
      </form>
    </main>
  </section>
</template>

<script>
export default {
  props: {
    cta: {
      type: Object,
      required: true
    }
  },
  methods: {
    submit() {
      console.log('hello world')
    }
  }
}
</script>
