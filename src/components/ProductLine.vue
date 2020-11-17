<template>
    <div class="q-pa-md row items-start q-gutter-md margine3">
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-card-section class="cardCola">
                    <div class="text-h5">
                    Итого: {{ totalPrice }} руб
                    <hr />
                    </div>
                    <div class="text-size1">{{ name }} <br /></div>
                    <div>
                    <q-btn
                        padding="1px 1px"
                        color="negative"
                        icon="-"
                        @click="ClickMnsBtm"
                    />
                    {{ count }} шт
                    <q-btn
                        padding="1px 1px"
                        color="positive"
                        icon="+"
                        @click="ClickPlsBtm"
                    />
                    - {{ price }} руб <br />
                    </div>
                    Уточнение: {{ description }}<br />
                    Артикул: {{ articul }} <br />
                    Поставщик в магазин: {{ manufacture }} <br />
                    Отправитель: {{ sender }}
                </q-card-section>

                <div class="imgCola">
                    <q-img class="col-5" :src="img" />
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },

    description: {
      type: String,
      default: ''
    },

    articul: {
      type: String,
      default: ''
    },

    manufacture: {
      type: String,
      default: ''
    },

    sender: {
      type: String,
      default: ''
    },

    img: {
      type: String,
      default: ''
    },

    price: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      count: 0
    }
  },

  computed: {
    totalPrice () {
      return Math.round(this.count * this.price)
    }
  },

  mounted () {
    console.log('ProductLine loaded')
    console.log(this.img)
  },

  methods: {
    ClickMnsBtm () {
      this.count = (this.count > 0) ? this.count - 1 : this.count
      this.returnPrice()
    },
    ClickPlsBtm () {
      this.count++
      this.returnPrice()
    },
    returnPrice () {
      this.$emit('priceChange', this.totalPrice)
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
