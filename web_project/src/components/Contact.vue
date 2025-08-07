<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
const fname = ref('');
const sname = ref('');
const toast = useToast();

const handleSubmit = () =>{
    console.log(fname);
    console.log(sname);
    toast.success("Form submitted successfully")
    // fname.value = "";
    // sname.value = "";
    
}
</script>
<template>
    <!-- <h1>This is the contact page</h1> -->
    <form @click.prevent="handleSubmit">
        <br>
        <label for="fname" class="m-5">First Name</label>
        <input type="text"  placeholder="Enter your First Name" v-model="fname" class="border rounded  py-2 px-3 mb-2" ><br>
        <label for="sname"  class="m-5">Second Name</label>
        <input type="text" v-model="sname"  class="border rounded py-2 px-3 mb-2" placeholder="Enter your second Name"><br>
        <button class="border rounded p-2 m-10 bg-green-400" type="submit">Submit</button>
        <ul>
            <li >{{ fname }} {{ sname }} </li>
           

        </ul>
    </form>
</template>