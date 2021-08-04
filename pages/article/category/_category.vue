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
      <div v-else class="flex items-center justify-center h-96">
        <div>
          <div class="text-2xl">
            Oops, Look's like the article wasn't exist!
          </div>
          <p
            class="text-normal text-gray-500 cursor-pointer"
            @click="$router.push('/')"
          >
            Please go back to home
          </p>
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
        this.state = 'ready'
      })
      .catch((err) => {
        console.error(err)
        this.state = 'error'
      })
  },
}
</script>
