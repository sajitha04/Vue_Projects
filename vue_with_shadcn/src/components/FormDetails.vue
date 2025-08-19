<script setup>
import { onMounted, reactive } from "vue";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { useRoute, useRouter } from "vue-router";
const routes = useRouter();
const formData = reactive({});
const handleBack = () => {
  routes.push("/nav/form");
};
const handleLogout = ()=>{
    routes.push("/nav")
}
onMounted(() => {
  const stored = localStorage.getItem("formdetails") || "[]";
  if (stored) {
    Object.assign(formData, JSON.parse(stored));
  }
});
</script>
<template>
  <ScrollArea class="p-4 border rounded w-full">
    <h1>Registered Candidate</h1>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>D.O.B</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>{{ formData.firstName }}</TableCell>
          <TableCell>{{ formData.secondName }}</TableCell>
          <TableCell>{{ formData.dateOfBirth }}</TableCell>
          <TableCell>{{ formData.phoneNumber }}</TableCell>
          <TableCell>{{ formData.email }}</TableCell>
          <TableCell>{{ formData.gender }}</TableCell>
          <TableCell>{{ formData.address }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Separator />
  </ScrollArea>
  <div class="flex justify-around">
    <Button @click="handleBack">Go Back</Button>
    <Button @click="handleLogout">Home</Button>
  </div>
</template>
