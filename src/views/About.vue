<template>
  <div>
    <p>{{ message }}</p>
    <Home></Home>
  </div>
</template>

<script>
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import Home from '@/views/Home.vue'
import { Hello, World } from '@/mixins/test.js'
import { mapGetters, mapActions } from 'vuex'

// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])

// Define the props by using Vue's canonical way.
const GreetingProps = Vue.extend({
  props: {
    propName: {
      type: String,
      default: 'prop parameter 1'
    }
  }
})

@Component({
  // Specify `components` option.
  // See Vue.js docs for all available options:
  // https://vuejs.org/v2/api/#Options-Data
  components: {
    Home
  }
  // methods: mapActions([
  //   'fetchPosts'
  // ])
})
// Extend: Use custom super class component decorated by @Component in native class inheritance syntax instead of 'Vue'.
// Use `mixins` helper function instead of `Vue`.
// `mixins` can receive any number of arguments.
export default class HelloWorld extends mixins(Hello, World, GreetingProps) {
  data() {
    return {
      message: 'Hello World'
    }
  }

  created() {
    this.init()
  }

  init() {
    setTimeout(() => {
      this.message = `hello ${this.hello}, ${this.world}, props: ${this.propName} !`
      this.bar()
    }, 1500);
    console.log('Component', Component)
    window.$component = Component
  }

  // fetchPosts!: () => Promise<void>

  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter', to, from)
    next((that) => {
      console.log(that.message)
    })
  }

  bar = () => {
    // Does not update the expected property.
    // `this` value is not a Vue instance in fact.
    this.message = 456
    console.log('bar', this)
  }
}
</script>
