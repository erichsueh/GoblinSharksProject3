<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Stackoverflow</b></h1>
    <p>This shows how many stack overflow questions there have been overall.</p>
  	<junit4></junit4>
  	<testng></testng>
  </div>
</template>

<script>
import junit4 from '@/components/testing/junit4'
import testng from '@/components/testing/testng'
export default {
  components: {
    junit4,
    testng
  }
}
</script>
