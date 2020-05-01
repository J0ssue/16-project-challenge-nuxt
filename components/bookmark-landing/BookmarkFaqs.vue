<template>
  <section>
    <header>
      <HeaderTitle :title="faqs.title" :description="faqs.description" />
    </header>
    <main>
      <Dropdown
        :title="question.title"
        :description="question.description"
        v-for="(question, i) in faqs.questions"
        :key="i"
      />
      <button v-text="'More Info'" />
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
  }
}
</script>
