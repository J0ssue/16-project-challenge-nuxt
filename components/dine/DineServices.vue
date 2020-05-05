<template>
  <section class="py-32 px-8 spartan overflow-x-hidden">
    <VueSlickCarousel
      class="img-shadow mb-8"
      ref="carouselImg"
      v-bind="settings"
      :style="{
        height: document
          ? document.querySelector('.dine-service-img').offsetHeight + 'px'
          : 400 + 'px'
      }"
    >
      <div v-for="(serviceImg, i) in services" :key="i">
        <picture>
          <source
            media="(min-width: 1280px)"
            :srcset="serviceImg.img_desktop"
          />
          <source media="(min-width: 768px)" :srcset="serviceImg.img_tablet" />
          <img
            class="dine-service-img h-full"
            :src="serviceImg.img_mobile"
            alt="service image"
          />
        </picture>
      </div>
    </VueSlickCarousel>
    <div class="flex flex-col">
      <button
        class="mb-8 bg-transparent focus:outline-none button uppercase spartan-semibold"
        :class="{
          'button--active': i === activeIndex
        }"
        v-text="serviceTitle.title"
        v-for="(serviceTitle, i) in services"
        :key="i"
        @click="slideTo(i)"
      />
    </div>
    <VueSlickCarousel ref="carouselCont" v-bind="settings">
      <div class="text-center" v-for="(serviceContent, i) in services" :key="i">
        <h2 class="mb-4 dine-h2 capitalize" v-text="serviceContent.title" />
        <p class="dine-body mb-8" v-text="serviceContent.description" />
        <button
          class="py-4 px-16 bg-black border border-white uppercase text-white "
          v-text="'book a table'"
        />
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
export default {
  name: 'DineService',
  props: {
    services: {
      type: Array
    }
  },
  data() {
    return {
      activeIndex: 0,
      settings: {
        arrows: false,
        dots: false,
        fade: true,
        infinite: true,
        swipe: false,
        touchMove: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  },
  methods: {
    slideTo(index) {
      this.$refs.carouselImg.goTo(index)
      this.$refs.carouselCont.goTo(index)
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.img-shadow {
  box-shadow: 0px 10px 68px rgba(0, 0, 0, 0.7);
}

.button {
  color: rgba(76, 76, 76, 0.5);
  font-size: 14px;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
  position: relative;
  padding-bottom: 4px;
  &--active {
    color: rgba(76, 76, 76, 1);
    transform: scale(1.1);
  }
  &--active::after {
    content: '';
    display: block;
    width: 48px;
    height: 2px;
    background-color: #9e7f66;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
