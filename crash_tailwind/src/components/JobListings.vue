<script setup>
import { ref ,defineProps ,onMounted, reactive } from "vue";
import JobListing from "./JobListing.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

// const jobs = ref([]);
const state = reactive({
  jobs: [],
  isLoading : true
})
defineProps({
  limit: Number,
  showButton : {
    type:Boolean,
    default: false,
  }
})
onMounted(async ()=>{
  try{
    const response = await axios.get("http://localhost:5000/jobs")
    state.jobs = response.data;
  }
  catch (error){
    console.error("Error in fetching ");
    
  }
  finally{
    state.isLoading = false;
  }
});
</script>
<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-greem-500 mb-6 text-center">
        Browse Jobs
      </h2>

      <!-- show loading spinner -->
       <div v-if="state.isLoading" class="text-center text-grey-500 py-6">
        <PulseLoader/>
       </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- <div v-for="job in jobs" :key="job.id">
          {{ job.title }}
        </div> -->
        <JobListing v-for="job in state.jobs.slice(0, limit ||state.jobs.length)"  :key="job.id" :job="job" />
      </div>
    </div>
  </section>
   <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section> 
</template>
