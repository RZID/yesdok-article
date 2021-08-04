<template>
  <div class="grid grid-cols-6 gap-5 h-250px">
    <div
      class="
        col-span-2
        rounded-lg
        bg-no-repeat bg-center bg-cover
        cursor-pointer
      "
      @click="$router.push(`/article/${link}`)"
      :style="`background-image: url('${image}')`"
    ></div>
    <div class="col-span-4 flex flex-col justify-around">
      <h1
        class="text-2xl mb-5 cursor-pointer"
        @click="$router.push(`/article/${link}`)"
      >
        {{ title }}
      </h1>
      <p class="text-lg text-gray-500">
        {{ firstParagraph }}
      </p>
      <div class="flex">
        <div
          class="
            mr-5
            rounded-full
            px-5
            text-sm
            bg-peru
            text-white
            font-roboto
            cursor-pointer
          "
          @click="$router.push(`/article/category/${category.link}`)"
        >
          {{ category.name }}
        </div>
        <div
          class="
            text-sm
            font-roboto
            border
            rounded-full
            px-5
            text-darkslategray
            border-darkslategray
          "
        >
          <FontAwesomeIcon :icon="faClock" />
          {{ created_on }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faClock } from '@fortawesome/free-solid-svg-icons'
export default {
  computed: {
    faClock() {
      return faClock
    },
  },
  props: ['firstParagraph', 'image', 'title', 'category', 'created_on', 'link'],
}
</script>
