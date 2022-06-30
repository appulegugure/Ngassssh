<template>
  <div>
    <p>view</p>
    <div id="viewjs"></div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      vie: null,
    }
  },
  mounted() {
    this.vie = this.$editor.EditorJS({
      holder: 'viewjs',
      placeholder: 'No content',
      data: {
          "time": 1550476186479,
          "blocks": [
              {
                "id": "oUq2g_tl8y",
                "type": "header",
                "data": {
                    "text": "Editor.js",
                    "level": 1
                }
              },
              {
                "id": "oUz2g_tl8y",
                "type": "header",
                "data": {
                    "text": "Editor.js",
                    "level": 1
                }
              },
              {
                "id": "oUe2g_tl8y",
                "type": "header",
                "data": {
                    "text": "Editor.js",
                    "level": 1
                }
              },
          ]
      },
      readOnly:true
    })
  },
  methods:{

  }
}
</script>
<style scoped>

#editorjs{
  background: white;
}

</style>
