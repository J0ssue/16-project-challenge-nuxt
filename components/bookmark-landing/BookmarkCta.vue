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
          <div class="w-full lg:flex-1 relative">
            <input
              :class="{
                'bookmark-error': error
              }"
              class="mb-3 lg:mb-0 py-3 px-4 w-full block bg-white border-none rounded-lg text-bookmark-dark-blue focus:outline-none shadow-bookmark-btn"
              type="text"
              placeholder="Enter your email address"
              v-model="newsletter"
              @input="toggleError"
            />
            <p
              class="absolute bottom-0 text-xs"
              :class="{
                hidden: !error,
                block: error
              }"
            >
              Whoops, make sure it's an email
            </p>
          </div>
          <button
            class="py-3 bg-bookmark-soft-Red block rounded-lg text-center lg:px-5 lg:ml-3 border-2 border-bookmark-soft-Red hover:bg-white hover:text-bookmark-soft-Red transition duration-300 ease-in-out focus:outline-none"
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
  data() {
    return {
      newsletter: '',
      error: false
    }
  },
  methods: {
    submit() {
      if (this.validated()) {
        alert('your email has been received')
      } else {
        this.error = true
        return
      }
    },
    validated() {
      return this.newsletter.length > 0
    },
    toggleError() {
      this.error = false
    }
  }
}
</script>
