<template>
	<div>
  	<h1>Performance</h1>
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
