<script setup lang="ts">
import Menu from './components/Menu.vue'
import { PhMapPin, PhFacebookLogo, PhInstagramLogo } from '@phosphor-icons/vue'
</script>

<template>
  <header class="flex justify-between w-[80%] mx-auto mt-2">
    <img alt="logo" class="w-24 h-24 p-2" src="@/assets/logo.svg" />
    <div class="flex justify-center items-center gap-4">
      <a
        href="https://www.google.com/maps/dir/31.5517172,74.3982999/Hafiz+Juice+Corner,+Number+1,+Main+Barki+Rd,+opposite+Paragon+City,+Block+J+Gate,+Lahore,+Punjab+54000/@31.5477029,74.380583,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39191b32e03db99f:0xd1ff8422d22c9054!2m2!1d74.4455223!2d31.5267781?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        class="flex gap-1 items-center h-hit"
      >
        <PhMapPin :size="16" color="#ff0000" weight="fill" /><span>Locate Me</span>
      </a>
      <a href="tel:+923455003505" class="bg-yellow-400 py-2 px-4 rounded-lg h-fit">Place Order</a>
    </div>
  </header>
  <header class="flex justify-center items-center gap-4 w-[80%] mx-auto mt-2">
    Connect on
    <div class="flex gap-1">
      <PhFacebookLogo :size="20" color="#0000ff" />
      <a href="https://www.instagram.com/p/C_ToSO3uKSa/?igsh=MXBlajFzajNrNGVtOQ==" target="_blank">
        <PhInstagramLogo :size="20" color="#9900ff" />
      </a>
    </div>
  </header>
  <Menu />
</template>
