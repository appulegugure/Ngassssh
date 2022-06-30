<template>
  <div>
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  name:'',
  props:[],
  computed: {},
  data(){
    return{
      title:'Template'
    }
  },
  methods:{
    test(){
      console.log(this.title)
    }
  },
  components: {
  },
  layout: '',
}
</script>
<style scoped>
@media screen and (min-width: 599px)  {
  
}
@media screen and (max-width: 598px)  {
  
}
</style>>
