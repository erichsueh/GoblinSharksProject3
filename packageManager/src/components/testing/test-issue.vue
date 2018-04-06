<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Issue Resolve Time</b></h1>
    <p>The issues is how quickly someone response to an issue. Lower is better.</p>
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
