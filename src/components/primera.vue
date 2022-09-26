<template>
    <div>
        <h1>Primera</h1>
        <p>{{pokemons?.value}}</p>
    </div>
</template>
  
<script>
import { getAlgo } from '@/services/index';

export default {
    name: 'primera',
    data() {
        return {
            pokemons: null,
        }
    },
    async created() {
      const response = await getAlgo()
        this.pokemons = response.data
    }
}
</script>
  