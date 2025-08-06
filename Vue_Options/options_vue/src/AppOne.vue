<!-- Options API -->
<template>
  <h1>{{ name }}</h1>
  <h1>{{ status }}</h1>
  <h2 v-for="tasks in task" :key="tasks">{{ tasks }}</h2>
  <button @click="toggleStatus">Change status</button>
</template>

<script>
export default {
  data() {
    return {
      name: "sajitha",
      status: "pending",
      task: ["TaskOne", "TaskTwo", "TaskThree"],
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>