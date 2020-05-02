<template>
  <section class="px-6 py-16 bg-bookmark-soft-blue text-white text-center">
    <header>
      <p class="mb-2 text-xs tracking-lg-wide lg:mb-8" v-text="cta.uppertext" />
      <h2
        class="mb-6 text-2xl leading-snug lg:w-64 lg:mx-auto"
        v-text="cta.title"
      />
    </header>
    <main>
      <form @submit.prevent="submit">
        <div class="cta-form-group lg:flex lg:justify-center lg:mx-auto">
          <input
            class="mb-3 py-3 px-4 w-full block bg-white border-none rounded-lg shadow-bookmark-btn lg:mb-0 lg:flex-1"
            type="text"
            placeholder="Enter your email address"
          />
          <button
            class="py-3 bg-bookmark-soft-Red block rounded-lg text-center lg:px-3 lg:ml-3"
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
