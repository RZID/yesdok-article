<template>
  <div class="bg-darkslategray text-white py-3 overflow-auto">
    <div class="container mx-auto flex whitespace-nowrap px-10">
      <h1
        v-for="(el, i) in category"
        :key="i"
        class="mr-5 font-lato font-extrabold uppercase cursor-pointer"
        @click="$router.push(`/article/category/${el.link}`)"
      >
        {{ el.name }}
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      category: 'articles/getCategory',
    }),
  },
}
</script>
