<template>
  <section class="clipboard-landing__snippets mb-32 px-10 text-center">
    <header class="mb-16">
      <h2
        class="mb-4 text-clipboard-dark-grayish-blue font-fam-bai-semibold text-2xl"
        v-text="snippets.title"
      />
      <p class="text-clipboard-grayish-blue" v-text="snippets.description" />
    </header>
    <div>
      <div class="mb-10">
        <img :src="snippets.img" alt="snippets image" />
      </div>
      <div>
        <div
          :class="{
            'mb-12': i + 1 !== snippets.snippets.length
          }"
          v-for="(snippet, i) in snippets.snippets"
          :key="i"
        >
          <h3
            class="mb-2 text-clipboard-dark-grayish-blue text-xl font-fam-bai-semibold"
            :class="{
              capitalize: i !== 1
            }"
            v-text="snippet.title"
          />
          <p class="text-clipboard-grayish-blue" v-text="snippet.description" />
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
