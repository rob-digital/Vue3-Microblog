<template>
 <label for="search">Search Hashtag: #</label>
  <input id="search" type="text" :value="currentHashtag" @input="setHashtag" />
<div class="main">
  <Card
    v-for="post in filteredPosts"
    
  >

    <template v-slot:title>
      {{ post.title }}
    </template> 

    <template v-slot:content>
      {{ post.content }}
    </template> 

    <template v-slot:description>
       <Controls :post="post" />
    </template>

  </Card>

  
</div>
  
</template>

<script>
import { ref, computed } from 'vue'
import { store } from './store/store'
import Card from './components/Card.vue'
import Controls from './components/Controls.vue'

export default {
  components: {
    Card,
    Controls
  },

  setup () {


    

    const setHashtag = (evt) => {
      store.setHashtag(evt.target.value)
    }

    return {
      filteredPosts: store.filteredPosts,
      currentHashtag: computed(() => store.state.currentHashtag),
      setHashtag
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}
</style>
