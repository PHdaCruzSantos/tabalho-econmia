<template>
  <div class="container">
    <!-- <v-chart class="chart" :option="barOptions" autoresize/> -->
    <div class="warp">
    <form class="form">
      <div class="prod1">
        <label for="produto1">Produto do eixo X:</label>
        <label for="produto1">Nome do Produto</label>
        <input type="text" id="produto1" v-model="produto1" />
        <label for="x1">
          Mês 1 - {{this.produto1}}
        </label>
        <input type="number" id="x1" v-model="x1" />
        <label for="x2">
          Mês 2 - {{this.produto1}}
        </label>
        <input type="number" id="x2" v-model="x2" />
        <label for="x3">
          Mês 3 - {{this.produto1}}
        </label>
        <input type="number" id="x3" v-model="x3" />
        <label for="x4">
          Mês 4 - {{this.produto1}}
        </label>
        <input type="number" id="x4" v-model="x4" />
        <label for="x5">
          Mês 5 - {{this.produto1}}
        </label>
        <input type="number" id="x5" v-model="x5" />
        <label for="x6">
          Mês 6 - {{this.produto1}}
        </label>
        <input type="number" id="x6" v-model="x6" />  
        <label for="x7">
          Mês 7 - {{this.produto1}}
        </label>
        <input type="number" id="x7" v-model="x7" />  
        <label for="x8">
          Mês 8 - {{this.produto1}}
        </label>
        <input type="number" id="x8" v-model="x8" />
        <label for="x9">
          Mês 9 - {{this.produto1}}
        </label>
        <input type="number" id="x9" v-model="x9" />
        <label for="x10">
          Mês 10 - {{this.produto1}}
        </label>
        <input type="number" id="x10" v-model="x10" />
        <label for="x11">
          Mês 11 - {{this.produto1}}
        </label>
        <input type="number" id="x11" v-model="x11" />                          
        <label for="x12">
          Mês 12 - {{this.produto1}}
        </label>
        <input type="number" id="x12" v-model="x12" />
      </div>
      <div class="prod2">
        <label for="produto2">Produto do eixo Y:</label>
        <label for="produto2">Nome do Produto</label>
        <input type="text" id="produto2" v-model="produto2" />
        <label for="y1">
          Mês 1 - {{this.produto2}}
        </label>
        <input type="number" id="y1" v-model="y1" />
        <label for="y2">
          Mês 2 - {{this.produto2}}
        </label>
        <input type="number" id="y2" v-model="y2" />
        <label for="y3">
          Mês 3 - {{this.produto2}}
        </label>
        <input type="number" id="y3" v-model="y3" />
        <label for="y4">
          Mês 4 - {{this.produto2}}
        </label>
        <input type="number" id="y4" v-model="y4" />
        <label for="y5">
          Mês 5 - {{this.produto2}}
        </label>
        <input type="number" id="y5" v-model="y5" />
        <label for="y6">
          Mês 6 - {{this.produto2}}
        </label>
        <input type="number" id="y6" v-model="y6" />
        <label for="y7">
          Mês 7 - {{this.produto2}}
        </label>
        <input type="number" id="y7" v-model="y7" />
        <label for="y8">
          Mês 8 - {{this.produto2}}
        </label>
        <input type="number" id="y8" v-model="y8" />
        <label for="y9">
          Mês 9 - {{this.produto2}}
        </label>
        <input type="number" id="y9" v-model="y9" />
        <label for="y10">
          Mês 10 - {{this.produto2}}
        </label>
        <input type="number" id="y10" v-model="y10" />
        <label for="y11">
          Mês 11 - {{this.produto2}}
        </label>
        <input type="number" id="y11" v-model="y11" />
        <label for="y12">
          Mês 12 - {{this.produto2}}  
        </label>
        <input type="number" id="y12" v-model="y12" />
      </div>
    </form>
      <button v-if="!this.handleGraficToggle" type="button" @click="hanldeGrafic">Calcular Custo de Oportunidade</button>
      <button v-else  type="button" @click="clearForm">clear</button>
  </div>

    <v-chart class="chart" :option="lineOptions" autoresize/>
    <p class="cont-text" v-if="this.handleGraficToggle" >
      Os dado de quantidade fornecidos para dos produtos, {{ produto1 }} e {{ produto2 }} são:<br>
        Para a produção de {{ x1 }} unidades de {{ produto1 }}, é possível produzir até {{ y1 }} unidades de {{ produto2 }}.<br>
        Para a produção de {{ x2 }} unidades de {{ produto1 }}, é possível produzir até {{ y2 }} unidades de {{ produto2 }}.<br>
        Para a produção de {{ x3 }} unidades de {{ produto1 }}, é possível produzir até {{ y3 }} unidades de {{ produto2 }}.<br>
        Para a produção de {{ x4 }} unidades de {{ produto1 }}, é possível produzir até {{ y4 }} unidades de {{ produto2 }}.<br>
        Para a produção de {{ x5 }} unidades de {{ produto1 }}, é possível produzir até {{ y5 }} unidades de {{ produto2 }}.<br>
        Para a produção de {{ x6 }} unidades de {{ produto1 }}, é possível produzir até {{ y6 }} unidades de {{ produto2 }}.<br>
        Para a produção de {{ x7 }} unidades de {{ produto1 }}, é possível produzir até {{ y7 }} unidades de {{ produto2 }}.<br>
        Para a produção de {{ x8 }} unidades de {{ produto1 }}, é possível produzir até {{ y8 }} unidades de {{ produto2 }}.<br>
        Para a produção de {{ x9 }} unidades de {{ produto1 }}, é possível produzir até {{ y9 }} unidades de {{ produto2 }}.<br>
        Para a produção de {{ x10 }} unidades de {{ produto1 }}, é possível produzir até {{ y10 }} unidades de {{ produto2 }}.<br>
        Para a produção de {{ x11 }} unidades de {{ produto1 }}, é possível produzir até {{ y11 }} unidades de {{ produto2 }}.<br>
        Para a produção de {{ x12 }} unidades de {{ produto1 }}, é possível produzir até {{ y12 }} unidades de {{ produto2 }}.<br>
    </p>
    <p class="cont-text" v-if="this.handleGraficToggle" >
      Em resumo, a curva de possibilidade de produção dos produtos com a {{ produto1 }} mostra as diferentes combinações possíveis de {{ produto1 }} e {{ produto2 }} que podem ser produzidas
       com os recursos produtivos disponíveis e como a produção de um produto afeta a produção do outro.
    </p>
  </div>
</template>
<script>
import { use } from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { TitleComponent, GridComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import Vchart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';
use([
  BarChart,
  LineChart,
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
])
export default{
  data() {
    return {
      produto1: 'Leite',
      produto2: 'Queijo',
      custoOportunidade: null,
      x0: 0,
      x1: 12,
      x2: 16,
      x3: 28,
      x4: 32,
      x5: 32,
      x6: 49,
      x7: 50,
      x8: 59,
      x9: 60,
      x10: 100,
      x11: 104,  
      x12: 111,
      x13: null,

      y0: 0,
      y1: 35,
      y2: 35,
      y3: 41,
      y4: 42,
      y5: 47,
      y6: 53, 
      y7: 59,
      y8: 59,
      y9: 61,
      y10: 67,
      y11: 68,
      y12: 69,
      y13: null,

      handleGraficToggle: false,
    }
  },
setup() {
 provide('THEME_KEY', 'dark');
 const lineOptions = ref({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    },
    dataView: { readOnly: true },
    magicType: { type: ['line', 'bar'] },
  },
  title: {
    text: 'Cruva de Possibilidade de Produção - Ano (12 meses)',
    left:  'center',
    textStyle: {
      fontSize: 25,
      color: '#fff',
      lineHeight: 50,
    }
  },
  grid: {
    top: 100,
    left: 50,
    right: 65,
    bottom: 50,
    containLabel: true
  },
  tooltip: {
    trigger: 'item',    
    formatter: ' {a}: {b} para {c}',   
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
        color: '#fff',
        borderColor: '#6a7985',
        borderWidth: 1,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        padding: [5, 7],
      },
    }
  },
  xAxis: {
    type: 'category',
    data: [],
    name: '',
    axisLabel: {
      color: '#fff'
    },
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    boundaryGap: false
    
  },
  yAxis: {
    type: 'value',
    name: '',
    axisLabel: {
      color: '#fff'
    },
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
  },
  series: [{
    data: [],
    type: 'line',
    name: 'Curva de Possibilidade de Produção',
    smooth: true,
    symbol: 'circle',
    symbolSize: 10,
    itemStyle: {
      color: '#00f'
    },
    lineStyle: {
      color: '#ddd'
    },
  }]
 })
 return { lineOptions }    
},
methods: {
  hanldeGrafic () {
    this.x13 = (this.x0 + this.x1 + this.x2 + this.x3 + this.x4 + this.x5 + this.x6 + this.x7 + this.x8 + this.x9 + this.x10 + this.x11 + this.x12)
    this.y13 = (this.y0 + this.y1 + this.y2 + this.y3 + this.y4 + this.y5 + this.y6 + this.y7 + this.y8 + this.y9 + this.y10 + this.y11 + this.y12)
    this.lineOptions.xAxis.data.push(this.x0, this.x1, this.x2, this.x3, this.x4, this.x5, this.x6, this.x7, this.x8, this.x9, this.x10, this.x11, this.x12)
    this.lineOptions.series[0].data.push(this.y12, this.y11, this.y10, this.y9, this.y8, this.y7, this.y6, this.y5, this.y4, this.y3, this.y2, this.y1, this.y0)
    //Ordena os dados do grafico perde a integridade dos dados e a qualidade da analise fica comprometid
    this.lineOptions.xAxis.name = this.produto1
    this.lineOptions.yAxis.name = this.produto2 
    this.handleGraficToggle = true
  },
  clearForm () {
    this.produto1 = ''
    this.produto2 = ''
   
    this.x0 = 0
    this.x1 = 0
    this.x2 = 0
    this.x3 = 0
    this.x4 = 0
    this.x5 = 0
    this.x6 = 0
    this.x7 = 0
    this.x8 = 0
    this.x9 = 0
    this.x10 = 0
    this.x11 = 0
    this.x12 = 0

    this.y0 = 0
    this.y1 = 0
    this.y2 = 0
    this.y3 = 0
    this.y4 = 0
    this.y5 = 0
    this.y6 = 0
    this.y7 = 0
    this.y8 = 0
    this.y9 = 0
    this.y10 = 0
    this.y11 = 0
    this.y12 = 0

    this.clearGraph()
    this.handleGraficToggle = false

  },
  clearGraph () {
    this.lineOptions.xAxis.data = []
    this.lineOptions.series[0].data = []
  }
}
}
</script>

<style scoped>
.container {
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
}
.chart{
   height:500px;
   width:800px;
}


</style>