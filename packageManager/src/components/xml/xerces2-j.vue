<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>
        <a class="card-link" target="_blank" href="https://github.com/apache/xerces2-j" id="logo"> 
          <h1 class="card-header">Xerces2-j</h1> 
        </a>
        <b-card-body>
          <p> 
            The rich generating and validating capabilities allow the Xerces-J Parser to be used for:

            Building XML-savvy Web servers.
            The next generation of vertical applications which will use XML as their data format.
            On-the-fly validation for creating XML editors.
            Ensuring the integrity of e-business data expressed in XML.
            Building truly internationalized XML applications. 
          </p>
        </b-card-body>
        <p class="date">Last Modified Date: 2018-02-14</p>
        <a target="_blank" href="https://github.com/apache/xerces2-j">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
      </b-col>

      <b-col align-self="center">
        <img src="../../assets/Xerces2-j.png" class="graphs"/>
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