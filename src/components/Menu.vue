<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { milkshakes, juices } from '@/lib/data'

const accordionItems = [
  {
    title: 'Milkshakes',
    content: milkshakes
  },
  {
    title: 'Juices',
    content: juices
  }
]
</script>

<template>
  <div class="w-[80%] bg-white rounded-3xl mx-auto p-4 mt-8">
    <h2 class="text-center text-slate-800 font-semibold text-2xl">Menu</h2>
    <Accordion type="single" class="w-full" collapsible>
      <AccordionItem v-for="item in accordionItems" :key="item.title" :value="item.title">
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
