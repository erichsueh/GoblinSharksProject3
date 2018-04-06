<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>
        <a class="card-link" target="_blank" href="https://github.com/apache/commons-lang" id="logo"> 
          <h1 class="card-header">Commons Lang</h1> 
        </a>
        <b-card-body>
          <p>
            Apache Commons Lang, a package of Java utility classes for the classes that are in java.lang's hierarchy, or are considered to be so standard as to justify existence in java.lang.
          </p>
        </b-card-body>
        <p class="date">Last Modified Date: 2018-02-14</p>
        <a target="_blank" href="https://github.com/apache/commons-lang">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
      </b-col>

      <b-col>


        <img src="../../assets/CommonsLang.png" class="graphs"/>
      </b-col>

    </b-row>
  
  </b-card>
</div>
</template>

<script>
export default {
  name: 'commons-lang'
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