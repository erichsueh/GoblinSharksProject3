<template>
	<div>
    <br>
  	<h1 class="filter-title"><b>Date</b></h1>
    <p>The Date is based off of when the last update was.</p>
    <conscrypt/>
    <bouncycastle/>
    <spongycastle/>
    <conceal/>
    <commonscrypto/>
    <keyczar/>
    <chimera/>
  </div>
</template>

<script>
import bouncycastle from '@/components/cryptography/bouncycastle.vue'
import chimera from '@/components/cryptography/chimera.vue'
import commonscrypto from '@/components/cryptography/commonscrypto.vue'
import conceal from '@/components/cryptography/conceal.vue'
import conscrypt from '@/components/cryptography/conscrypt.vue'
import keyczar from '@/components/cryptography/keyczar.vue'
import spongycastle from '@/components/cryptography/spongycastle.vue'

export default {
  components: {
    bouncycastle,
    chimera,
    commonscrypto,
    conceal,
    conscrypt,
    keyczar,
    spongycastle
  }
}
</script>
