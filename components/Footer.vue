<template>
  <div class="font-lato">
    <div class="bg-darkGray py-10 text-white px-20 md:px-0">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-3 gap-4">
          <div class="text-center text-base">
            <div class="mb-5">
              <img
                src="~/assets/icons/logoyesdok.png"
                class="h-80px mx-auto"
                alt="Logo YesDok"
              />
            </div>
            <p class="mb-5">
              YesDok adalah layanan ehealth yang terjangkau dengan platform
              mobile yang mudah digunakan dan tangguh. Menembus 17.504 pulau dan
              260 juta pengguna di Indonesia.
            </p>
            <img
              src="https://images.dmca.com/Badges/dmca_protected_sml_120l.png?ID=8a3a3757-4da1-47c3-a8d9-1f84bf10a04b"
              width="140px"
              class="mx-auto mb-5"
            />

            <button
              class="
                rounded-lg
                px-3
                py-2
                hover:bg-blue-700 hover:border-blue-700
                border
                transition-all
                duration-300
              "
            >
              Hubungi Kami
            </button>
          </div>
          <div>
            <div class="mb-5">
              <h3 class="text-2xl mb-3 uppercase font-bold">Indonesia</h3>
              <div class="flex">
                <div class="mr-5">
                  <img
                    src="~/assets/images/indonesia_flag.png"
                    width="26px"
                    alt=""
                  />
                </div>
                <div>
                  <p>PT Yes Dok Indonesia</p>
                  <p>Ruko Kirana Boutique</p>
                  <p>Jl. Boulevard Gading Raya Blok F3</p>
                  <p>No.11</p>
                  <p>Jakarta 14240</p>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-2xl mb-3 uppercase font-bold">Singapore</h3>
              <div class="flex">
                <div class="mr-5">
                  <img
                    src="~/assets/images/singapore_flag.png"
                    width="26px"
                    alt=""
                  />
                </div>
                <div>
                  <p>YesDok Pte. Ltd.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="mb-5">
              <h3 class="text-2xl mb-3 uppercase font-bold">Kontak</h3>
              <div class="flex">
                <div class="mr-5">
                  <FontAwesomeIcon :icon="faEnvelope" />
                </div>
                <div>
                  <p>Corporate Info :</p>
                  <p>info@yesdok.com</p>
                </div>
              </div>
              <div class="flex">
                <div class="mr-5">
                  <FontAwesomeIcon :icon="faEnvelope" />
                </div>
                <div>
                  <p>Customer Service :</p>
                  <p>help@yesdok.com</p>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-2xl mb-3 uppercase font-bold">Follow Us</h3>
              <div class="flex">
                <div
                  class="
                    rounded-full
                    h-12
                    w-12
                    bg-white
                    flex
                    items-center
                    justify-center
                    mr-5
                  "
                >
                  <FontAwesomeIcon
                    :icon="faFacebookF"
                    class="text-darkGray text-2xl"
                  />
                </div>

                <div
                  class="
                    rounded-full
                    h-12
                    w-12
                    bg-white
                    flex
                    items-center
                    justify-center
                    mr-5
                  "
                >
                  <FontAwesomeIcon
                    :icon="faTwitter"
                    class="text-darkGray text-2xl"
                  />
                </div>

                <div
                  class="
                    rounded-full
                    h-12
                    w-12
                    bg-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FontAwesomeIcon
                    :icon="faInstagram"
                    class="text-darkGray text-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-darkerGray text-white py-5 px-10">
      COPYRIGHT ©2021 ALL RIGHTS RESERVED BY YesDok (Demo Technical Test)
    </div>
  </div>
</template>

<script>
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
export default {
  computed: {
    faEnvelope() {
      return faEnvelope
    },
    faFacebookF() {
      return faFacebookF
    },
    faTwitter() {
      return faTwitter
    },
    faInstagram() {
      return faInstagram
    },
  },
}
</script>
