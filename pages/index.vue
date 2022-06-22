<template>
  <main class="main">
    <div class="studycont-sub">
      <div class="fix-wrap">
        <studycont-sub></studycont-sub>
      </div>
    </div>
    <div class="studycont-main">
      <studycont-main studyTitle="服装チェック(男女共通)"></studycont-main>
    </div>
  </main>
</template>

<script>
/* 
  <<　conponents Test >>
  import Temple from '../components/Template.vue'
*/

/* components Import */
import StudycontMain from '../components/StudycontMain.vue'
import StudycontSub from '../components/StudycontSub.vue'


export default {  
  name: 'IndexPage',
  components: {
    // Temple
    StudycontMain,
    StudycontSub
  }
}
</script>
<style scoped>
.main{
  display: flex;
  scroll-behavior: smooth;
}
.studycont-main{
  background: salmon;
  width: 70%;
}
.studycont-sub{
  background: aquamarine;
  width: 30%;
}
.fix-wrap{
  position: fixed;
  top: 0;
  right: 0;
}

</style>