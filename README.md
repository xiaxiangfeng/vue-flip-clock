# Vue Flip Clock

<p align="center">
  <img src="https://img.shields.io/npm/v/vue-flip-clock.svg" alt="npm version">
  <img src="https://img.shields.io/npm/l/vue-flip-clock.svg" alt="license">
  <img src="https://img.shields.io/npm/dm/vue-flip-clock.svg" alt="downloads">
</p>

A beautiful 3D flip clock component for Vue 3 with smooth animations and multiple modes.

## ✨ Features

- 🎯 **Three Modes**: Clock, Countdown, and Timer
- 🎨 **Smooth 3D Animations**: Realistic flip card animations
- 📦 **Lightweight**: Minimal dependencies
- 🔧 **Easy to Use**: Simple API with Vue 3 Composition API
- 💪 **TypeScript Support**: Full type hints via JSDoc
- 🎭 **Customizable**: SCSS styling that can be themed

## 📦 Installation

```bash
npm install vue-flip-clock
```

Or with yarn:

```bash
yarn add vue-flip-clock
```

Or with pnpm:

```bash
pnpm add vue-flip-clock
```

## 🚀 Quick Start

### Global Registration

```javascript
import { createApp } from 'vue'
import VueFlipClock from 'vue-flip-clock'
import 'vue-flip-clock/dist/style.css'

const app = createApp(App)
app.use(VueFlipClock)
app.mount('#app')
```

Then use it in your template:

```vue
<template>
  <FlipClock />
</template>
```

### Local Registration

```vue
<template>
  <FlipClock mode="countdown" :value="targetTime" />
</template>

<script setup>
import { FlipClock } from 'vue-flip-clock'
import 'vue-flip-clock/dist/style.css'

const targetTime = Date.now() + 60 * 60 * 1000 // 1 hour from now
</script>
```

## 📖 Usage Examples

### Clock Mode (Default)

Display current time:

```vue
<FlipClock />
```

### Countdown Mode

Countdown to a specific time:

```vue
<script setup>
import { FlipClock } from 'vue-flip-clock'

// Countdown to a specific date
const targetDate = new Date('2024-12-31T23:59:59').getTime()
// Or countdown 1 hour from now
const oneHourLater = Date.now() + 60 * 60 * 1000
</script>

<template>
  <FlipClock mode="countdown" :value="targetDate" />
</template>
```

### Timer Mode

Count up from a start time:

```vue
<script setup>
import { FlipClock } from 'vue-flip-clock'

// Timer started 5 minutes ago
const startTime = Date.now() - 5 * 60 * 1000
</script>

<template>
  <FlipClock mode="timer" :value="startTime" />
</template>
```

## 🔧 API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'clock' \| 'countdown' \| 'timer'` | `'clock'` | Display mode of the flip clock |
| `value` | `Date \| number` | `Date.now()` | Reference time (timestamp or Date object) |

#### Mode Details

- **clock**: Displays current time (HH:MM:SS). `value` prop is ignored.
- **countdown**: Counts down to the target time specified in `value`. Stops at 00:00:00.
- **timer**: Counts up from the start time specified in `value`.

### Styling

The component uses SCSS for styling. You can customize the appearance by overriding CSS variables or classes:

```css
.flip-clock-wrapper {
  /* Customize size */
  --flip-width: 60px;
  --flip-height: 90px;
  --flip-font-size: 80px;
}

.flip-clock-wrapper .inn {
  /* Customize colors */
  background-color: #502d2d;
  color: #ccc;
}
```

## 🎨 Demo

Check out the [live demo](https://yourusername.github.io/vue-flip-clock/) to see all modes in action.

## 📋 Requirements

- Vue 3.5.0 or higher

## 🛠️ Development

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/vue-flip-clock.git
cd vue-flip-clock

# Install dependencies
npm install

# Start dev server for demo
npm run dev

# Build library
npm run build

# Build demo
npm run build:demo
```

### Project Structure

```
vue-flip-clock/
├── lib/              # Component library source
│   ├── FlipClock.vue
│   ├── components/
│   └── index.js
├── demo/             # Demo application
│   ├── App.vue
│   └── main.js
├── dist/             # Build output (library)
└── dist-demo/        # Build output (demo)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

[MIT](LICENSE) © Your Name

## 🙏 Acknowledgments

- Inspired by classic flip clocks
- Built with Vue 3 and Vite

---

**Note**: Replace `yourusername` in URLs with your actual GitHub username before publishing.
