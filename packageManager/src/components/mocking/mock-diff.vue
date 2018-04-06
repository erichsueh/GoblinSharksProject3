<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Differences</b></h1>
    <p>The number of breaking changes between each git update. Lower is better.</p>
    <jmock/>
    <easymock/>
		<mockito/>
    <powermock/>
  </div>
</template>

<script>
import mockito from '@/components/mocking/mockito.vue'
import easymock from '@/components/mocking/easymock.vue'
import powermock from '@/components/mocking/powermock.vue'
import jmock from '@/components/mocking/jmock.vue'

export default {
  components: {
    mockito,
    easymock,
    powermock,
    jmock
  }
}
</script>
