<template>
<b-container >
  <b-row>
    <b-col cols="12">
      <image-slider />
    </b-col>
    <b-col cols="12">
      <p>This is about page</p>
    </b-col>
  </b-row>
</b-container>
</template>
<script>
import {BContainer, BRow, BCol} from 'bootstrap-vue'
import ImageSlider from '../components/ImageSlider'
export default {
  components:{
    BContainer,
    BRow,
    BCol,
    ImageSlider
  }
}
</script>
