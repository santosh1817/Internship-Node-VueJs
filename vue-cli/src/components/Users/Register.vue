<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">
      <img src="./logo.png" width="30" height="30" alt="">
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon"></span>
        aria-label="Toggle navigation"
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
         
          <li class="nav-item active">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/users">Users</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/users/register">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </nav>
      <h1>Create An User</h1>
      <form v-on:submit.prevent="addItem" v-if="!savingSuccessful">
        <div class="col-md-6">
          <div class="form-group">
            <label>Email:</label>
            <input type="text" class="form-control" v-model="formData.email" />
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label>Password:</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.password"
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label>Username:</label>
            <input
              type="text"
              class="form-control "
              v-model="formData.username"
            />
          </div>
        </div>

        <div class="form-group">
          <button class="btn btn-primary">Add Item</button>
        </div>

        <div class="success">
          <h1>{{ this.message }}</h1>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data: () => ({
    formData: {
      email: null,
      password: null,
      username: null
    },
    message: ''
  }),
  methods: {
    addItem() {
      axios
        .post('http://localhost:5000/users/register', this.formData)
        .then(response => {
          (this.formData.email = null),
            (this.formData.password = null),
            (this.formData.username = null),
            setTimeout(
              () => (this.message = 'User created successfully'),
              1000
            );
          setTimeout(() => (this.message = ''), 1000);
          console.log(response);
          setTimeout(() => this.$router.push('/users'), 1000);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
