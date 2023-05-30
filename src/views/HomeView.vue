<template>
  <div class="full">
    <h1>Spam Maker</h1>
    <div class="inbox">
      <h1>{{ pickupLine }}</h1>
      <img ref="image">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data () {
    return {
      pickupLine: '...'
    }
  },
  mounted () {
    let line = this.$store.state.templates[Math.floor(Math.random() * this.$store.state.templates.length)]
    const who = this.$store.state.who[Math.floor(Math.random() * this.$store.state.who.length)]
    const what = this.$store.state.what[Math.floor(Math.random() * this.$store.state.what.length)]
    const thanks = this.$store.state.thanks[Math.floor(Math.random() * this.$store.state.thanks.length)]
    line = line.replace('{who}', who)
    line = line.replace('{what}', what)
    line = line.replace('{thanks}', thanks)
    this.pickupLine = line
    this.$refs.image.src = this.$store.state.illustrations[Math.floor(Math.random() * this.$store.state.illustrations.length)]
  }
}
</script>
<style scoped lang="scss">
div.full {
  h1 {
    color: white;
  }
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  background: #DD5E89;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #F7BB97, #DD5E89);
  background: linear-gradient(to right, #F7BB97, #DD5E89);
  div.inbox {
    max-width: 700px;
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    h1 {
      font-size: 1.5rem;
      line-height: 2rem;
      color: black;
      text-align: left;
      padding-bottom: 10px;
      border-bottom: 1px solid #aaa;
      margin-bottom: 20px;
    }
  }
}
</style>
