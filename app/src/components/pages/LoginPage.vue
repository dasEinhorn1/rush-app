<template lang='html'>
  <base-page>
    <h1>Login</h1>
    <form @submit.prevent="login" @keyup.enter="login">
      <email-input type='email' v-model='email'>Email</email-input>
      <password-input v-model='password'>Password</password-input>
    </form>
  </base-page>
</template>

<script>
import BasePage from './BasePage'
import EmailInput from '@ui/inputs/EmailInput'
import PasswordInput from '@ui/inputs/PasswordInput'
export default {
  components: {
    EmailInput,
    PasswordInput,
    BasePage
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      alert(`User identified by ${this.email} is attempting to log in.`)
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
