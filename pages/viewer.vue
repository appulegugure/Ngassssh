<template>
  <div class="main-wrap">
    <vie></vie>
  </div>
</template>
<script>
import Vie from '../components/Viewer.vue'

export default {
  name:'',
  props:[],
  data(){
    return{
      title:''
    }
  },
  components: {
    Vie,
},
}
</script>
<style scoped>
@media screen and (min-width: 599px)  {
  .main-wrap{
    width: 100%;
    padding: 20px;
  }
}
@media screen and (max-width: 598px)  {
  
}
</style>>