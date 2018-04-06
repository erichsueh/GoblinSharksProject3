<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Differences</b></h1>
    <p>The number of breaking changes between each git update. Lower is better.</p>
    <jsonsimple/>
    <gson/>
  </div>
</template>

<script>
import gson from '@/components/json/gson'
import jsonsimple from '@/components/json/jsonsimple'

export default {
  components: {
    gson,
    jsonsimple
  }
}
</script>
