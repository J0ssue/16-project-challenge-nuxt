<template>
  <header class="mb-32 clipboard-landing__header px-10 pt-32 text-center">
    <img class="block mb-20 mx-auto" :src="header.img" alt="logo image" />
    <h1
      class="mb-4 text-3xl text-clipboard-dark-grayish-blue font-fam-bai-semibold"
      v-text="header.title"
    />
    <p class="mb-8 text-clipboard-grayish-blue" v-text="header.description" />
    <div class="md:flex md:items-center md:justify-center">
      <button
        class="mb-5 py-3 block w-full rounded-full bg-clipboard-strong-cyan clipboard-shadow-inset text-white font-bold text-center md:mb-0 md:mr-2 md:w-auto md:inline-block md:px-10 hover:opacity-50"
        v-text="'Download for iOS'"
      />

      <button
        class="py-3 block w-full rounded-full bg-clipboard-light-blue clipboard-shadow-inset text-white font-bold text-center md:ml-2 md:inline-block md:w-auto md:px-10 hover:opacity-50"
        v-text="'Download for Mac'"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'ClipboardHeader',
  props: {
    header: {
      type: Object,
      required: true
    }
  }
}
</script>
