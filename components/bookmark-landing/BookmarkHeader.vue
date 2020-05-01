<template>
  <header class="mb-32">
    <div class="mb-12">
      <IllustrationComposition :img="header.hero_img" :resize="false" />
    </div>
    <div class="px-6">
      <HeaderTitle
        :titleBig="true"
        :title="header.title"
        :description="header.description"
      />
      <div class="mt-8 flex justify-center">
        <button
          class="bookmark-btn-blue-sm mr-2 rubik-bold"
          v-text="'Get it on Chrome'"
        />
        <button
          class="bookmark-btn-sm ml-2 rubik-bold"
          v-text="'Get it on Firefox'"
        />
      </div>
    </div>
  </header>
</template>

<script>
import IllustrationComposition from './BookmarkIllustrationComposition'
import HeaderTitle from './BookmarkHeaderTitle'
export default {
  components: {
    IllustrationComposition,
    HeaderTitle
  },
  props: {
    header: {
      type: Object
    }
  }
}
</script>
