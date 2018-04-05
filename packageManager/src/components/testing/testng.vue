<template>
  <b-card tag="article"
            style="max-width: 40rem;"
            class="mb-2">

    <a class="card-link" target="_blank" href="https://github.com/cbeust/testng" id="logo"> <h1 class="card-header">testng</h1> </a>
    <img src="../../assets/Screen_Shot_2018-04-04_at_7.43.04_PM.png"/>        
    <p class="card-text">
      TestNG is a testing framework inspired from JUnit and NUnit but introducing some new functionalities that make it more powerful and easier to use
    </p>
  </b-card>
</template>

<script>
export default {
  name: 'testng'
}
</script>

<style>
#title {
  font-size: 50px;
  font-weight: bold;
}

img {
  width: 500px;
}

.gitBtn {
  width: 100px;
  height: 100px;
}

.card-text {
  padding-left: 50px;
  padding-right: 50px;
}

a:hover {
  text-decoration: none;
}

.card-header {
  background-color: white;
}
</style>