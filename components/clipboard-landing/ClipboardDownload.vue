<template>
  <section class="mb-32 px-10 clipboard-landing__download text-center">
    <h2 class="mb-4 text-2xl font-fam-bai-semibold" v-text="download.title" />
    <p class="mb-8 text-clipboard-grayish-blue" v-text="download.description" />
    <div>
      <button
        class="mb-5 py-3 block w-full rounded-full bg-clipboard-strong-cyan clipboard-shadow-inset text-white font-bold text-center"
        v-text="'Download for iOS'"
      />

      <button
        class="py-3 block w-full rounded-full bg-clipboard-light-blue clipboard-shadow-inset text-white font-bold text-center"
        v-text="'Download for Mac'"
      />
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
