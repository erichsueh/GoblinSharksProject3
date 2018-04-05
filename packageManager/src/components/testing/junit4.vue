<template>
  <b-card tag="article"
            style="max-width: 40rem;"
            class="mb-2">
    <p id="title"> junit4 </p>
    <img src="../../assets/Screen_Shot_2018-04-04_at_7.43.04_PM.png"/>        
    <p class="card-text">
      JUnit is a simple framework to write repeatable tests. It is an instance of the xUnit architecture for unit testing frameworks.
    </p>
    <!-- <button class="gitBtn"><img src="../../assets/download.png"></button> -->
    <b-button target="_blank" href="https://github.com/junit-team/junit4"> GitHub Link</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'test4'
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