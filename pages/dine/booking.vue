<template>
  <div class="dine-booking">
    <header></header>
    <main>
      <section>
        <ValidationObserver v-slot="{ invalid }" ref="dineFormObserver">
          <form id="dineForm" @submit.prevent="onSubmit">
            <!-- name -->
            <BaseInput
              label="name"
              v-model="form.name"
              name="name"
              tag="div"
              rules="required"
            />

            <BaseInput
              label="email"
              type="email"
              v-model="form.email"
              name="email"
              tag="div"
              rules="required|email"
            />
            <BaseInput
              label="telefone"
              v-model="form.phone"
              name="phone"
              tag="div"
              rules="required|digits:9"
            />

            <!-- date -->
            <div>
              <label>Pick a date</label>
              <div>
                <BaseInput
                  label="no-show"
                  placeholder="DD"
                  v-model="form.date.day"
                />
                <BaseInput
                  label="no-show"
                  placeholder="MM"
                  v-model="form.date.month"
                />
                <BaseInput
                  label="no-show"
                  placeholder="YYYY"
                  v-model="form.date.year"
                />
              </div>
            </div>

            <!-- time -->
            <div>
              <label>Pick a tiime</label>
              <div>
                <BaseInput
                  label="no-show"
                  placeholder="09"
                  v-model="form.time.hour"
                />
                <BaseInput
                  label="no-show"
                  placeholder="00"
                  v-model="form.time.minute"
                />
                <BaseSelect
                  label="no-show"
                  :options="options"
                  v-model="form.time.hypernyms"
                />
              </div>
            </div>

            <button
              type="submit"
              v-text="'Submit'"
              :disabled="touched && invalid"
            />
            <p>{{ invalidFormFeedback }}</p>
          </form>
        </ValidationObserver>
      </section>
    </main>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import validations from '~/helpers/validationRules'
import dineFormMixin from '~/mixins/dineFormMixin'
import BaseInput from '~/components/BaseInput'
import MaskedInput from '~/components/MaskedInput'
import BaseSelect from '~/components/BaseSelect'

export default {
  mixins: [dineFormMixin],
  name: 'DineBooking',
  head: {
    title: 'Dine-Booking'
  },
  layout: 'dine',
  components: {
    BaseInput,
    BaseSelect,
    MaskedInput,
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    onSubmit() {
      this.$refs.dineFormObserver.validate().then(success => {
        if (!success) {
          this.invalidFormFeedback = 'Please correct form.'
          return
        }

        alert('Form has been submitted!')

        // Resetting Values
        // this.resetForm()

        // Wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.dineFormObserver.reset()
        })
      })
    },
    resetForm() {
      let form = document.getElementById('dineForm')
      form.reset()
    }
  }
}
</script>
