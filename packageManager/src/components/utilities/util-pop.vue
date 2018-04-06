<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Popularity</b></h1>
    <p>Popularity is how many people use the program. The higher the number the better.</p>
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
