<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Differences</b></h1>
    <p>The number of breaking changes between each git update. Lower is better.</p>
    <commonslang></commonslang>
  	<guava></guava>
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
