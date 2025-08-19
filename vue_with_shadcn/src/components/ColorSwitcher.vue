<script setup>
import { useColorTheme } from "@/composables/useColorTheme";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Palette } from "lucide-vue-next";
// Get the theme state and list of themes from our composable
const { theme, themes } = useColorTheme();
// Helper to capitalize strings for display
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const colorMap = {
  slate: "bg-slate-500",
  red: "bg-red-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-500",
  rose: "bg-rose-500",
  blue: "bg-blue-500",
  violet: "bg-violet-500",
  green: "bg-green-500",
}
</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="icon">
        <Palette class="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem
        v-for="color in themes"
        :key="color"
        @click="theme = color"
      >
        <span class=" mr-2 h-4 w-4 rounded-full"  :class="colorMap[color]" />
        <span>{{ capitalize(color) }}</span>
        <span v-if="theme === color" class="ml-auto text-xs">✓</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
