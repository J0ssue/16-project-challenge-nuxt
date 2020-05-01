<template>
  <section>
    <header>
      <p v-text="cta.uppertext" />
      <h2 v-text="cta.title" />
    </header>
    <main>
      <form @submit.prevent="submit">
        <div>
          <input type="text" placeholder="Enter your email address" />
          <button v-text="'Contact us'" />
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
