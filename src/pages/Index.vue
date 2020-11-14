<template>
  <q-layout view="hHh lpR fFf">

    <div class="fit row wrap justify-start items-start content-start">
      <div class="col-3">
        <div class="row">
          <div class="ava1">
            <q-avatar rounded size="65px" font-size="42px" color="red" icon="F" text-color="white"/>
          </div>
          <div class="text-subtitle2 text-weight-bold margine">{{name}} <br> {{sorname}} </div>
          <div class="text-h6 text-weight-bold margine2"> {{balance}} баллов</div>
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
              <q-btn color="secondary" label="История" @click="ClickBtmHistory" v-model="historyBtm"/>
            </div>
            <div class="full-width text-body1 margine2" v-model="history">
              <span v-for="step in steps" :key="step.stageH"> {{timeHistH}}:{{timeHistM}} - {{step.stageH}} <br> </span>
            </div>
          </div>step.stageH
        </div>
      </div>
      <div class="col bg-blue">
        <div class="full-width text-subtitle2 text-weight-bold text-center">Ваша доставка</div>
        <div class="q-pa-md">
          <q-linear-progress rounded size="15px" :value="progress" color="warning" class="q-mt-20" />
        </div>
      </div>
    </div>

    <!-- Таня - пишешет дизайн основного меню 000000000000000000000000000
    Катя - ищещь во всех файлах упомнание Quasar (То что выводится) -->

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
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
      timeHistH: 16,
      timeHistM: 42,
      history: false,
      steps: [
        { stageH: 'Заказ уакован' },
        { stageH: 'Доставщик прибыл' },
        { stageH: 'Коробка закрыта' },
        { stageH: 'Курьер взял заказ в доставку' },
        { stageH: 'Курье преодолел половину пути' },
        { stageH: 'Курьер у вашего дома' },
        { stageH: 'Курьер прибыл' },
        { stageH: 'Кейс открыт' },
        { stageH: 'Товар доставлен' }
      ],
      a: 0
    }
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
</style>
