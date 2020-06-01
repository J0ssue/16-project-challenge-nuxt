<template>
  <section class="mb-32 px-10 text-center">
    <h2
      class="mb-3 font-fam-bai-semibold text-clipboard-dark-grayish-blue text-2xl"
      v-text="access.title"
    />
    <p class="mb-10 text-clipboard-grayish-blue" v-text="access.description" />
    <img class="md:mx-auto" :src="access.img" alt="access section image" />
  </section>
</template>

<script>
export default {
  name: 'ClipboardAccess',
  props: {
    access: {
      type: Object,
      required: true
    }
  }
}
</script>
