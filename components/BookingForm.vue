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

<style scoped>
.booking-form {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50%;
  background: #fff;
  padding: calc(1rem + 0.5vw);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-top: 1px solid rgba(169, 124, 80, 0.1);
}

form {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: calc(0.5rem + 0.5vw);
}

.field {
  flex: 1;
  min-width: 0; /* Prevents flex items from overflowing */
  padding-right: calc(0.5rem + 0.5vw);
}

.field label {
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
  white-space: nowrap;
}

.field-value {
  font-size: 1rem;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.field-separator {
  border-right: 1px solid rgba(169, 124, 80, 0.1);
}

.button-color {
  background: #A97C50;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.button-color:hover {
  background: #8b6541;
}

.mdi {
  color: #A97C50;
  font-size: 1.2rem;
  margin-left: 0.5rem;
  cursor: pointer;
}

/* Tablet breakpoint */
@media (max-width: 1024px) {
  .booking-form {
    width: 60%;
  }
  
  .field-value .long {
    display: none;
  }
  
  .field-value .short {
    display: inline;
  }
}

/* Mobile breakpoint - preserve existing mobile styles */
@media (max-width: 768px) {
  .booking-form {
    left: 0;
    width: 100%;
    padding: 10px 15px;
  }

  form {
    flex-wrap: wrap;
    gap: 10px;
  }

  .field {
    flex: 1 1 calc(50% - 10px);
    padding-right: 0;
  }

  .field-separator {
    border-right: none;
  }

  .button-color {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
