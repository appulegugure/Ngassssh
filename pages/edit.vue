<template>
  <div class="main-wrap">
    <inpit-img-oya></inpit-img-oya>
  </div>
</template>
<script>
import EditFrom from '@/components/Editor.vue'
import inpitImgOya from '@/components/inputimgOya.vue'

export default {
  name:'',
  props:[],
  data(){
    return{
      title:''
    }
  },
  components: {
    EditFrom,
    inpitImgOya,
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