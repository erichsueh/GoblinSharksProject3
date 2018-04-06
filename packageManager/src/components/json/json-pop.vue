<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Popularity</b></h1>
    <p>Popularity is how many people use the program. The higher the number the better.</p>
  	<gson/>
    <jsonsimple/>
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
