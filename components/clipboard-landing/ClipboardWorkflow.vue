<template>
  <section class="mb-32 px-10 text-center">
    <header class="mb-20">
      <h2
        class="mb-2 text-clipboard-dark-grayish-blue font-fam-bai-semibold text-2xl"
        v-text="workflow.title"
      />
      <p class="text-clipboard-grayish-blue" v-text="workflow.description" />
    </header>
    <!-- cards -->
    <div class="mb-32 lg:flex">
      <div
        :class="{
          'mb-12 lg:mb-0': i + 1 !== workflow.workflow.length
        }"
        v-for="(work, i) in workflow.workflow"
        :key="i"
      >
        <img class="mx-auto mb-8" :src="work.img" alt="workflow image" />
        <h3
          class="mb-4 text-xl text-clipboard-dark-grayish-blue font-fam-bai-semibold"
          v-text="work.title"
        />
        <p class="text-clipboard-grayish-blue" v-text="work.description" />
      </div>
    </div>
    <!-- brands -->
    <div class="lg:flex lg:items-center lg:justify-between">
      <div v-for="(icon, i) in workflow.brands" :key="i">
        <img
          class="mx-auto"
          :class="{
            'mb-16 lg:mb-0': i + 1 !== workflow.brands.length
          }"
          :src="icon"
          alt="brand icon image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ClipboardWorkflow',
  props: {
    workflow: {
      type: Object,
      required: true
    }
  }
}
</script>
