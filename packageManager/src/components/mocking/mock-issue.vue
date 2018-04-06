<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Issue Resolve Time</b></h1>
    <p>The issues is how quickly someone response to an issue. Lower is better.</p>
		<powermock/>
		<easymock/>
		<mockito/>
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
