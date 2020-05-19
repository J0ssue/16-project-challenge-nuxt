<template>
  <section>
    <header>
      <h2 v-text="workflow.title" />
      <p v-text="workflow.description" />
    </header>
    <!-- cards -->
    <div>
      <div v-for="(work, i) in workflow.workflow" :key="i">
        <img :src="work.img" alt="workflow image" />
        <h3 v-text="work.title" />
        <p v-text="work.description" />
      </div>
    </div>
    <!-- brands -->
    <div>
      <div v-for="(icon, i) in workflow.brands" :key="i">
        <img :src="icon" alt="brand icon image" />
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
