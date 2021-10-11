<template>
  <div class="container">
      <TitleAlt :title="post.title"/>
      <div class="content">
          <div v-html="post.html"></div>
      </div>
    <router-link to="/verbose">EOF</router-link>
  </div>
</template>

<script>
import { getSinglePost } from '@/api/posts'
import TitleAlt from '@/components/TitleAlt'

export default {
    name: 'Post',
    components: {
        TitleAlt
    },
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
/deep/ p {
    margin-bottom: 1em;
}
</style>