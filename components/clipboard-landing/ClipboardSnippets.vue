<template>
  <section class="clipboard-landing__snippets">
    <header>
      <h2 v-text="snippets.title" />
      <p v-text="snippets.description" />
    </header>
    <div>
      <div>
        <img :src="snippets.img" alt="snippets image" />
      </div>
      <div>
        <div v-for="(snippet, i) in snippets.snippets" :key="i">
          <h3 v-text="snippet.title" />
          <p v-text="snippet.description" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ClipboardSnippets',
  props: {
    snippets: {
      type: Object,
      required: true
    }
  }
}
</script>
