<template>
  <div>
    {{ parametor }}
  </div>
  
</template>
<script>
export default{
  data(){
    return {
      parametor: this.$route.params
    }
  }
}
</script>