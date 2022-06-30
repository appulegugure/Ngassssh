<template>
  <div>
    
    <p>{{ip}}</p>

    <div v-for="out in jsoncomeon" :key="out.body">
      <item-article
        ArticleImage="img/AdobeStock_390454807.jpeg"
        :ArticleTitle="out.title"
        :ArticleText="out.body"
        ArticleSource="https://ec.midori-anzen.com/shop/c/cHA/"
        />
    </div>
    
  </div>
</template>
<script>
import axios from 'axios'
import ItemArticle from '../components/ItemArticle.vue'
export default {
  data() {
    return {
      mountains: [],
      category:'shsjh',
      jsoncomeon:[
        {"body":"body","id":6,"img":"ndsd","title":"snssj"},
        {"body":"body","id":7,"img":"ndsd","title":"snssj"},
        {"body":"body","id":8,"img":"ndsd","title":"snssj"},
        {"body":"body","id":9,"img":"ndsd","title":"snssj"},
        {"body":"body","id":10,"img":"ndsd","title":"snssj"}
      ]
    }
  },
  components: {
    ItemArticle
  },
  ////////
  
  // async asyncData() {
  //   // このjsonをゲットするまで非同期でお仕事します
  //   const data = await axios.get('http://34.209.153.159:8080/show/TEST')
    
  //   console.log('LOGBY',data)
  //   return { ip:  data.data }
  // },
  
  ////////
  // Timeout 処理 //
}
</script>