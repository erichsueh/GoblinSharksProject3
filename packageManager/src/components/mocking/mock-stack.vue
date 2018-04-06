<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Number of Stackoverflow</b></h1>
    <p>This shows how many stack overflow questions there have been overall.</p>
		<mockito/>
    <powermock/>
    <easymock/>
		<jmock/>
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
