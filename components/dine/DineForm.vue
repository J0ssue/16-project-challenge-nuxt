<template>
  <ValidationObserver
    class="form-card p-8 mx-auto bg-white relative"
    v-slot="{ invalid, errors }"
    ref="dineFormObserver"
    tag="div"
  >
    <form id="dineForm" v-on:submit.prevent="onSubmit">
      <!-- name -->
      <BaseInput
        class="mb-6"
        label="no-show"
        placeholder="name"
        v-model="form.name"
        name="name"
        rules="required"
      />

      <BaseInput
        class="mb-6"
        label="no-show"
        placeholder="email"
        type="email"
        v-model="form.email"
        name="email"
        rules="required|email"
      />
      <BaseInput
        class="mb-6"
        label="no-show"
        placeholder="telefone"
        v-model="form.phone"
        name="phone"
        rules="required"
      />

      <!-- date -->
      <div class="mb-6 md:flex ">
        <div class="custom-width">
          <label class="inline-block">Pick a date</label>
          <span class="block error-msg">This field is incomplete</span>
        </div>
        <div class="flex w-full">
          <BaseInput
            class="flex-1 mr-4"
            tag="span"
            label="no-show"
            placeholder="DD"
            :showMessage="false"
            rules="required"
            name="day"
            v-model="form.date.day"
          />
          <BaseInput
            class="flex-1 mr-4"
            tag="span"
            label="no-show"
            rules="required"
            name="month"
            :showMessage="false"
            placeholder="MM"
            v-model="form.date.month"
          />
          <BaseInput
            class="flex-1"
            tag="span"
            label="no-show"
            :showMessage="false"
            rules="required"
            name="year"
            placeholder="YYYY"
            v-model="form.date.year"
          />
        </div>
        <span v-if="false">span field is required</span>
      </div>

      <!-- time -->
      <div class="mb-6 md:flex">
        <div class="custom-width">
          <label class="block inline-block">Pick a tiime</label>
          <span class="block error-msg" v-if="errors"
            >This field is incomplete</span
          >
        </div>
        <div class="flex w-full">
          <BaseInput
            class="flex-1 mr-4"
            name="hour"
            label="no-show"
            :showMessage="false"
            rules="required|hasDigits:2"
            placeholder="09"
            v-model="form.time.hour"
          />
          <BaseInput
            class="flex-1 mr-4"
            name="minute"
            label="no-show"
            rules="required|hasDigits:2"
            :showMessage="false"
            placeholder="00"
            v-model="form.time.minute"
          />
          <div
            class="flex-1 relative border-b border-dine-input-gray custom-height"
          >
            <input
              class="hidden absolute top-0 left-0 pointer-events-none"
              type="text"
              v-model="form.time.hypernyms"
              readonly
            />
            <!-- selected -->
            <div
              class="cursor-pointer flex justify-between items-center uppercase"
              @click="toggleSelect"
            >
              {{ form.time.hypernyms }}
              <img src="/dine/icons/icon-arrow.svg" alt="arrow image" />
            </div>
            <ul
              class="bg-white w-full flex flex-col absolute top-0 left-0 shadow-dine-select py-4 px-3"
              :class="{
                'fade-up': showOptions === false,
                'fade-down': showOptions === true
              }"
            >
              <li
                class="flex items-center"
                :class="{
                  'mb-4': i === 0
                }"
                v-for="(opt, i) in options"
                :key="i"
                @click="toggleHypernyms(opt.value)"
              >
                <img
                  :class="{
                    hidden: form.time.hypernyms !== opt.value
                  }"
                  src="/dine/icons/icon-check.svg"
                  alt="check icon"
                />
                <span class="ml-auto">{{ opt.label }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="mb-6 px-6 py-4 flex items-center justify-between border-b border-dine-input-gray"
      >
        <div
          class="cursor-pointer"
          :class="{
            'pointer-events-none': form.people === 1
          }"
          @click="form.people--"
        >
          <img src="/dine/icons/icon-minus.svg" alt="minus icon" />
        </div>
        <div class="spartan-bold">
          {{ form.people }}
          <span
            :class="{
              hidden: form.people > 1
            }"
            v-text="'person'"
          />
          <span
            :class="{
              hidden: form.people === 1
            }"
            v-text="'people'"
          />
        </div>
        <div class="cursor-pointer" @click="form.people++">
          <img src="/dine/icons/icon-plus.svg" alt="plus icon" />
        </div>
      </div>

      <button
        class="py-4 w-full bg-dine-cod-gray border block text-white text-center uppercase hover:bg-white hover:text-black border-black"
        type="submit"
        v-text="'make reservation'"
      />
      <p class="error-msg">{{ invalidFormFeedback }}</p>
      <img
        class="booking-lines-pattern absolute bottom-0 left-0 hidden xl:inline-block"
        src="/dine/patterns/pattern-lines.svg"
        alt="lines pattern"
      />
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import validations from '~/helpers/validationRules'
import dineFormMixin from '~/mixins/dineFormMixin'
import BaseInput from '~/components/BaseInput'
import MaskedInput from '~/components/MaskedInput'
import BaseSelect from '~/components/BaseSelect'
export default {
  name: 'DineForm',
  mixins: [dineFormMixin],
  components: {
    BaseInput,
    BaseSelect,
    MaskedInput,
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    toggleHypernyms(val) {
      this.form.time.hypernyms = val
      this.toggleSelect()
    },
    toggleSelect() {
      this.showOptions = !this.showOptions
    },
    onSubmit() {
      console.log('helllo world')
      this.$refs.dineFormObserver.validate().then(success => {
        if (!success) {
          this.invalidFormFeedback = 'Please correct form.'
          return
        }

        alert('Form has been submitted!')

        // Resetting Values
        this.resetForm()

        // Wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.dineFormObserver.reset()
        })
      })
    },
    resetForm() {
      this.form.email = ''
      this.form.name = ''
      this.form.phone = ''
      this.form.date.day = ''
      this.form.date.month = ''
      this.form.date.year = ''
      this.form.time.minute = ''
      this.form.time.hour = ''
    }
  },
  computed: {
    day() {
      return this.$store.state.dine.date.day
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-height {
  height: 39px;
}
.error-msg {
  font-size: 10px;
  color: #b54949;
}
.custom-width {
  @media (min-width: 1024px) {
    width: 196px;
  }
}
</style>
