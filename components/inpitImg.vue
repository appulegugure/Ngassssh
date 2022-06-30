<template>
<div>

    <label v-if="!value" class="upload-content-space user-photo default">
      <input ref="file" class="file-button" type="file" @change="upload" />
      アップロードする
    </label>

    <div v-if="value" class="uploaded">
      <label class="upload-content-space user-photo">
        <input ref="file" class="file-button" type="file" @change="upload" />
        <img class="user-photo-image" :src="value" />
      </label>
    </div>
    <button type="button" class="delete-button" @click="deleteImage">
         削除する
    </button>
    <p>{{imgcode}}</p>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  props: {
    value: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      file: null,
      imgcode:null
    }
  },
  methods: {
    async upload(event) {
      const files = event.target.files || event.dataTransfer.files
      const file = files[0]
      if (this.checkFile(file)) {
        this.imgcode = await this.getBase64(file)
        this.$emit('outputimg', this.imgcode)
      }
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
    checkFile(file) {
      let result = true
      const SIZE_LIMIT = 5000000 // 5MB
      // キャンセルしたら処理中断
      if (!file) {
        result = false
      }
      // jpeg か png 関連ファイル以外は受付けない
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        result = false
      }
      // 上限サイズより大きければ受付けない
      if (file.size > SIZE_LIMIT) {
        result = false
      }
      return result
    },
    deleteImage() {
      this.$emit('input', null)
      this.$refs.file = null
      this.imgcode = null
    },
  }
  
}
</script>

<style scoped>
.user-photo {
  cursor: pointer;
  outline: none;
}

.user-photo.default {
  align-items: center;
  background-color: #0074fb;
  border: 1px solid #0051b0;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-flex;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.3px;
  color: #fff;
  height: 4rem;
  padding: 0 1.6rem;
  max-width: 177px;
}

.user-photo.default:hover {
  background-color: #4c9dfc;
}

.user-photo.default:active {
  background-color: #0051b0;
}

.user-photo-image {
  max-width: 85px;
  display: block;
}

.user-photo-image:hover {
  opacity: 0.8;
}

.file-button {
  display: none;
}

.uploaded {
  align-items: center;
  display: flex;
}
</style>