<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <image-slider class="d-none"/>
      </b-col>
      <b-col cols="12">
        <p>This is about page</p>
      </b-col>
      <b-col cols="12">
        <p>Loading : {{ loading }}</p>
      </b-col>
      <b-col cols="12">
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-card>
              <ul>
                <li>
                  <b-skeleton width="40%"></b-skeleton>
                </li>
                <li>
                  <b-skeleton width="40%"></b-skeleton>
                </li>
                <li>
                  <b-skeleton width="40%"></b-skeleton>
                </li>
              </ul>
            </b-card>
          </template>
          <b-card>
            <ul>
              <li v-for="list in getFromState" :key="list.id">
                {{ list.email }}
              </li>
            </ul>
          </b-card>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { title, metaDescription, metaKeyword } from "../helper/header";
import ImageSlider from "../components/ImageSlider";
import { onBeforeMount, computed, reactive } from "@vue/composition-api";
export default {
  components: {
    ImageSlider,
  },
  setup(props, { root: { $store } }) {
    onBeforeMount(function() {
      $store.dispatch("general/getData");
    });

    title("About");
    metaDescription("This is about all");
    metaKeyword("about, company, useful");
    let loading = computed(() => $store.getters["general/getLoading"]);

    let getFromState = reactive(
      computed(() => $store.getters["general/getData"])
    );
    return {
      loading,
      getFromState,
    };
  },
};
</script>
