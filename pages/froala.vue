<template>
  <div class="pt-32">
    <h1 class="mb-20 text-2xl text-center font-bold text-gray-600">
      Implementation of Froala Text Editor for Nuxt.js
    </h1>
    <froala :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        height: 200,
        events: {
          'froalaEditor.initialized': function() {
            console.log('initialized')
          }
        }
      },
      model: 'Edit Your Content Here!'
    }
  }
}
</script>
