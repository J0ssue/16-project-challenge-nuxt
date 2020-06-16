<template>
  <div>
    <h1 class="mb-20 text-2xl text-center font-bold text-teal-400">
      Vue Charts
    </h1>
    <Bar :chartdata="bar" :options="options" />
  </div>
</template>

<script>
import Bar from '~/components/charts/Bar'
export default {
  name: 'Charts',
  components: {
    Bar
  },
  data() {
    return {
      bar: {
        label: 'Data One',
        backgroundColor: 'red',
        data: [40, 20, 50]
      },
      options: {
        responsive: true
      }
    }
  }
}
</script>
