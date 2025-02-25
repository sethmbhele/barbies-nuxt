<template>
  <div class="faq-item" :class="{ 'active': isOpen }">
    <div class="faq-header" @click="toggle">
      <h4>{{ question }}</h4>
      <span class="icon">
        <i class="mdi" :class="isOpen ? 'mdi-minus' : 'mdi-plus'"></i>
      </span>
    </div>
    <div class="faq-content" :style="contentStyle">
      <div class="content-inner" ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  question: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)
const content = ref(null)

const contentStyle = computed(() => {
  return {
    maxHeight: isOpen.value ? `${content.value?.scrollHeight}px` : '0px'
  }
})

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.faq-item {
  margin-bottom: 1rem;
  background: rgba(169, 124, 80, 0.05);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-header {
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.faq-header h4 {
  color: #A97C50;
  margin: 0;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.icon {
  color: #A97C50;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.faq-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.content-inner {
  padding: 0 2rem 1.5rem;
  color: #666;
  line-height: 1.6;
}

.faq-item:hover {
  background: rgba(169, 124, 80, 0.1);
}

.faq-item.active .icon {
  transform: rotate(180deg);
}
</style>
