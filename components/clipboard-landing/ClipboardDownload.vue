<template>
  <section class="clipboard-landing__download">
    <h2 v-text="download.title" />
    <p v-text="download.description" />
    <div>
      <button v-text="'Download for iOS'" />
      <button v-text="'Download for Mac'" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ClipboardDownload',
  props: {
    download: {
      type: Object,
      required: true
    }
  }
}
</script>
