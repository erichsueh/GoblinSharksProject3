<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>
        <a class="card-link" target="_blank" href="https://github.com/dom4j/dom4j" id="logo"> 
          <h1 class="card-header">Dom4j</h1> 
        </a>
        <b-card-body>
          <p>
            DOM4J is an open source framework for processing XML which is integrated with XPath and fully supports DOM, SAX, JAXP and the Java platform such as Java 2 Collections.
          </p>
        </b-card-body>
        <p class="date">Last Modified Date: 2017-09-16</p>
        <a target="_blank" href="https://github.com/dom4j/dom4j">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
      </b-col>

      <b-col align-self="center">
        <img src="../../assets/Dom4j.png" class="graphs"/>
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