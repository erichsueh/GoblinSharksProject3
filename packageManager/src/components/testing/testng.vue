<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>
        <a class="card-link" target="_blank" href="https://github.com/cbeust/testng" id="logo"> 
          <h1 class="card-header">TestNG</h1> 
        </a>
        <b-card-body>
          <p>
            TestNG is a testing framework inspired from JUnit and NUnit but introducing some new functionalities that make it more powerful and easier to use
          </p>
        </b-card-body>
        <p class="date">Last Modified Date: 2018-02-20</p>
        <a target="_blank" href="https://github.com/cbeust/testng">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
      </b-col>

      <b-col>
        <img src="../../assets/TestNG.jpg" class="graphs">
      </b-col>

    </b-row>
  
  </b-card>
</div>
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

.graphs {
  width: 500px;
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

.butsize {
  height: 40;
  width: 40;
}
.gitImage {
  width: 175px;
  float: left;
}
.date {
  padding-left: 22px;
}
</style>