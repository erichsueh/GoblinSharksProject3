<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>

        <a class="card-link" target="_blank" href="https://github.com/apache/logging-log4j2" id="logo"> 
          <h1 class="card-header">Log4j 2</h1> 
        </a>

        <b-card-body>
          <p>
            Apache Log4j 2 is an upgrade to Log4j that provides significant improvements over its predecessor, Log4j 1.x, and provides many of the improvements available in Logback while fixing some inherent problems in Logback's architecture.
          </p>
        </b-card-body>

        <p class="date">Last Modified Date: 2018-01-31</p>
        <a target="_blank" href="https://github.com/apache/logging-log4j2">
          <img src="../../assets/github1.png" class="gitImage">
        </a>

      </b-col>

      <b-col align-self="center">
        <img src="../../assets/Log4j2.png"/>
      </b-col>

    </b-row>
  
  </b-card>
  </div>
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