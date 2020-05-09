<template>
  <section class="text-center relative">
    <picture>
      <source
        media="(min-width:1280px)"
        srcset="/dine/homepage/ready-bg-desktop.jpg"
      />
      <source
        media="(min-width:768px)"
        srcset="/dine/homepage/ready-bg-tablet.jpg"
      />
      <img
        class="w-full"
        src="/dine/homepage/ready-bg-mobile.jpg"
        alt="call to action bacground image"
      />
    </picture>
    <div class="dine-cta-overlay"></div>
    <div
      class="position-center w-full xl:flex xl:justify-between xl:items-center xl:px-24"
    >
      <h2
        class="mb-8 dine-h2 text-white xl:mb-0"
        v-text="'Ready to make a reservation'"
      />
      <button
        class="py-4 px-16 bg-transparent border border-white uppercase text-white spartan"
        v-text="'Book a table'"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'DineCta'
}
</script>

<style lang="scss" scoped>
.dine-cta-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  pointer-events: none;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1)
  );
}
.position-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
