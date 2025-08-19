<script setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
const content = [
  {
    topic: "Want to know About us?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, officiis.",
  },
  {
    topic: "why ...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, officiis.",
  },
  {
    topic: "what...?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, officiis.",
  },
  {
    topic: "know more....",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, officiis.",
  },
];
</script>
<template>
  
     <div  >
   <Accordion type="single" collapsible >
    <AccordionItem
      v-for="(item, index) in content"
      :key="index"
      :value="`item-${index}`"
    >
      <AccordionTrigger class=" text-2xl">
        {{ item.topic }}
      </AccordionTrigger>
      <AccordionContent class=" text-xl">
        {{ item.description }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  </div>
</template>
