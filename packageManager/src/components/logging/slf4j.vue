<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>

        <a class="card-link" target="_blank" href="https://github.com/qos-ch/slf4j" id="logo"> 
          <h1 class="card-header">SLF4J</h1> 
        </a>

        <b-card-body>
          <p>
            The Simple Logging Facade for Java (SLF4J) serves as a simple facade or abstraction for various logging frameworks (e.g. java.util.logging, logback, log4j) allowing the end user to plug in the desired logging framework at deployment time. 
          </p>
        </b-card-body>

        <p class="date">Last Modified Date: 2018-01-31</p>
        <a target="_blank" href="https://github.com/qos-ch/slf4j">
          <img src="../../assets/github1.png" class="gitImage">
        </a>

      </b-col>
      
      <b-col align-self="center">
        <img src="../../assets/SLF4J.png"/>
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