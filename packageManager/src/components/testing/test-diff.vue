<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Differences</b></h1>
    <p>The number of breaking changes between each git update. Lower is better.</p>
    <testng></testng>
  	<junit4></junit4>
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
