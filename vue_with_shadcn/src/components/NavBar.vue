<script setup>
import {
  FilterIcon,
  FormInputIcon,
  Home,
  Inbox,
  Search,
  SettingsIcon,
} from "lucide-vue-next";
import {
  Sidebar,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./ui/sidebar";
import { useRouter } from "vue-router";
import { RouterLink, RouterView } from "vue-router";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
const items = [
  {
    title: "Home",
    icon: Home,
    route: "/nav/home",
  },
  {
    title: "Inbox",
    icon: Inbox,
    route: "/nav/inbox",
  },

  {
    title: "Form",
    icon: FormInputIcon,
    route: "/nav/form",
  },
  {
    title: "Search",
    icon: Search,
  },
  {
    title: "filter",
    icon: FilterIcon,
  }
];
const router = useRouter();
const handleLogout = ()=>{
  router.push("/")
}
</script>
<template>
 

  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <SidebarProvider>
      <div >
        <Sidebar>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <RouterLink :to="item.route" class="w-full">
                <SidebarMenuButton>
                  <component :is="item.icon" class="w-4 h-4  " />
                  <span >{{ item.title }}</span>
                </SidebarMenuButton>
              </RouterLink>
            </SidebarMenuItem>
              <SidebarMenuItem>
            <Sheet>
              <SheetTrigger as-child>
                <SidebarMenuButton>
                  <SettingsIcon class="w-4 h-4 " />
                  <span >Settings</span>
                </SidebarMenuButton>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Settings</SheetTitle>
                  <SheetDescription >Home</SheetDescription>
                  <SheetDescription>System</SheetDescription>
                  <SheetDescription @click="handleLogout">Logout</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </SidebarMenuItem>
        </SidebarMenu>
       
      </Sidebar>
      </div>
      
      <main class="flex-1 p-6">
        <!-- <RouterView /> -->
         <router-view></router-view>
      </main> 
    </SidebarProvider>
    
  </div>
</template>
