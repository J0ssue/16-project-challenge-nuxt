<template>
  <section>
    <h2 v-text="access.title" />
    <p v-text="access.description" />
    <img :src="access.img" alt="access section image" />
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
