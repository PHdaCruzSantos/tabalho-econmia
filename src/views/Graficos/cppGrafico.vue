<template>
  <main class="main-cpp">
    <section class="container-cpp">
      <h1 class="cont-title">CPP</h1>
      <p class="cont-text">
        A curva de possibilidade de produção (CPP) é um modelo teórico utilizado para ilustrar as possibilidades de produção de uma economia com recursos limitados. A CPP mostra a relação entre a produção de dois bens ou serviços diferentes, considerando que a quantidade de um deles deve ser sacrificada para aumentar a produção do outro.

        A CPP é geralmente representada em um gráfico que apresenta uma curva descendente, que ilustra a relação inversa entre a produção dos dois bens. Isso ocorre porque, à medida que a produção de um bem aumenta, a disponibilidade de recursos para produzir o outro bem diminui.
      </p>
    </section>
    <section class="container-cpp">
      <!-- TODO: 1 -->
      <h1 class="cont-title">Escolha o tipo de analise!!</h1>

      <FromsAndChart />
    </section>
    <section class="container-cpp">
      <p class="cont-text">
        A análise da CPP é importante para que os tomadores de decisão possam avaliar as possibilidades de produção de uma economia e tomar decisões informadas sobre a alocação de recursos. A curva pode mostrar, por exemplo, que a produção máxima de um bem só pode ser alcançada com a redução da produção do outro bem.

Além disso, a análise da CPP também pode ajudar a identificar a eficiência produtiva da economia. Se a produção estiver abaixo da curva, isso indica que a economia não está utilizando todos os seus recursos de forma eficiente. Por outro lado, se a produção estiver acima da curva, isso indica que a economia está utilizando recursos além de sua capacidade produtiva, o que pode levar a uma inflação ou escassez de recursos.

Portanto, a análise da CPP é essencial para entender as possibilidades de produção de uma economia e identificar as decisões necessárias para maximizar a produção e a eficiência produtiva.
      </p>
    </section>
  </main>


</template>

<script>
import FromsAndChart from '../../components/Charts/index.vue';
export default {
  name: 'cppGrafico',
  components: { FromsAndChart },
  
}

</script>

<style scoped>
.container-cpp {
  width: 90vw;
  border-radius: 16px 0 16px 0;
	margin: 0 auto;
  background-color: var(--black-S);
  padding: 15px;
  line-height: 2rem;
  border: 2px solid var(--grey);
  box-shadow: var(--shadow);
  display: table;
  flex-flow: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;

}

.container-cpp .cont-title {
  font-size: xx-large;
  color: var(--white);
  margin-bottom: 15px;
  text-transform: uppercase;
  text-shadow: var(--shadow);

}
.container-cpp .cont-text {
  font-size: x-large;
  color: var(--font-color);
  text-align: justify;
  text-shadow: var(--shadow);
}
</style>