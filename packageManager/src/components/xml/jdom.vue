<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>
        <a class="card-link" target="_blank" href="https://github.com/hunterhacker/jdom" id="logo"> 
          <h1 class="card-header">Jdom</h1> 
        </a>
        <b-card-body>
          <p>
            Jdom provides a complete, Java-based solution for accessing, manipulating, and outputting XML data from Java code. 
          </p>
        </b-card-body>
        <p class="date">Last Modified Date: 2017-12-27</p>
        <a target="_blank" href="https://github.com/hunterhacker/jdom">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
      </b-col>

      <b-col align-self="center">
        <img src="../../assets/Jdom.png" class="graphs"/>
      </b-col>

    </b-row>
  
  </b-card>
</div>
</template>

<script>
export default {
  name: 'dom4j'
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