<template>
  <div style="font-family: sans-serif; padding: 20px;">
    <h1>Vue Flip Clock Examples</h1>
    
    <div style="margin-bottom: 40px;">
      <h2>1. Clock Mode (Default)</h2>
      <FlipClock />
    </div>

    <div style="margin-bottom: 40px;">
      <h2>2. Countdown Mode (1 hour)</h2>
      <FlipClock mode="countdown" :value="countdownTarget" />
    </div>

    <div style="margin-bottom: 40px;">
      <h2>3. Timer Mode (Started 5 mins ago)</h2>
      <FlipClock mode="timer" :value="timerStart" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { FlipClock } from '../lib/index.js'

// Compute these values reactively for accurate demo
const countdownTarget = computed(() => Date.now() + 60 * 60 * 1000) // 1 hour from now
const timerStart = computed(() => Date.now() - 5 * 60 * 1000) // Started 5 mins ago
</script>
