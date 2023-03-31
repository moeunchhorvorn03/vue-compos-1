<template>
  <div class="Home">
    <h1>Space left: {{ SpaceLeft }} out of {{ capacity }}</h1>
    <h3>Attending</h3>
    <ul>
      <li v-for="(name, index) in attending" :key="index">{{ name }}</li>
    </ul>
    <button @click="increament">Increase capacity</button>
  </div>
</template>

<script>

import useEven from '../use/even-space.js'
export default {
    setup(){
      const { capacity, increament, SpaceLeft, attending } = useEven();
      return{ capacity, increament, SpaceLeft, attending }
    },
};

</script>

