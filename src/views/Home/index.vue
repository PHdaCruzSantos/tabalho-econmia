<template>
  <main class="main-home">
    <section class="container-home">
      <h1 class="cont-title">home</h1>
      <p class="cont-text">
        Nossa aplicação cria uma curva que representa as possibilidades de produção de dois bens ou serviços. 
        Essa curva pode ser usada para ajudar a determinar a melhor forma de alocar recursos e maximizar a produção de bens ou
         serviços.<br>
        A curva de possibilidade de produção resultante é útil para identificar as combinações mais eficientes de produção de bens e serviços e pode ser usada para tomar decisões importantes de investimento. A aplicação também pode ser utilizada em sala de aula para ajudar os alunos a compreender conceitos de economia e tomada de decisão.
      </p>
    </section>
  </main>
</template>

<style scoped>
.container-home {
  height: 550px;
  width: 90vw;
  border-radius: 16px 0 16px 0;
	margin: 0 auto;
  background-color: var(--black-S);
  padding: 15px;
  line-height: 2rem;
  border: 2px solid var(--grey);
  box-shadow: var(--shadow);


  display: flex;
  flex-flow: column;
  align-items: center;
}

.container-home .cont-title {
  font-size: xx-large;
  color: var(--white);
  margin-bottom: 15px;
  text-transform: uppercase;
  text-shadow: var(--shadow);


}
.container-home .cont-text {
  font-size: x-large;
  color: var(--font-color);
  text-align: justify;
  text-shadow: var(--shadow);
}
</style>