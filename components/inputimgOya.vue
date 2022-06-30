<template>
  <div id="app">
    <div class="post-title">
      <input v-model="title" type="text" src="" alt="">
    </div>
    <div class="post-img">
      <inpit-img @outputimg="img=$event"></inpit-img>
    </div>

    <div class="post-body">
      <editor @bodydata="body=$event"></editor>
    </div>
    <div class="post-categories">
      <input v-model="categories" type="text" src="" alt="">
    </div> 
    <div>
      Preview
      <ul>
        <li>{{title}}</li>
        <li>{{img}}</li>
        <li>{{body}}</li>
        <li>{{categories}}</li>
      </ul>
    </div>
    <button @click="postrin">
      POSTRIN
    </button>
    <!-- <inpit-img v-model="picture"></inpit-img>
    <img :src="picture" /> -->
  </div>
</template>
<script>
import inpitImg from '@/components/inpitImg.vue'
import Editor from './Editor.vue'
export default {
  name: 'app',
  components: {
    inpitImg,
    Editor
    
  
  },
  data() {
    return {
      picture:'',
      title:'',
      body:'',
      categories:'',
      img:''
    }
  },
  methods:{
    postrin(){
      console.log(this.img)
      const sendData = {
        title:this.title,
        // blocks:'\"' + `${JSON.stringify(this.body)}`+'\"',
        blocks:`${JSON.stringify(this.body)}`,
        body:'atode',
        img:this.img,
        categories:this.categories
      }
      console.log('pyo',sendData.blocks)
      console.log('send',sendData)

      // fetch('http://34.219.107.117:8080/create', {
      //   method: 'POST', // or 'PUT'
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(sendData),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      // });


      this.postData('http://34.215.97.33:8080/create', sendData)
      .then(data => {
        console.log('send sucsec',data); // `data.json()` の呼び出しで解釈された JSON データ
      });
    },

    
    async postData(url = '', data = {}) {
  // 既定のオプションには * が付いています
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致させる必要があります
      })
      return response.json(); // JSON のレスポンスをネイティブの JavaScript オブジェクトに解釈
    }
  }
  
}
</script>