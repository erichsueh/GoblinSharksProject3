<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>
        <a class="card-link" target="_blank" href="https://github.com/google/guava" id="logo"> 
          <h1 class="card-header">Guava</h1> 
        </a>
        <b-card-body>
          <p>
            Guava is a set of core libraries that includes new collection types (such as multimap and multiset), immutable collections, a graph library, functional types, an in-memory cache, and APIs/utilities for concurrency, I/O, hashing, primitives, reflection, string processing, and much more!
          </p>
        </b-card-body>
        <p class="date">Last Modified Date: 2018-02-20</p>
        <a target="_blank" href="https://github.com/google/guava">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
      </b-col>

      <b-col>


        <img src="../../assets/Guava.png" class="graphs"/>
      </b-col>

    </b-row>
  
  </b-card>
</div>
</template>

<script>
export default {
  name: 'guava'
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