<template>
  <div>
    <div class="h-80px bg-darkslategray text-white">
      <div class="h-full container mx-auto">
        <div
          class="
            h-full
            lg:grid lg:grid-cols-4
            flex
            justify-between
            items-center
            px-10
          "
        >
          <div>
            <img
              src="~/assets/icons/logoyesdok.png"
              class="h-16 object-contain"
              alt=""
              srcset=""
            />
          </div>
          <div
            class="
              justify-around
              col-span-3
              hidden
              lg:flex
              font-lato
              uppercase
              font-extrabold
            "
          >
            <a :href="el.to" v-for="(el, i) in navigation" :key="i">{{
              el.name
            }}</a>
          </div>
          <div class="lg:hidden">
            <button @click="toggleNav">
              <FontAwesomeIcon
                v-if="expandNav"
                class="text-3xl transition-all"
                :icon="faTimes"
              />
              <FontAwesomeIcon
                v-else
                class="text-3xl transition-all"
                :icon="faBars"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-300 ease-out opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="expandNav" class="lg:hidden">Hola</div>
    </transition>
  </div>
</template>

<script>
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
export default {
  data: () => {
    return {
      expandNav: false,
      navigation: [
        {
          name: 'Beranda',
          to: '/',
        },
        {
          name: 'Perusahaan',
          to: '#',
        },
        {
          name: 'Unduh',
          to: '#',
        },
        {
          name: 'Store',
          to: '#',
        },
        {
          name: 'Karir',
          to: '#',
        },
        {
          name: 'Tentang Kami',
          to: '#',
        },
        {
          name: 'Hubungi Kami',
          to: '#',
        },
      ],
    }
  },
  methods: {
    toggleNav() {
      this.expandNav = !this.expandNav
    },
  },
  computed: {
    faBars() {
      return faBars
    },
    faTimes() {
      return faTimes
    },
  },
}
</script>
