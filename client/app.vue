<template>
  <div class="flex flex-col gap-4 bg-[#0a000a] min-h-screen text-gray-50 items-center p-8">
    <div class="font-semibold text-8xl font-scary">
      Roommate Spy
    </div>
    <div class="flex flex-col gap-2 text-4xl items-center rounded bg-[#270c12] p-8 w-[540px] max-w-screen">
      <div v-for="ping in pings" :key="ping.id">
        {{ ping.createdAt }}
      </div>

    </div>
  </div>
</template>

<script setup>

const pings = ref([])

onMounted(async () => {
  
  fetch('http://34.133.54.49/').then(async r => {
    pings.value = await r.json()
  })

})

</script>
