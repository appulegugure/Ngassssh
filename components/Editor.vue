<template>
  <div>
    <template>
      <quill-editor v-model="editor" />
    </template>
    <p>{{editor}}</p>
      
  </div>
  
</template>

<script>
// import { title } from 'process';
// import { Script } from 'vm';

export default {
  data(){
    return{
      editor:'firdt'
    }
  }

}
</script>

