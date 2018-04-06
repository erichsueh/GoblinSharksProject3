<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Stackoverflow</b></h1>
    <p>This shows how many stack overflow questions there have been overall.</p>
    <guava></guava>
    <commonslang></commonslang>
  </div>
</template>

<script>
import guava from '@/components/utilities/guava'
import commonslang from '@/components/utilities/commons-lang'
export default {
  components: {
    guava,
    commonslang
  }
}
</script>
