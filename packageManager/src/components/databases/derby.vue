<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>

        <a class="card-link" target="_blank" href="https://github.com/apache/derby " id="logo"> 
          <h2 class="card-header">Derby</h2> 
        </a>

        <b-card-body>
          <p>
            Derby is a pure Java, standards-based relational database engine.
            Derby aims to be an easy to use solution for data management for
            software developers with zero administration for end users. 
          </p>
        </b-card-body>

        <p class="date">Last Modified Date: 2018-02-18</p>
        <a target="_blank" href="https://github.com/apache/derby ">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
        
      </b-col>

      <b-col align-self="center">
        <img src="../../assets/Derby.png"/>
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