  <template>
  <div>
    <p>{{title}}</p>
    <ul class="navigation">
      <li @click="eventinfo" ref="list0">
        
        <nuxt-link to="#section-1">メニュー1</nuxt-link>
      </li>
      <li @click="eventinfo" ref="list1">
        <!-- <div class="target-factor"></div> -->
        <nuxt-link to="#section-2">メニュー2</nuxt-link>
      </li>
      <li @click="eventinfo" ref="list2">
        <nuxt-link to="#section-3">メニュー3</nuxt-link>
      </li>
      <li @click="eventinfo" ref="list3">
        click here
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      title:'Study_Sub'
    }
  },
  methods:{
    viewinfo(){
      console.log('Gyu')
    },
    eventinfo(){
      console.log('refs1',this.$refs.list1.getBoundingClientRect().y)
      console.log('refs2',this.$refs.list2.getBoundingClientRect().y)
      console.log('refs3',this.$refs.list3.getBoundingClientRect().y)
      console.log(window.pageYOffset)
    }
  }
}
</script>
<style scoped>
@media screen and (min-width: 599px)  {
  .navigation{
    background: wheat;
    position: relative;
  }
  .navigation li{
    padding: 10px;
    z-index: 5;
  }
  .target-factor{
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    z-index: 4;
    background: seagreen;
  }
}
@media screen and (max-width: 598px)  {
  
}
</style>>