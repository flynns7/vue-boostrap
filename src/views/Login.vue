<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <validation-observer ref="observer" v-slot="{ handleSubmit }">
          <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
            <validation-provider
              name="Email"
              :rules="{ required: true, email: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="group-email"
                label="Email"
                label-for="group-email"
              >
                <b-form-input
                  id="email"
                  name="email"
                  v-model="form.email"
                  :state="getValidationState(validationContext)"
                  aria-describedby="email-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="email-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <validation-provider
              name="Password"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="group-password"
                label="Password"
                label-for="group-password"
              >
                <b-form-input
                  id="password"
                  name="password"
                  v-model="form.password"
                  type="password"
                  :state="getValidationState(validationContext)"
                  aria-describedby="password-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="password-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <b-button type="submit" variant="primary" :disabled="disabled">
              <b-spinner small v-if="loader"></b-spinner>
              Submit</b-button
            >
            <b-button class="ml-2" @click="resetForm()">Reset</b-button>
          </b-form>
        </validation-observer>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
          <p>Data Fetched</p>
          <p>{{ fetchedData }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { title, metaDescription, metaKeyword } from "../helper/header";
import { reactive, ref,onBeforeMount } from "@vue/composition-api";
import { create } from "apisauce";
export default {
  setup(props, { root: { $nextTick, $refs } }) {
    const api = create({
      baseURL: "https://reqres.in/",
      headers: { Accept: "application/json" },
    });
    title("Login Page");
    metaDescription("Login");
    metaKeyword("Login");
    // let fetchedData = ref(null)
    
    let fetchedData = reactive({data : null})
    onBeforeMount(async function() {
      try{
      const response = await api.get("api/users?page=2")
      fetchedData.data = response.data
      console.log(fetchedData)
      }catch(e){
        console.log(e)
      }
    })
    const foods = reactive([
      { value: null, text: "Choose..." },
      { value: "apple", text: "Apple" },
      { value: "orange", text: "Orange" },
    ]);
    let form = reactive({
      email: null,
      password: null,
    });
    let disabled = ref(false);
    let loader = ref(false);
    function getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    }
    function resetForm() {
      form = {
        email: null,
        password: null,
      };

      $nextTick(() => {
        $refs.observer.reset();
      });
    }
    
    function onSubmit() {
      disabled.value = true;
      loader.value = true;
      api.post("api/login", form).then((response) => {
        disabled.value = false;
        loader.value = false;
        const data = response.data;
        if (data.error) alert(data.error);
        else alert("login success");

        localStorage.setItem("token", data.token);
      });
    }

    return {
      foods,
      form,
      getValidationState,
      resetForm,
      onSubmit,
      loader,
      disabled,
      fetchedData
    };
  },
};
</script>
