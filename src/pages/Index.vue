<template>
  <q-layout view="hHh lpR fFf">

    <div class="fit row wrap justify-start items-start content-start">
      <div class="col-3 full-heignt" >
        <div class="row">
          <div class="ava1">
            <q-avatar rounded size="65px" font-size="42px" color="red" icon="F" text-color="white"/>
          </div>
          <div class="text-subtitle2 text-weight-bold margine">{{name}} <br> {{sorname}} </div>
          <div class="text-h6 text-weight-bold margine2"> {{balance}} баллов</div>
        </div>
        <div class="full-width text-body1 text-center">
              <hr>
        </div>
        <div class="row margine">
          <div class="col">
            <div class="full-width text-body1 text-center">
              Ваша доставка
            </div>
            <div class="q-pa-md">
              <q-linear-progress rounded size="10px" :value="progress" color="purple" class="q-mt-20" />
            </div>
            <div class="full-width text-body1 margine">
              Осталось: {{timeM}} мин <br> Состояние: {{Stage}}
            </div>
            <div class="full-width text-body1 margine2">
              Отправитель: {{sender}}
              <q-btn flat color="primary" label="Подробнее" @click="bottomClick1" />
              <q-dialog v-model="icon">
                <q-card>
                  <q-card-section class="row items-center q-pb-none">
                    <div class="text-h4">Об отправителе</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>

                  <q-card-section class="text-subtitle2">
                    Отправитель: {{sender}} <br>
                    Адресс: {{senderAdres}} <br>
                    Отправлено в {{timeSend}}
                  </q-card-section>
                  <q-card-section class="text-body3">
                    {{senderGroupPost}}
                  </q-card-section>
                </q-card>
              </q-dialog>
              <div class="full-width text-body1 margine2">
                Получатель: {{name}} {{sorname}}
              </div>
              <div class="full-width text-body1 margine2">
                Кейс состояние: {{stageCase}}
              </div>
            </div>
            <div class="full-width text-body1 margine2">
              <q-btn class="margine" outline rounded v-show="!isHistory" color="secondary" label="История" @click="isHistory = true"/>
              <span v-show="isHistory" v-for="(step, index) in steps" :key="step.id">
                <div v-show="index < 4" class="full-width text-weight-medium">
                  {{ step.timeHistH }}:{{ step.timeHistM }} - {{ step.stageH }} <br>
                </div>
              </span>
              <q-btn outline rounded class="margine" v-show="isHistory" color="secondary" label="Свернуть" @click="isHistory = false"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col bg-blue">
        <div class="full-width text-h6 text-weight-bold text-left label1">&nbsp;&nbsp;Ваш заказ</div>
        <div class="row">
          <div class="col-4">
            <!-- Вставляю первое изображение товара (кола) -->
            <q-img class="rounded-borders imgMarket"
              src="https://mcdonalds.ru/resize/500x500//upload/iblock/330/7020_cola_04_1500x1500_brand_min.png"
              :ratio="1"
              style="height: 200px; width: 200px; background-color: #FFFFFF;"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Таня - пишешет дизайн основного меню
    Катя - ищещь во всех файлах упомнание Quasar (То что выводится) -->

  </q-layout>
</template>

<script>
const MINUTES_ADD = 2
export default {
  data () {
    return {
      isHistory: false,
      progress: 0.49,
      left: false,
      name: 'Ник',
      sorname: 'Уайлд',
      balance: 300,
      timeM: 18,
      Stage: 'Доставка',
      sender: 'McDonalds',
      icon: false,
      senderAdres: 'OOO фиг знает где. Может на камчатке',
      timeSend: '16:44',
      senderGroupPost: 'ООО McDonalds пожри и будь жирным',
      stageCase: 'Закрыт',
      varPoint: 4,
      historyBtm: true,
      num1: 1,
      // timeHistH: 16,
      // timeHistM: 42,
      history: false,
      steps: [
        {
          id: 0,
          stageH: 'Заказ уакован',
          timeHistH: 16,
          timeHistM: 41
        },
        {
          id: 1,
          stageH: 'Доставщик прибыл',
          timeHistH: 16,
          timeHistM: 43
        },
        {
          id: 2,
          stageH: 'Коробка закрыта',
          timeHistH: 16,
          timeHistM: 43
        },
        {
          id: 3,
          stageH: 'Курьер взял заказ в доставку',
          timeHistH: 16,
          timeHistM: 44
        },
        {
          id: 4,
          stageH: 'Курьер преодолел половину пути',
          timeHistH: 16,
          timeHistM: 59
        },
        {
          id: 5,
          stageH: 'Курьер у вашего дома',
          timeHistH: 17,
          timeHistM: 15
        },
        {
          id: 6,
          stageH: 'Курьер прибыл',
          timeHistH: 17,
          timeHistM: 20
        },
        {
          id: 7,
          stageH: 'Кейс открыт',
          timeHistH: 17,
          timeHistM: 21
        },
        {
          id: 8,
          stageH: 'Товар доставлен',
          timeHistH: 17,
          timeHistM: 22
        }
      ]
    }
  },

  mounted () {
    this.steps = this.steps.map((step) => {
      step.timeHistM = step.timeHistM + MINUTES_ADD
      return step
    })
  },

  methods: {
    bottomClick1 () {
      this.icon = true
    },
    ClickBtmHistory () {
      this.history = true
    }
  }
}
</script>

<style scoped>
  .progressBar1 {
    size: 5 px;
  }
  .ava1 {
    margin: 9px;
  }
  .leftMenu {
    size: 150px;
  }
  .margine {
    margin: 13px;
  }
  .margine2 {
    margin: 28px;
  }
  .label1 {
    margin-top: 50px;
  }
</style>
