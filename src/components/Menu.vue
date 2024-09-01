<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import milkshakes from '@/lib/data'

const defaultValue = 'Menu'

const accordionItems = [
  {
    value: 'Menu',
    title: 'Milkshakes',
    content: milkshakes
  }
]
</script>

<template>
  <div class="w-[80%] bg-white rounded-3xl mx-auto p-4 mt-8">
    <h2 class="text-center text-slate-800 font-semibold text-2xl">Menu</h2>
    <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
      <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
        <AccordionTrigger>{{ item.title }} </AccordionTrigger>
        <AccordionContent>
          <div class="flex p-1 pl-0 gap-8" v-for="content in item.content">
            <div class="flex grow">{{ content.name }}</div>
            <div class="w-10 text-center">{{ content.regularPrice }}</div>
            <div class="w-10 text-center">{{ content.jumboPrice }}</div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
