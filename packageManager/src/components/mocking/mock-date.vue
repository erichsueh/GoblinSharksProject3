<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Date</b></h1>
    <p>The Date is based off of when the last update was.</p>
		<mockito/>
    <jmock/>
    <easymock/>
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
