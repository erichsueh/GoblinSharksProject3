<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Popularity</b></h1>
    <p>Popularity is how many people use the program. The higher the number the better.</p>
  	<junit4></junit4>
  	<testng></testng>
  </div>
</template>

<script>
import junit4 from '@/components/testing/junit4'
import testng from '@/components/testing/testng'

export default {
  name: 'test1',
  components: {
    junit4,
    testng
  }
}
</script>
