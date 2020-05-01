<template>
  <header class="bookmark-landing__header">
    <div>
      <IllustrationComposition :img="header.hero_img" :resize="false" />
    </div>
    <div>
      <HeaderTitle :title="header.title" :description="header.description" />
      <div>
        <button v-text="'Get it on Chrome'" />
        <button v-text="'Get it on Firefox'" />
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
