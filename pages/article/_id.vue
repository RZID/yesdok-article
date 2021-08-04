<template>
  <div>
    <div class="sticky top-0">
      <Navbar />
      <ArticleCategory />
    </div>
    <div
      v-if="state === 'loading'"
      class="h-96 flex items-center text-2xl text-center justify-center"
    >
      <FontAwesomeIcon :icon="faCircleNotch" spin class="mr-3" />
      Loading
    </div>
    <div v-else-if="state === 'ready'" class="container mx-auto w-full mb-20">
      <div class="md:px-20 px-10">
        <div class="flex justify-center w-full mt-3">
          <img
            v-if="article.bannerImg"
            :src="article.bannerImg"
            class="h-300px object-cover"
            alt="Banner image"
          />
        </div>
        <div class="flex my-3">
          <div
            class="
              px-3
              py-2
              bg-gray-300
              uppercase
              bg-peru
              font-lato font-extrabold
              text-white
              cursor-pointer
              hover:bg-darkPeru
              transition-all
              duration-300
            "
            @click="$router.push(`/article/category/${article.category.link}`)"
          >
            {{ article.category.name }}
          </div>
        </div>
        <div>
          <h1
            class="
              text-4xl
              font-cabin
              uppercase
              font-extrabold
              text-darkslategray
              mb-5
            "
          >
            {{ article.title }}
          </h1>
          <div class="text-gray-500 my-10">
            <p>
              Ditulis oleh <b>{{ article.author }}</b>
            </p>
            <p v-if="article.is_review">Direview oleh <b>Tim YesDok</b></p>
            <p>
              <FontAwesomeIcon :icon="faClock" />
              {{ article.created_on }}
            </p>
          </div>
          <div class="text-xl font-lora text-darkslategray">
            <div
              class="mb-5"
              v-for="(el, i) in article.contents"
              :key="i"
              v-html="el"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { faClock, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
export default {
  data: () => {
    return {
      state: 'loading',
      article: {},
    }
  },
  computed: {
    ...mapGetters({
      getArticles: 'articles/getArticles',
    }),
    faClock() {
      return faClock
    },
    faCircleNotch() {
      return faCircleNotch
    },
  },
  methods: {
    ...mapActions({
      getArticle: 'articles/getArticleByLink',
    }),
  },
  mounted() {
    this.getArticle(this.$route.params.id)
      .then((res) => {
        this.article = { ...res }
        this.state = 'ready'
      })
      .catch((err) => console.error(err))
      .finally(() => console.log(this.data))
  },
}
</script>
