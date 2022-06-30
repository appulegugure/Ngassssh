<template>
  <div class="main-wrap">
    <div class="item-article">
        <div class="item-article-img">
          <img v-bind:src="require(`@/assets/${ArticleImage}`)" alt="ArticleImage">
        </div>
        <div class="item-article-text">
          <h3>{{ArticleTitle}}</h3>
          <p>{{ArticleText}}</p>
          <div class="item-article-link">
            <nuxt-link :to="ArticleSource">Learn</nuxt-link>
            <!-- <a v-bind:href="ArticleSource">Learn</a> -->
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props:['ArticleImage','ArticleTitle','ArticleText','ArticleSource'],
  data(){
    return{
      title:''
    }
  },
  components: {
  },
}
</script>
<style scoped>
@media screen and (min-width: 599px)  {
  .main-wrap{
    display: inline-block;
    margin: 10px;
  }
  .item-article{
    width:364px;
    height: 400px;
    overflow: hidden;
    border: .1px solid black;
    border-radius:10px ;
    margin: 5px;
    position: relative;
    display: inline-block;
    -webkit-box-shadow: 0px 0px 19px -2px #000000; 
    box-shadow: 0px 0px 19px -2px #000000;
  }
  .item-article .item-article-img{
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
    background: hsl(245, 100%, 50%);
  }
  .item-article .item-article-img img{
    object-fit:contain;
    width: 100%;
    left: 0;
    position: absolute;
    
  }
  .item-article-text{
    border-top:solid 3px blue ;
    padding: 20px;
    width: 100%;
    height: 165px;
    overflow: hidden;
  }
  .item-article-text h3{
    position: relative;
    margin-bottom: 10px;
    display: inline-block;
  }
  .item-article-text p{
    color: white;
    padding: 15px;
    position: relative;
    font-size: 1em;
    line-height: 1.5em;
    white-space: pre-line;
    background:rgb(158, 93, 52);
  }
  .item-article-text h3::after{
    position: absolute;
    content: '>';
    font-size: .8em;
    top: -1px;
    right:-15px;
  }
  .item-article-text h3::before{
    position: absolute;
    content: '<';
    font-size: .8em;
    top: -1px;
    left: -15px;
  }
  .item-article-link{
    position: absolute;
    bottom: 10px;
    font-size: 1em;
    transform-origin: bottom left;
    transform: scale(1,1);
    transition: all .5s ease-in-out 0s;
  }
  .item-article-link:hover,
  .item-article-link:active {
    transform: scale(1.2,1.2);
  }
  .item-article-link a{
    color: hsl(245, 50%, 60%);
  }
  .item-article-link::after{
    content: "→";
    position: absolute;
    right: -17px;
    bottom:-5px;
    color: hsl(245, 50%, 60%);
  }
}
@media screen and (max-width: 598px)  {
  
}
</style>>
