<template>
  <b-card tag="article"
            style="max-width: 40rem;"
            class="mb-2">
    <p id="title"> testng </p>
    <img src="../../assets/Screen_Shot_2018-04-04_at_7.43.04_PM.png"/>        
    <p class="card-text">
      TestNG is a testing framework inspired from JUnit and NUnit but introducing some new functionalities that make it more powerful and easier to use
    </p>
    <b-button target="_blank" href="https://github.com/cbeust/testng"> GitHub Link</b-button>
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
</style>