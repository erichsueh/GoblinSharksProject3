<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>
        <a class="card-link" target="_blank" href="https://github.com/junit-team/junit4" id="logo"> 
          <h1 class="card-header">JUnit</h1> 
        </a>
        <b-card-body>
          <p>
            JUnit is a simple framework to write repeatable tests. It is an instance of the xUnit architecture for unit testing frameworks.
          </p>
        </b-card-body>

        <p class="date">Last Modified Date: 2018-02-15</p>
        <a target="_blank" href="https://github.com/junit-team/junit4">
          <img src="../../assets/github1.png" class="gitImage">
        </a>

      </b-col>

      <b-col>
        <img src="../../assets/JUnit4.png" class="graphs"/>
      </b-col>

    </b-row>
  
  </b-card>
</div>
</template>

<script>
export default {
  name: 'junit4'
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