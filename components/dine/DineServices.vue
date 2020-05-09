<template>
  <section
    class="dine-services py-32 px-8 spartan overflow-x-hidden md:px-20 xl:px-24 xl:flex xl:items-center md:relative"
  >
    <div class="gray-pattern hidden md:block">
      <img
        src="/dine/patterns/pattern-curve-top-right.svg"
        alt="curved pattern"
      />
    </div>
    <div class="lines-pattern hidden md:block">
      <img src="/dine/patterns/pattern-lines.svg" alt="line patterns" />
    </div>
    <client-only>
      <VueSlickCarousel
        class="img-shadow mb-8 xl:w-6/12 xl:relative xl:z-10"
        ref="carouselImg"
        v-bind="settings"
      >
        <div v-for="(serviceImg, i) in services" :key="i">
          <picture>
            <source
              media="(min-width: 1280px)"
              :srcset="serviceImg.img_desktop"
            />
            <source
              media="(min-width: 768px)"
              :srcset="serviceImg.img_tablet"
            />
            <img
              class="dine-service-img h-full w-full"
              :src="serviceImg.img_mobile"
              alt="service image"
            />
          </picture>
        </div>
      </VueSlickCarousel>
    </client-only>
    <!-- controls -->
    <div class="flex flex-col md:flex-row md:justify-between md:mb-8 xl:hidden">
      <button
        class="mb-8 bg-transparent focus:outline-none button uppercase spartan-semibold md:mb-0"
        :class="{
          'button--active': i === activeIndex
        }"
        v-text="serviceTitle.title"
        v-for="(serviceTitle, i) in services"
        :key="i"
        @click="slideTo(i)"
      />
    </div>
    <!-- controls end -->

    <div class="xl:w-6/12 xl:pl-20">
      <client-only>
        <VueSlickCarousel ref="carouselCont" v-bind="settings" class="xl:mb-20">
          <div
            class="text-center xl:text-left"
            v-for="(serviceContent, i) in services"
            :key="i"
          >
            <h2 class="mb-4 dine-h2 capitalize" v-text="serviceContent.title" />
            <p class="dine-body mb-8" v-text="serviceContent.description" />
            <button
              class="py-4 px-16 bg-black border border-white uppercase text-white "
              v-text="'book a table'"
            />
          </div>
        </VueSlickCarousel>
      </client-only>
      <!-- controls -->
      <div
        class="flex flex-col md:flex-row md:justify-between md:mb-8 hidden xl:flex xl:flex-col xl:items-start"
      >
        <button
          class="mb-8 bg-transparent focus:outline-none button uppercase spartan-semibold md:mb-0 xl:mb-8"
          :class="{
            'button--active': i === activeIndex
          }"
          v-text="serviceTitle.title"
          v-for="(serviceTitle, i) in services"
          :key="i"
          @click="slideTo(i)"
        />
      </div>
      <!-- controls end -->
    </div>
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
.gray-pattern {
  position: absolute;
  top: 0px;
  left: -400px;
}
.lines-pattern {
  position: absolute;
  top: 90px;
  left: 70px;
  z-index: 11;
}
.img-shadow {
  box-shadow: 0px 10px 68px rgba(0, 0, 0, 0.7);
  height: 400px;
  @media (min-width: 1280px) {
    height: 600px;
  }
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
    @media (min-width: 1280px) {
      width: 52px;
      bottom: 58%;
      left: 0px;
      transform: translate(-74px, -50%);
    }
  }
}
</style>
