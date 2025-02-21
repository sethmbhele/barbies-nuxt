<template>
  <div class="booking-form">
    <form @submit.prevent="handleSubmit">
      <div class="field field-date field-separator field-checkin">
        <label>Check-in</label>
        <input type="hidden" v-model="checkin">
        <span class="field-value">
          <span class="short">{{ formatDateShort(checkin) }}</span>
          <span class="long">{{ formatDateLong(checkin) }}</span>
        </span>
        <a href="#" class="mdi mdi-calendar-today"></a>
      </div>
      <div class="field field-date field-separator field-checkout">
        <label>Check-out</label>
        <input type="hidden" v-model="checkout">
        <span class="field-value">
          <span class="short">{{ formatDateShort(checkout) }}</span>
          <span class="long">{{ formatDateLong(checkout) }}</span>
        </span>
        <a href="#" class="mdi mdi-calendar"></a>
      </div>
      <div class="field field-number field-separator field-adults">
        <label>Adults</label>
        <input type="hidden" v-model="adults">
        <span class="field-value">{{ adults }}</span>
        <a href="#" class="mdi"></a>
        <div class="dropdown">
          <ul class="values">
            <li v-for="n in 6" :key="n-1" :class="{ selected: adults === n-1 }">
              <a href="#" @click.prevent="adults = n-1" :data-value="n-1">{{ n-1 }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="field field-number field-children">
        <label>Children</label>
        <input type="hidden" v-model="children">
        <span class="field-value">{{ children }}</span>
        <a href="#" class="mdi"></a>
        <div class="dropdown">
          <ul class="values">
            <li v-for="n in 6" :key="n-1" :class="{ selected: children === n-1 }">
              <a href="#" @click.prevent="children = n-1" :data-value="n-1">{{ n-1 }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="clear"></div>
      <button type="submit" class="button-color">Book Now</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checkin = ref('2025-02-21')
const checkout = ref('2025-02-28')
const adults = ref(2)
const children = ref(0)

const formatDateShort = (date: string) => {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-GB', { 
    day: '2-digit',
    month: 'short',
    year: '2-digit'
  })
}

const formatDateLong = (date: string) => {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const handleSubmit = () => {
  // Handle form submission
  console.log({
    checkin: checkin.value,
    checkout: checkout.value,
    adults: adults.value,
    children: children.value
  })
}
</script>
