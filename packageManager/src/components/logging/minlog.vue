<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>

        <a class="card-link" target="_blank" href="https://github.com/EsotericSoftware/minlog" id="logo"> 
          <h1 class="card-header">MinLog</h1> 
        </a>

        <b-card-body>
          <p>
            MinLog is a tiny Java logging library which features:

            Zero overhead Logging statements below a given level can be automatically removed by javac at compile time. This means applications can have detailed trace and debug logging without having any impact on the finished product.

            Extremely lightweight The entire project consists of a single Java file with ~100 non-comment lines of code.

            Simple and efficient The API is concise and the code is very efficient at runtime.
          </p>
        </b-card-body>

        <p class="date">Last Modified Date: 2017-07-07</p>
        <a target="_blank" href="https://github.com/EsotericSoftware/minlog">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
        
      </b-col>

      <b-col align-self="center">
        <img src="../../assets/Minlog.png"/>
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