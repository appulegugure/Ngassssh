<template>
  <div class="main-wrap">
    <edit-from></edit-from>
  </div>
</template>
<script>
import EditFrom from '@/components/Editor.vue'
export default {
  name:'',
  props:[],
  data(){
    return{
      title:''
    }
  },
  components: {
    EditFrom
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