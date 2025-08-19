<script setup>
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import Button from "./ui/button/Button.vue";
import { Textarea } from "./ui/textarea";
import { toast } from "vue-sonner";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { Stepper, StepperItem } from "./ui/stepper";

const route = useRouter();

const details = reactive({
  firstName: "",
  secondName: "",
  dateOfBirth: "",
  phoneNumber: "",
  email: "",
  gender: "",
  address: "",
});

// Steps
const activeStep = ref(1);
const steps = [
  { step: 1, title: "Basic Info" },
  { step: 2, title: "Contact Info" },
  { step: 3, title: "Other Info" },
];

const handleSubmit = () => {
  localStorage.setItem("formdetails", JSON.stringify(details));
  toast("Form submitted successfully");
  Object.keys(details).forEach((key) => (details[key] = ""));
  route.push("/nav/form/formdetails");
};
</script>

<template>
  <div class="grid place-items-center m-10">
    <Card class="p-5 w-full max-w-lg">
      <Stepper>
        <StepperItem
          v-for="step in steps"
          :key="step.step"
          :active="activeStep === step.step"
        >
        
          {{ step.title }}
        </StepperItem>
        
      </Stepper>

      <!-- Form -->

      <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-4">
        <!-- Step 1 -->
        <div v-if="activeStep === 1">
          <div class="grid gap-1">
            <Label>First Name</Label>
            <Input
              v-model="details.firstName"
              placeholder="Enter your First Name"
            />
          </div>

          <div class="grid gap-1">
            <Label>Last Name</Label>
            <Input
              v-model="details.secondName"
              placeholder="Enter your Last Name"
            />
          </div>

          <div class="grid gap-1">
            <Label>Choose Your D.O.B</Label>
            <Input type="date" v-model="details.dateOfBirth" />
          </div>
        </div>

        <!-- Step 2 -->
        <div v-else-if="activeStep === 2">
          <div class="grid gap-1">
            <Label>Phone Number</Label>
            <Input
              v-model="details.phoneNumber"
              placeholder="Enter 10-digit mobile number"
            />
          </div>

          <div class="grid gap-1">
            <Label>Email</Label>
            <Input v-model="details.email" placeholder="example@gmail.com" />
          </div>
        </div>

        <!-- Step 3 -->
        <div v-else>
          <div class="grid gap-2">
            <Label>Gender</Label>
            <RadioGroup
              v-model="details.gender"
              :orientation="'vertical'"
              class="space-y-2"
            >
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="r1" value="male" name="gender" />
                <Label for="r1">Male</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="r2" value="female" name="gender" />
                <Label for="r2">Female</Label>
              </div>
            </RadioGroup>
          </div>

          <div class="grid gap-1">
            <Label>Address</Label>
            <Textarea
              v-model="details.address"
              placeholder="Enter your address"
            />
          </div>
        </div>

        <div class="flex justify-between mt-4">
          <Button
            
            type="button"
            @click="activeStep--"
            :disabled="activeStep === 1"
          >
            Previous
          </Button>

          <Button
            v-if="activeStep < steps.length"
           
            type="button"
            @click="activeStep++"
          >
            Next
          </Button>

          <Button v-else  type="submit" >
            Submit
          </Button>
        </div>
      </form>
    </Card>
    <RouterView/>
  </div>
</template>
