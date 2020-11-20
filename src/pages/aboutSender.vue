<template>
  <q-layout view="hHh lpR fFf">
    <div class=" text-black text-center q-pa-md flex flex-center bg-grey-9">
      <div class="fit row wrap justify-start items-start content-start text-center bg-grey-9">
        <div class="col-12 full-heignt bg-grey-9" >
          <div class="q-gutter-md">
            <div class="row justify-between">
              <q-parallax
                :height="650"
                src="boxGRDark.png"
                class="margin0"
              >
                <h3 class="text-white">Заказать или доставить груз - ЛЕГКО</h3>
              </q-parallax>

            </div>
          </div>
        </div>
        <div class="col-8 full-heignt bg-grey-9 text-black" >
          <div class="margin textsz4 text-white">
            Как это работает?
          </div>
          <p class="margin bg-white p1">Вы фоторафируете свой товар. Отправляете фото на наш сайт.
            Курьры ведут торги между собой и вы выбираете оптимальный вам вариант. Затем к вам приходит наш доставщик
            и забирает посылку, при этом запирая кейс при вас (вы будете его закрывать по уникаьному bluetooth id)
          </p>
          <div class="q-pa-md">
            <q-carousel
              height="74vh"
              swipeable
              animated
              arrows
              v-model="slide"
              :fullscreen.sync="fullscreen"
              infinite
              class="bg-grey-9"
            >
              <q-carousel-slide :name="1" img-src="boxG.png" />
              <q-carousel-slide :name="2" img-src="boxGR.png" />
              <q-carousel-slide :name="3" img-src="boxGRBlueDark.png" />
              <q-carousel-slide :name="4" img-src="boxTel2.png" />

              <template v-slot:control>
                <q-carousel-control
                  position="bottom-right"
                  :offset="[18, 18]"
                >
                  <q-btn
                    push round dense color="white" text-color="primary"
                    :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                    @click="fullscreen = !fullscreen"
                  />
                </q-carousel-control>
              </template>
            </q-carousel>
          </div>
        </div>
        <div class="col-4 full-heignt bg-white p1 margintop">
          <p> Для того чтобы отправить осылку достаточно просто отправить фотографию содержимого посылки и опубликовать заказ на доставку и в рузультате внутрених торгов с курьерами вашу посылку успешно доставят.</p>
            <div class="margin">
              <!-- Здесь загрузка фотографии -->
              <q-uploader
                url="http://localhost:4444/upload"
                label="Custom list"
                multiple
                size="10vh"
              >
                <template v-slot:list="scope">
                  <q-list separator>

                    <q-item v-for="file in scope.files" :key="file.name">
                      <q-item-section>
                        <q-item-label class="full-width ellipsis">
                          {{ file.name }}
                        </q-item-label>

                        <q-item-label caption>
                          Status: {{ file.__status }}
                        </q-item-label>

                        <q-item-label caption>
                          {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                        </q-item-label>
                      </q-item-section>

                      <q-item-section
                        v-if="file.__img"
                        thumbnail
                        class="gt-xs"
                      >
                        <img :src="file.__img.src">
                      </q-item-section>

                      <q-item-section top side>
                        <q-btn
                          class="gt-xs"
                          size="12px"
                          flat
                          dense
                          round
                          icon="delete"
                          @click="scope.removeFile(file)"
                        />
                      </q-item-section>
                    </q-item>
                  </q-list>
                </template>
              </q-uploader>
              <p class="margin2"> Эти фотографи будут нужны для того чтобы доставщики могли заранее узнать о доставляемм товаре
                и оценить свои возможности. </p>
          </div>
        </div>
            <div class="col-4 full-heignt bg-grey9" style="border-radius: 5%" >
                <div class="textsz2 text-white margin text-center">
                  Почему это отличный вариант?
                </div>
                <p class="p0 margin bg-white">
                  Это отличный вариант, поскольку, используя наш сервис вы можете не беспокоиться о безопасности груза. Мы гарантируем качественную доставку груза в целости и сохранности. Это все благодаря нашей системе верификации, которую практически невозможно подделать и обойти. За счет этого мы можем спокойно ответить, что выбрав наш сервис для доставки груза, вы не будете беспокоиться о качестве обслуживания и безопасности вашего товара при транспортировке. </p>
              </div>
            <div class="col-8 full-height bg-grey9">
              <div class="q-pa-md">
                <iframe width="712" height="401"
                src="https://www.youtube.com/embed/qAeH7-_sYIk"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-12 full-height bg-grey9">
              <q-parallax
                :height="650"
                src="bo.png"
                class="margin0"
              >
              <h3 class="text-white">Заработать на доставке грузов - ЕЩЁ ЛЕГЧЕ</h3>
              </q-parallax>
            </div>
            <div class="col-4 full-height bg-white p2">
              <h5> Как это будет происходить? </h5>
              <p class="margin"> В приложении вам будет доступен список заказов с подробным их описанием.
                В описании будет отображена фотография товара, растоние и место доставки, а также
                минимальная цена для торгов. Еще рядом с заказом будет отображен необходимый уровень
                вашего профиля для доставки данного груза. Далее вы ведете торги с другими курьерами
                и если вы выйграли торг, то за вами закрепляется данный заказ
              </p>
            </div>
            <div class="col-8 full-height bg-grey9">
              <div class="q-pa-md">
            <q-carousel
              height="74vh"
              swipeable
              animated
              arrows
              v-model="slide"
              :fullscreen.sync="fullscreen"
              infinite
              class="bg-grey-9"
            >
              <q-carousel-slide :name="2" img-src="https://retail-loyalty.org/upload/iblock/946/2e9f3f5e6adc6f8d7ca2c675879c9dc4.jpg" />
              <q-carousel-slide :name="1" img-src="https://www.aurama.ru/imgs/kdpv.png" />
              <template v-slot:control>
                <q-carousel-control
                  position="bottom-right"
                  :offset="[18, 18]"
                >
                  <q-btn
                    push round dense color="white" text-color="primary"
                    :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                    @click="fullscreen = !fullscreen"
                  />
                </q-carousel-control>
              </template>
            </q-carousel>
            </div>
            </div>
          <div class="col-4 full-height bg-white p2">
              <h5> Как это будет происходить? </h5>
              <p class="margin"> В приложении вам будет доступен список заказов с подробным их описанием.
                В описании будет отображена фотография товара, растоние и место доставки, а также
                минимальная цена для торгов. Еще рядом с заказом будет отображен необходимый уровень
                вашего профиля для доставки данного груза. Далее вы ведете торги с другими курьерами
                и если вы выйграли торг, то за вами закрепляется данный заказ
              </p>
          </div>
            <!-- <div class="col-4 full-height bg-white">
                <div class="text-h4">
                  Как мне стать курьером?
                </div>
                <p> Все очень просто. Вам достаточно прийти на базу вместе с паспортом для того, чтобы
                  вам выдаи кейм. Паспорт в данном случае нужен для закрепление его номера за вашим кейсом.
                  Это будет служить гарантом его сохранности и того, что вы его вернете обратно </p>
              </div> -->
            <div class="col-8 full-height bg-grey9">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.6794209879467!2d-49.09198868600008!3d-21.805199985582902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ4JzE4LjciUyA0OcKwMDUnMjMuMyJX!5e1!3m2!1sru!2sru!4v1605858069907!5m2!1sru!2sru"
              width="800vh"
              height="450vh"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0">
              </iframe>
            </div>
          </div>
      </div>
    <!-- </div> -->
  </q-layout>
</template>

<script>
export default {
  name: 'Для отправителя',
  data () {
    return {
      slide: 1,
      fullscreen: false
    }
  }
}
</script>

<style scoped>
  .textsz1 {
    font-size: 7vh;
  }
  .textsz2 {
    font-size: 5vh;
  }
  .textsz4 {
    font-size: 6vh;
  }
  .margin {
    margin: 4vh;
  }
  .margin0 {
    margin-bottom: 7vh;
  }
  .margintop {
    margin-top: 16vh;
  }
  .margin2 {
    margin: 3vh;
  }
  .p0 {
    border-radius: 5%;
    padding:2vh 2vh 2vh 2vh;
  }
  .p1 {
    padding:8vh 8vh 8vh 8vh;
    border-radius: 3%;
  }
  .p2 {
    border-radius: 3%;
  }
</style>
