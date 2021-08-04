<template>
  <div>
    <div class="sticky top-0">
      <Navbar />
      <ArticleCategory />
    </div>
    <div
      class="container mx-auto font-cabin my-5 min-h-full text-darkslategray"
    >
      <div
        v-if="state === 'loading'"
        class="h-96 flex items-center text-2xl text-center justify-center"
      >
        <FontAwesomeIcon :icon="faCircleNotch" spin class="mr-3" />
        Loading
      </div>
      <div v-else-if="state === 'ready'">
        <div class="col-span-3">
          <h1 class="text-3xl mb-5 font-bold">Artikel Terbaru</h1>
          <ArticlePreviewLarge
            :title="el.title"
            :firstParagraph="el.contents[0]"
            :link="el.link"
            :image="el.bannerImg ? el.bannerImg : null"
            :category="el.category"
            :created_on="el.created_on"
            v-for="(el, i) in articles"
            :key="i"
            class="mb-5"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
export default {
  data: () => {
    return {
      state: 'loading',
      articles: [],
    }
  },
  computed: {
    faCircleNotch() {
      return faCircleNotch
    },
  },
  methods: {
    ...mapActions({
      getArticlesByCategory: 'articles/getArticlesByCategory',
    }),
  },
  mounted() {
    this.getArticlesByCategory(this.$route.params.category)
      .then((res) => {
        this.articles = res
      })
      .catch((err) => console.error(err))
      .finally(() => {
        this.state = 'ready'
      })
  },
}
</script>
