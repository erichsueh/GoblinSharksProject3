<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Popularity</b></h1>
    <p>Popularity is how many people use the program. The higher the number the better.</p>
		<mockito/>
    <easymock/>
    <jmock/>
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
