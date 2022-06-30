<template>
  <div class="wrap">
    <p>{{title}}</p>
    <h2>{{studyTitle}}</h2>
    <section id="section-1">
      <div class="item-title-1">
        <h3>帽子名札</h3>
        <p>正面右側付近着用。氏名が確認出来る事。</p>
      </div>
      <div class="item-title-1">
        <h3>帽子</h3>
        <p>
          会社指定品<br>
          著しい汚れ、破損がなき事。
        </p>
      </div>
      <div class="item-title-1">
        <h3>髪型及び髭</h3>
        <p>業務に支障が無いように散髪またはまとめる事。</p>
      </div>
      <div class="item-title-1">
        <h3>胸名札</h3>
        <p>社名刺繍の下に付近に着用。指名が確認出来る事。
        </p>
      </div>
      <div class="item-title-1">
        <h3>作業着</h3>
        <p>極端な破損・汚れがなき事。
        </p>
      </div>
      <div class="item-image">
        <img src="../assets/img/AdobeStock_340113576.jpeg" alt="">
      </div>
      <div class="item-title-1">
        <h3>安全靴</h3>
        <p>極端な破損、汚れがなき事。会社指定品以外も可。
        </p>
      </div>
      <div class="item-image">
        <img src="../assets/img/AdobeStock_252961779.jpeg" alt="">
      </div>
    </section>
    <section id="section-2">
      <div class="item-title-2">
        <h3>プレス作業者</h3>
        <p>作業に適したヘルメット・マスク・保護メガネ・手袋を着用</p>
      </div>
      <div class="item-title-2">
        <h3>溶接作業者</h3>
        <p>作業に適したマスク・保護メガネ・手袋・手甲を着用</p>
      </div>
      <div class="item-title-2">
        <h3>フォークリフト作業者</h3>
        <p>作業に適したヘルメットを必ず着用</p>
      </div>
    </section>
    <section id="section-3">
      <item-article
        ArticleImage="img/AdobeStock_444890570.jpeg"
        ArticleTitle="ヘルメット"
        ArticleText="ヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメット
                      ヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメット
                      ヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメットヘルメット"
        ArticleSource="https://ec.midori-anzen.com/shop/c/cCA/"
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
    </section>
  
  </div>
  
</template>
<script>
import ItemArticle from '../components/ItemArticle.vue'
import axios from 'axios';

export default {
  props:['studyTitle',],
  emits:['sectionPoint'],

  data(){
    return{  
      title:'Study_Main',
      posts: []
    }
  },
  components: {
    ItemArticle
  },
  
}
</script>
<style scoped>
@media screen and (min-width: 599px)  {
  .item-title-1{
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    display:inline-block;
  }
  .item-title-1 h3{
    color: brown;
    padding: 5px;
  }
  .item-title-1 p{
    color: aliceblue;
  }

  .item-title-2{
    /* border: 1px solid black; */
    background:hsl(90,10%,20%);
    border-radius: 10px;
    padding: 15px;
    margin: 5px;
    display:inline-block;
  }
  .item-title-2 h3{
    color: deeppink;
    padding: 5px;
    position: relative;
  }
  .item-title-2 h3::after{
    content: '>';
  }

  .item-title-2 p{
    color: aliceblue;
    font-size: .7em;
    
  }

  .item-image{
    width: 70%;
    margin: 5px;
    
  }
  .item-image img{
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
  }
}
@media screen and (max-width: 598px )  {
  
}
</style>>