<script setup>
import { Button } from "./ui/button";
import { Card, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { toast } from "vue-sonner";
import ModeSwitch from "./ModeSwitch.vue";
import ColorSwitcher from "./ColorSwitcher.vue";
const userName = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = () => {
  if (userName.value === "admin" && password.value === "123456") {
    router.push("/nav");
  } else {
    toast.error("Invalid login", {
      description: "Please check your username and password.",
    });
  }
};

</script>
<template>
 
  <div class="flex justify-end p-10">
     <ColorSwitcher/>
     <ModeSwitch/>

  </div>
   
  <div class="flex items-center justify-center min-screen">
    <Card class="p-6 w-80">
      <CardHeader class="text-3xl">Login Page</CardHeader>
      <Label>UserName</Label>
      <Input v-model="userName" type="text" placeholder="Enter your username" required></Input>
      <Label>Password</Label>
      <Input
      v-model="password"
        type="password"
        placeholder="password must be atleast 6 digit"
        required
      ></Input>

      <Button @click="handleLogin">Login</Button> 
    </Card>

  </div>


 


</template>
