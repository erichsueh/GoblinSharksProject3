<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Date</b></h1>
    <p>The Date is based off of when the last update was.</p>
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
