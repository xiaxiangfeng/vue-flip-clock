<template>
  <div class="flip-clock-wrapper">
    <div>
      <div class="title">小时</div>
      <FlipUnit type="hours-pre" :num="3" :value="hoursTens" />
      <FlipUnit type="hours-last" :num="10" :value="hoursOnes" />
      <div class="semicolon">
        <span></span>
        <span></span>
      </div>
    </div>
    
    <div>
      <div class="title">分数</div>
      <FlipUnit type="minutes-pre" :num="6" :value="minutesTens" />
      <FlipUnit type="minutes-last" :num="10" :value="minutesOnes" />
      <div class="semicolon">
        <span></span>
        <span></span>
      </div>
    </div>

    <div>
      <div class="title">秒数</div>
      <FlipUnit type="seconds-pre" :num="6" :value="secondsTens" />
      <FlipUnit type="seconds-last" :num="10" :value="secondsOnes" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import FlipUnit from './components/FlipUnit.vue'
import './style.scss'

/**
 * @typedef {'clock' | 'countdown' | 'timer'} ClockMode
 * 
 * Props for FlipClock component
 * @property {ClockMode} mode - Display mode: 'clock' for current time, 'countdown' for countdown timer, 'timer' for elapsed time
 * @property {Date | number} value - Reference time: ignored for clock mode, target time for countdown, start time for timer
 */
const props = defineProps({
  mode: {
    type: String,
    default: 'clock',
    validator: (value) => ['clock', 'countdown', 'timer'].includes(value)
  },
  value: {
    type: [Date, Number],
    default: () => Date.now()
  }
})

const diff = ref(0)
let timer = null

/**
 * Tick function to update the displayed time
 */
const tick = () => {
  const now = Date.now()
  
  if (props.mode === 'countdown') {
    const target = props.value instanceof Date ? props.value.getTime() : props.value
    diff.value = Math.max(0, target - now)
  } else if (props.mode === 'timer') {
    const start = props.value instanceof Date ? props.value.getTime() : props.value
    diff.value = Math.max(0, now - start)
  } else {
    // Clock mode - store current timestamp
    diff.value = now
  }
}

onMounted(() => {
  tick()
  timer = setInterval(tick, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
})

/**
 * Computed time data based on current mode
 */
const timeData = computed(() => {
  let hours = 0
  let minutes = 0
  let seconds = 0

  if (props.mode === 'clock') {
    const date = new Date(diff.value)
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()
  } else {
    // For countdown and timer modes, calculate from total seconds
    const totalSeconds = Math.floor(diff.value / 1000)
    hours = Math.floor(totalSeconds / 3600)
    minutes = Math.floor((totalSeconds % 3600) / 60)
    seconds = totalSeconds % 60
  }
  
  return { hours, minutes, seconds }
})

// Split digits into tens and ones places
const hoursTens = computed(() => Math.floor(timeData.value.hours / 10))
const hoursOnes = computed(() => timeData.value.hours % 10)
const minutesTens = computed(() => Math.floor(timeData.value.minutes / 10))
const minutesOnes = computed(() => timeData.value.minutes % 10)
const secondsTens = computed(() => Math.floor(timeData.value.seconds / 10))
const secondsOnes = computed(() => timeData.value.seconds % 10)

</script>
