<template>
  <q-layout view="hHh lpR fFf">

    <div class="fit row wrap justify-start items-start content-start">
      <div class="col-3 bg-green">
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
            <div class="full-width text-body1 margine2">
              <span v-for="<varPint0 in varPoint"> {{ varPoint0 }} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col bg-blue">
        <div class="full-width text-subtitle2 text-weight-bold text-center">Ваша доставка</div>
        <div class="q-pa-md">
          <q-linear-progress rounded size="15px" :value="progress" color="warning" class="q-mt-20" />
        </div>
      </div>
    </div>

    <!-- Таня - пишешет дизайн основного меню
    Катя - ищещь во всех файлах упомнание Quasar (То что выводится) -->

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      progress: 0.84,
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
      varPoint: 10
    }
  },
  methods: {
    bottomClick1 () {
      this.icon = true
    },
    ClickBtmHistory () {
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
