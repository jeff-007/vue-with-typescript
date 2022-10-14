import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare mixins as the same style as components.
@Component
export class Hello extends Vue {
  hello = 'mixin Hello'
}

@Component
export class World extends Vue {
  world = 'mixin World'
}
