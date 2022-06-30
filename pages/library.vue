<template>
  <div>
    <div class="content-wrap">
      <item-article
        ArticleImage="img/AdobeStock_390454807.jpeg"
        ArticleTitle="手袋・手甲"
        ArticleText="手袋・手甲手袋・手甲手袋・手甲"
        ArticleSource="/"
        />
      <item-article
        ArticleImage="img/AdobeStock_444890570.jpeg"
        ArticleTitle="ヘルメット"
        ArticleText="ヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメット
                      ヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメット
                      ヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメット"
        ArticleSource="/"
        />
      <item-article
        ArticleImage="img/AdobeStock_307567522.jpeg"
        ArticleTitle="保護メガネ"
        ArticleText="保護メガネ保護メガネ保護メガネ"
        ArticleSource="https://ec.midori-anzen.com/shop/c/cDA/"
        />
      <item-article
        ArticleImage="img/AdobeStock_390454807.jpeg"
        ArticleTitle="マスク"
        ArticleText="マスクマスクマスク"
        ArticleSource="https://www.meti.go.jp/press/2021/06/20210616002/20210616002.html"
        />
      <item-article
        ArticleImage="img/AdobeStock_390454807.jpeg"
        ArticleTitle="手袋・手甲"
        ArticleText="手袋・手甲手袋・手甲手袋・手甲"
        ArticleSource="https://ec.midori-anzen.com/shop/c/cHA/"
        />
      <item-article
        ArticleImage="img/AdobeStock_390454807.jpeg"
        ArticleTitle="手袋・手甲"
        ArticleText="手袋・手甲手袋・手甲手袋・手甲"
        ArticleSource="https://ec.midori-anzen.com/shop/c/cHA/"
        />
      <item-article
        ArticleImage="img/AdobeStock_444890570.jpeg"
        ArticleTitle="ヘルメット"
        ArticleText="ヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメット
                      ヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメット
                      ヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメット"
        ArticleSource="https://ec.midori-anzen.com/shop/c/cCA/"
        />
      
    </div>
  </div>
</template>
<script>

import ItemArticle from '../components/ItemArticle.vue'
export default {
  name:'',
  props:[],
  data(){
    return{
      title:'Library'
    }
  },
  components: {
    ItemArticle,
  },
  layout: 'main',
}
</script>
<style scoped>
@media screen and (min-width: 599px)  {
  .content-wrap{
    text-align: center;
    padding: 20px;
  }
}
@media screen and (max-width: 598px)  {
  
}
</style>>