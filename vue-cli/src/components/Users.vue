import router from './router'
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">
      <img src="../assets/logo.png" width="30" height="30" alt="">
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
  <div class="jumbotron">
  <h1 class="display-4">Users Component</h1>
  <p class="lead"> </p>
  <hr class="my-4">
  <p></p>
  </div>



<div class="container">
    <h3>Listing Users:</h3>
    <table class="table">
      <thead>
        <tr>
 <!--         <th scope="col">Id</th> -->
          <th scope="col">Userame</th>
          <th scope="col">Email</th>
 <!--         <th scope="col">Password</th> -->
          <th scope="col">Allow access </th>
          <th scope="col">Roles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user._id"> 
          <th scope="row">{{user.username}}</th>
<!--          <td>{{user.username}}</td> -->
          <td>{{user.email}}</td>
<!--          <td>{{user.password}}</td> -->
          <td>{{user.allowAccess}} </td>
          <td>{{user.roles}} </td>
        </tr>
      </tbody>
    </table> 
  </div> 
  </div> 

</template>
<script>
import axios from 'axios'
export default {
  name: 'Users',
  data() {
    return {
      users: null
  }
  },
  created: function() {
      axios.get('http://localhost:5000/users',{headers:{"x-auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTViNGUyOTQwNThiNTBkNWNjNTUxM2EiLCJ1c2VybmFtZSI6InVzZXIxMiIsImNyZWF0ZWRBdCI6MTU4MzA0MjEwNTExNCwiaWF0IjoxNTgzMDQyMTA1fQ.49vCgnSdCvwdIC65Bm23irHDgwYnKPMQCyWjl_IgE2Q"}})
        .then(res => {
          this.users = res.data;
  
        })
    }
  
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>