<template lang='html'>
  <div>
    <h1>Login</h1>
    <form class='' action='index.html' method='post'>
      <label for='email'>Email</label>
      <input id='email' type='email' v-model='email'>
      <label for='password'>Password</label>
      <input id='password' type='password' v-model='password'>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>
  label {
    font-size: 1.4em;
  }
  input {
    width: 100%;
    border: 1px solid gray;
    font-size: 1.2em;
    border-radius: 2px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
</style>
