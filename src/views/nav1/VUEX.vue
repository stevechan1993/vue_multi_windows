<template>
  <div>
    <h1>vuex 测试</h1>
    Clicked: {{ getCount }} times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  import { mapGetters } from 'src/views/nav1/VUEX'
  import { mapActions } from 'src/views/nav1/VUEX'

  export default {
    computed: {
  	// 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'getCount'
      // ...
    ])
    },
    methods: {
    ...mapActions([
      'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
      'decrement'
    ])
      //...mapActions({
      //  add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
      //})
    }
  }

</script>
