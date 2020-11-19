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
                  Данный сервис удобен тем, что по доступной вам цене вы можете оформить бесплатную доставку,
                  которая будет гарантировано привезена без повреждений
                </p>
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
      </div>
    </div>
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
