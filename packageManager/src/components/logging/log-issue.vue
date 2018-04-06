<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Issue Resolve Time</b></h1>
    <p>The issues is how quickly someone response to an issue. Lower is better.</p>
		<tinylog/>
		<log4j2/>
		<slf4j/>
    <logback/>
		<blitz4j/>
		<minlog/>
		<comlogging/>
  </div>
</template>

<script>
import slf4j from '@/components/logging/slf4j.vue'
import log4j2 from '@/components/logging/log4j2'
import logback from '@/components/logging/logback'
import comlogging from '@/components/logging/com-logging'
import tinylog from '@/components/logging/tinylog'
import blitz4j from '@/components/logging/blitz4j'
import minlog from '@/components/logging/minlog'

export default {
  components: {
    slf4j,
    log4j2,
    logback,
    comlogging,
    tinylog,
    blitz4j,
    minlog
  }
}
</script>
