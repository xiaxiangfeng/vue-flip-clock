import FlipClock from './FlipClock.vue'

export { FlipClock }

export default {
    install: (app) => {
        app.component('FlipClock', FlipClock)
    }
}
