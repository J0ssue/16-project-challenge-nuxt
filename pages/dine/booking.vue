<template>
  <div class="dine-booking">
    <header></header>
    <main>
      <section>
        <form @submit.prevent="">
          <!-- name -->
          <ValidationProvider
            name="name"
            tag="div"
            rules="required"
            v-slot="{ errors }"
          >
            <BaseInput label="name" v-model="form.name" :errors="errors" />
          </ValidationProvider>

          <ValidationProvider
            name="email"
            tag="div"
            rules="required|email"
            v-slot="{ errors }"
          >
            <BaseInput
              label="email"
              type="email"
              v-model="form.email"
              :errors="errors"
            />
          </ValidationProvider>

          <ValidationProvider
            name="phone"
            tag="div"
            rules="required|digits:9"
            v-slot="{ errors }"
          >
            <BaseInput label="telefone" v-model="form.phone" :errors="errors" />
          </ValidationProvider>

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
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
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
    ValidationProvider
  }
}
</script>
