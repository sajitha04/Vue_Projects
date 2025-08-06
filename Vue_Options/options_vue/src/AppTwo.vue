<!-- composition API -->

<template>
  <h1>{{ name }}</h1>
  <!-- <h1>{{ status }}</h1> -->
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>
  <h3>Tasks</h3>
  <li v-for="tasks in task" :key="tasks">
    <span>{{ tasks }}</span>
    <button @click="deleteBtn(index)">X</button>
  </li>
  
  <button @click="toggleStatus">Change status</button>
</template>

<script setup>
import { onMounted, ref } from "vue";
const name = ref("sajitha");
const status = ref("pending");
const task = ref(["TaskOne", "TaskTwo", "TaskThree"]);
const newTask = ref("")
const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};
const addTask = () => {
  if (newTask.value.trim() !== "") {
    task.value.push(newTask.value);
    newTask.value = " ";
  }
};
const deleteBtn =(index)=>{
  //  task.value = task.value.filter ((_, i) => i !== index)
  task.value.splice(index,1)

  }

  onMounted(async()=>{
  try{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    task.value = data.map((task)=>task.title);
    
      
    }
      
   
  catch(error){
    console.error("errorrr");
    
  }
})

</script>
