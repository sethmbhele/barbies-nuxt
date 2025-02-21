<template>
  <div class="contact-form">
    <form @submit.prevent="handleSubmit">
      <div class="field field-name">
        <label>Name</label>
        <div class="field-value">
          <input type="text" v-model="form.name" required>
        </div>
      </div>
      <div class="field field-email">
        <label>Email</label>
        <div class="field-value">
          <input type="email" v-model="form.email" required>
        </div>
      </div>
      <div class="field field-subject">
        <label>Subject</label>
        <div class="field-value">
          <input type="text" v-model="form.subject" required>
        </div>
      </div>
      <div class="field field-message">
        <label>Message</label>
        <div class="field-value">
          <textarea v-model="form.message" required></textarea>
        </div>
      </div>
      <div class="field field-submit">
        <button type="submit" class="button button-filled">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineEmits } from 'vue'

const emit = defineEmits(['submit'])

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error'>('success')

const handleSubmit = async () => {
  isSubmitting.value = true
  message.value = ''
  
  try {
    // In a real application, this would be an API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    emit('submit', { ...form })
    message.value = 'Thank you for your message. We will get back to you soon!'
    messageType.value = 'success'
    
    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (error) {
    message.value = 'Sorry, there was an error sending your message. Please try again.'
    messageType.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>
