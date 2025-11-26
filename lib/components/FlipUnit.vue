<template>
  <ul :class="type">
    <li v-for="i in num" :key="i - 1" :class="getItemClass(i - 1)">
      <a href="#">
        <div class="up">
          <div class="shadow"></div>
          <div class="inn">{{ i - 1 }}</div>
        </div>
        <div class="down">
          <div class="shadow"></div>
          <div class="inn">{{ i - 1 }}</div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref, watch } from 'vue'

/**
 * Props for FlipUnit component
 * @property {string} type - Type identifier for the flip unit (e.g., 'hours-pre', 'minutes-last')
 * @property {number} num - Total number of flip cards to render
 * @property {number} value - Current active value (0 to num-1)
 */
const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  num: {
    type: Number,
    default: 1,
    validator: (value) => value > 0
  },
  value: {
    type: Number,
    default: 0
  }
})

const prevValue = ref(props.value)

// Watch for value changes with optimized options
watch(
  () => props.value,
  (newVal, oldVal) => {
    prevValue.value = oldVal ?? newVal
  },
  { flush: 'post' } // Run after component updates for smoother animations
)

/**
 * Determine CSS class for each flip card item
 * @param {number} i - The card index
 * @returns {string} CSS class name
 */
const getItemClass = (i) => {
  if (i === props.value) {
    return 'flip-clock-active'
  } else if (i === prevValue.value && props.value !== prevValue.value) {
    return 'flip-clock-before'
  }
  return ''
}
</script>
