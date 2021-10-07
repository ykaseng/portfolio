<template>
  <div class="container">
      <h1>{{ post.title }}</h1>
      <div class="content">
          <div v-html="post.html"></div>
      </div>
  </div>
</template>

<script>
import { getSinglePost } from '@/api/posts'

export default {
    name: 'Post',
    components: {},
    data() {
        return {
            post: {}
        }
    },
    async created() {
        try {
            const p = await getSinglePost(this.$route.params.slug)
            this.post = p
        } catch(err) {
            this.$router.push('/404')
        }
    }
    
}
</script>

<style scoped>

</style>