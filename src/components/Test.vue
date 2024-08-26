<template>
  <div class="py-16">
    <v-slider v-model="values" :start="configs.start" :step="configs.step" :connect="configs.connect"
      :range="configs.range" :pips="configs.pips"></v-slider>
  </div>
</template>

<script>
import 'nouislider-vue3/css';
import VSlider from 'nouislider-vue3';

export default {
  components: {
    VSlider,
  },

  data() {
    return {
      values: 1,
      configs: {
        start: 1,
        step: 1,
        connect: true,
        range: {
          min: 1,
          max: 10,
        },
        pips: {
          mode: 'steps',
          density: 10,  // Controls the density of the pips
          format: {
            to: function (value) {
              return value.toFixed(0);  // Customize the format of the pip labels
            },
          },
        },
      },
    }
  },
}
</script>
