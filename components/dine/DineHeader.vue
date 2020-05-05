<template>
  <header class="dine-header bg-black text-white text-center px-8 pb-32 pt-64">
    <div class="mb-6">
      <img class="mx-auto" :src="header.logo" alt="dine logo" />
    </div>
    <div>
      <h1 class="dine-h1 mb-6" v-html="header.title" />
      <p class="dine-body mb-6">{{ header.description }}</p>
      <button
        class="py-4 px-16 bg-black border border-white uppercase text-white "
        v-text="'book a table'"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'DineHeader',
  props: {
    header: {
      type: Object
    }
  }
}
</script>
