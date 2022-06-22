<template>
  <div>
    <form @submit.prevent>
      <label>
        <input v-model="serchvalue" placeholder="入力ください" type="text" @keyup.enter="submit">
      </label>
      <button type="submit" @click="submit">
        送信
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name:'SerchConponent',
  props:[],
  data(){
    return{
      serchvalue:''
    }
  },
  methods:{
    submit(){
      this.$emit('sechValueMethod', this.serchvalue)
    }
  },
}
</script>
<style scoped>
@media screen and (min-width: 599px)  {
  
}
@media screen and (max-width: 598px)  {
  
}
</style>>