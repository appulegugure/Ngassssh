<template>
  <div>
    <header>
      <div class="header-fixed">
        <ul>
          <li>Discoevr</li>
          <li>Learn</li>
          <li>Explore</li>
        </ul>
        <serch-form @sechValueMethod="serchValue = $event"></serch-form>
        <h1><span>Value:</span>{{serchValue}}</h1>
      </div>
    </header>
    <Nuxt />
    <footer>
      <ul>
        <li>insta</li>
        <li>facebook</li>
        <li>twittre</li>
      </ul>
    </footer>
  </div>
</template>
<script>
import SerchForm from '@/components/SerchInput.vue'
export default {
  name:'',
  props:[],
  data(){
    return{
      title:'Template',
      serchValue:''
    }
  },
  components: {
    SerchForm
  },
  layout: '',
}
</script>
<style scoped>
header{
  width: 100%;
  height: 100px;
  margin-bottom: 0px;
}
.header-fixed{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 500;
  background: seagreen;
}
header ul{
  display: flex;
  justify-content: center;
}
header ul li{
  padding: 10px;
}
footer{
  background: rgb(30, 183, 97);
}
footer ul{
  display: flex;
  justify-content: center;
}
footer ul li{
  padding: 10px;
}
</style>