<template>
  <section class="px-6 mb-32">
    <header class="mb-16">
      <HeaderTitle :title="faqs.title" :description="faqs.description" />
    </header>
    <main class="bkfaqs-main mx-auto">
      <Dropdown
        :activeSlug="activeDropdown"
        :slug="question.slug"
        :title="question.title"
        :description="question.description"
        v-for="(question, i) in faqs.questions"
        :key="i"
        @toggleDropdown="toggleDropdown"
      />
      <button
        class="bookmark-btn-blue-md block mx-auto mt-10 border-2 border-bookmark-soft-blue hover:bg-white hover:text-bookmark-soft-blue transition duration-300 ease-in-out"
        v-text="'More Info'"
      />
    </main>
  </section>
</template>

<script>
import HeaderTitle from './BookmarkHeaderTitle'
import Dropdown from './BookmarkFaqDropdown'
export default {
  components: {
    HeaderTitle,
    Dropdown
  },
  props: {
    faqs: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeDropdown: ''
    }
  },
  methods: {
    toggleDropdown(slug) {
      console.log(slug)
      this.activeDropdown = slug
    }
  }
}
</script>
