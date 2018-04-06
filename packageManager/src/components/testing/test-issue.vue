<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Issue Resolve Time</b></h1>
    <p>description</p>
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
