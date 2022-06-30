<template>
  <div>
    <div id="editorjs"></div>
    <div @click="output">Json生成</div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    this.editor = this.$editor.EditorJS({
      holder: 'editorjs',
      placeholder: 'No content',
      data: {},
      readOnly:false
    })
  },
  methods:{
    output(){
      this.editor.save().then((outputData) => {
        console.log('Article data: ', outputData)
        this.$emit("bodydata",outputData);
      }).catch((error) => {
        console.log('Saving failed: ', error)
      });
    },
  }
}
</script>
<style scoped>

#editorjs{
  background: white;
}

</style>