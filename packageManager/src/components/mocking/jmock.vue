<template>
<div class="card-padding">
  <b-card>
    <b-row>
      <b-col>

        <a class="card-link" target="_blank" href="https://github.com/jmock-developers/jmock-library" id="logo"> 
          <h1 class="card-header">JMock</h1> 
        </a>

        <b-card-body>
          <p>
            JMock is a library that supports test-driven development of Java code with mock objects.

            Mock objects help you design and test the interactions between the objects in your programs.

            The jMock library:

            makes it quick and easy to define mock objects, so you don't break the rhythm of programming.
            lets you precisely specify the interactions between your objects, reducing the brittleness of your tests.
            works well with the autocompletion and refactoring features of your IDE
            plugs into your favourite test framework
            is easy to extend.
          </p>
        </b-card-body>

        <p class="date">Last Modified Date: 2018-01-07</p>
        <a target="_blank" href="https://github.com/jmock-developers/jmock-library">
          <img src="../../assets/github1.png" class="gitImage">
        </a>
        
      </b-col>

      <b-col align-self="center">
        <img src="../../assets/JMock.png"/>
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