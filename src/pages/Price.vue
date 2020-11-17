<template>
  <q-layout view="hHh lpR fFf">
    <q-bar class="bg-black text-white">
      <!-- <div class="cursor-pointer" @click="btmUpMenuProfile" >Профиль</div>
      <div class="cursor-pointer" @click="btmUpMenuKur" >Доставщику</div> -->
      <div class="cursor-pointer gt-xs">
        Отправить
      </div>
      <!-- <div class="cursor-pointer" @click="btmUpMenuHelp">Помощь</div> -->
      <q-space />
      <q-btn dense flat icon="minimize" @click="btnMinimizeClick"/>
      <q-btn dense flat icon="crop_square" />
      <q-btn dense flat icon="close" />
    </q-bar>
    <div class="fit row wrap justify-start items-start content-start">
      <div class="col-3 full-heignt bg-green-2" >
        <div class="row">
          <div class="ava1">
            <q-avatar rounded size="65px" font-size="42px" color="red" icon="F" text-color="white"/>
          </div>
          <div class="text-subtitle2 text-weight-bold margine">{{name}} <br> {{sorname}} </div>
          <div class="text-body2 margine2"> {{balance}} баллов</div>
        </div>
        <div class="full-width text-caption text-center">
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
            <div class="full-width text-caption margine">
              Осталось: {{timeM}} мин <br> Состояние: {{Stage}}
            </div>
            <div class="full-width text-caption margine2">
              Отправитель: {{sender}}
              <q-btn flat color="primary" label="Подробнее" @click="bottomClick1" />
              <q-dialog v-model="icon">
                <q-card>
                  <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">Об отправителе</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>

                  <q-card-section class="text-caption">
                    Отправитель: {{sender}} <br>
                    Адресс: {{senderAdres}} <br>
                    Отправлено в {{timeSend}}
                  </q-card-section>
                  <q-card-section class="text-caption">
                    {{senderGroupPost}}
                  </q-card-section>
                </q-card>
              </q-dialog>
              <div class="full-width text-caption margine2">
                Получатель: {{name}} {{sorname}}
              </div>
              <div class="full-width text-caption margine2">
                Кейс состояние: {{stageCase}}
              </div>
            </div>
            <div class="full-width text-caption margine2">
              <q-btn flat size="14px" v-show="!isHistory" color="secondary" label="История действий с заказом" @click="isHistory = true"/>
              <span v-show="isHistory" v-for="(step, index) in steps" :key="step.id">
                <div v-show="index < 4" class="full-width text-weight-medium">
                  {{ step.timeHistH }}:{{ step.timeHistM }} - {{ step.stageH }} <br>
                </div>
              </span>
              <q-btn size="14px" flat v-show="isHistory" color="secondary" label="Свернуть" @click="isHistory = false"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col bg-purple-2">
        <div class="full-width text-h5 text-weight-bold text-left label1 text-center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ваш заказ</div>
        <div class="row">
          <div class="col-4">
            <Product
              v-for="product in products"
              :key="product.articul"
              v-bind="product"
              @priceChange="product.totalPrice = $event"
            />

            <div class="q-pa-md row items-start q-gutter-md margine3">
              <div class="text-center text-h6 full-width">
                К оплате {{sumItog}} руб
              </div>
              <div class="text-center text-body2 full-width col-5">
                Балов будет засчитано - {{ballPls}} бал(ов)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </q-layout>
</template>

<script>
import Product from 'components/ProductLine.vue'
const MINUTES_ADD = 2
export default {
  components: {
    Product
  },
  data () {
    return {
      products: [
        {
          name: 'Coca-cola 0,25 мл',
          price: 100,
          description: 'Coca-cola стандарт. в пластиковом стаканчике (0,25 мл)',
          articul: '00124712849',
          manufacture: 'ООО Coca Cola company',
          totalPrice: 0,
          sender: 'McDonalds',
          img: 'https://mcdonalds.ru/resize/500x500//upload/iblock/330/7020_cola_04_1500x1500_brand_min.png'
        },
        {
          name: 'Чикен Макнаггетс 20 шт',
          price: 297,
          description: 'Чикен Макнаггетс 20 шт. в картоной коробке',
          articul: '10194452245',
          manufacture: 'Поставщик в магазин: ООО McDonalds',
          totalPrice: 0,
          sender: 'McDonalds',
          img: 'https://mcdonalds.ru/resize/500x500//upload/iblock/13a/2353_Chicken_McNuggets_20p_in_box_1500x1500_min.png'
        },
        {
          name: 'Макфлурри Де Люкс Клубнично-Шоколадное',
          price: 99,
          description: 'Макфлурри Де Люкс Клубнично-Шоколадное',
          articul: '90574211028',
          manufacture: 'Поставщик в магазин: ООО McDonalds',
          totalPrice: 0,
          sender: 'McDonalds',
          img: 'https://mcdonalds.ru/resize/500x500//upload/iblock/5ed/Makflurri-De-Lyuks-shokoladno_klubnichnoe.png'
        },
        {
          name: 'Биг Тейсти Три Сыра',
          price: 297,
          description: 'Биг Тейсти Три Сыра',
          articul: '30188805199',
          manufacture: 'Поставщик в магазин: ООО McDonalds',
          totalPrice: 0,
          sender: 'McDonalds',
          img: 'https://mcdonalds.ru/resize/500x500//upload/iblock/d15/0000_BT_3Cheese_1500x1500_min.png'
        }
      ],
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

  computed: {
    sumCola () {
      return this.numCola * this.priceCola
    },
    sumNag () {
      return this.numNag * this.priceNag
    },
    sumIceCream () {
      return this.numIceCream * this.priceIceCream
    },
    sumBug () {
      return this.numBug * this.priceBug
    },
    sumItog () {
      let sum = 0
      this.products.forEach((product) => { sum += product.totalPrice })
      return sum
    },
    ballPls () {
      return Math.round(this.sumItog / 100 * 5)
    }
  },

  mounted () {
    this.steps = this.steps.map((step) => {
      step.timeHistM = step.timeHistM + MINUTES_ADD
      return step
    })
  },

  methods: {
    btnMinimizeClick () {
      console.log('asdasd')
    },
    bottomClick1 () {
      this.icon = true
    },
    ClickBtmHistory () {
      this.history = true
    },
    ClickPlsBtm1 () {
      this.numCola = this.numCola + 1
    },
    ClickMnsBtm1 () {
      this.numCola = this.numCola - 1
    },
    ClickPlsBtm2 () {
      this.numNag = this.numNag + 1
    },
    ClickMnsBtm2 () {
      this.numNag = this.numNag - 1
    },
    ClickPlsBtm3 () {
      this.numIceCream = this.numIceCream + 1
    },
    ClickMnsBtm3 () {
      this.numIceCream = this.numIceCream - 1
    },
    ClickPlsBtm4 () {
      this.numBug = this.numBug + 1
    },
    ClickMnsBtm4 () {
      this.numBug = this.numBug - 1
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
  .cardCola {
    height: 300px;
    width: 600px;
  }
  .imgCola {
    height: 75px;
    width: 350px;
  }
  .imgNug {
    height: 95px;
    width: 385px;
  }
  .imgIceCream {
    height: 95px;
    width: 385px;
  }
  .size1 {
    height: 100px;
    width: 100px;
  }
  .margine3 {
    margin: 5px;
  }
</style>
