<template>
  <b-container>
    <b-row>
      <b-col cols="12" class="text-center">
        <img alt="Vue logo" src="../assets/logo.png" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div>value : {{ val }}</div>
        <div>value From State : {{ getFromState }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-button @click="counter" variant="primary" size="sm">Add counter </b-button>
        &nbsp;
        <b-button @click="subtracter" variant="danger" size="sm">Subtract counter
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import { BContainer, BButton, BCol, BRow } from "bootstrap-vue";
import { ref, computed, onMounted } from "@vue/composition-api";
import { title, metaDescription, metaKeyword } from '../helper/header'
export default {
  components: {
    BContainer,
    BButton,
    BCol,
    BRow,
  },
  setup(props, { root: { $store } }) {
    
    onMounted(function(){
      title('Home')
      metaDescription('This is about all')
      metaKeyword("about, company, useful")
    })
    const val = ref(0);
    const getFromState = computed(() => $store.getters["general/getValue"]);
    const counter = () => {
      $store.dispatch("general/addValue");
    };
    const subtracter = () => {
      $store.dispatch("general/subtractValue");
    };
    return {
      val,
      getFromState,
      counter,
      subtracter,
    };
  },
};
</script>
