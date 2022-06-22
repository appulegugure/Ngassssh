<template>
  <div>
    <h1 class="title">
      お問い合わせ
    </h1>
    <form>
      <div class="form-group">
        <label>件名</label>
        <input type="text" class="form-control" aria-label="件名" v-model="form.title">
      </div>
      <div class="form-group">
        <label>本文</label>
        <textarea type="text" class="form-control" rows="5" aria-label="本文" v-model="form.body"/>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="submit">送信</button>
    </form>
  </div>
</template>

<script>

export default {
  data(){
    return {
      form: {
        title: "",
        body: ""
      }
    }
  },
  methods:{
    submit(){
      console.log(this.form)
    }
  }
}
</script>

<style>

</style>