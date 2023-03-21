<template>
  <div class="container">
    <select v-model="selected" class="select">
      <option v-bind:value="selected" disabled>Selecione o tipo de analise</option>
      <option>Mês</option>
      <option>Semana</option>
      <option>Ano</option>
    </select>

    <div class="form-grafic">
      <CpGMes v-if="selected == 'Mês' " />
      <CpGSemana v-if="selected == 'Semana'" />
      <CpGAno v-if="selected == 'Ano'" />
    </div>
  </div>
</template>

<script>
import CpGMes from './CpGMes.vue';
import CpGSemana from './CpGSemana.vue';
import CpGAno from './CpGAno.vue';  
export default {
  name: 'Charts',
  components: { CpGMes, CpGSemana, CpGAno },
  data() {
    return {
      selected: null,
    }
  }
}
</script>

<style>
.container .cont-text{ 
  font-size: x-large;
  color: var(--font-color);
  text-align: justify;
  margin: 10px 10px; 
}

.select{
  outline: none;
  width: 15rem;
  height: 3rem;
  padding: 5px;
  margin: 8px;
  border: none;
  box-shadow: var(--shadow);
  font-size: 1rem;
  align-items: center;
  border-radius: var(--radios-default);
  cursor: pointer;
  transition: .2s ease-in-out;
}
.select:focus {
 border-radius: var(--radios-second);
}

.form-grafic {
  margin: 0 auto;
  width: 90vw;
  height: 90vh;
  border-radius: var(--radios-default);
  padding: 15px;
  line-height: 2rem;
  display: table;
  flex-flow: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
}

.prod1,
.prod2 {
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  background-color: var(--grey);
  border-radius: var(--radios-default);
}
.prod2 {
  border-radius: var(--radios-second);
}

.prod1 label,
.prod2 label {
  margin: 5px;
  font-size: 1.2rem;
}
.prod1 input,
.prod2 input {
  margin: 5px;
  padding: 10px;
  border-radius: var(--radios-default);
  border: 1px solid var(--grey);
  font-size: 1.2rem;
}

.warp button {
  width: 285px;
  height: 60px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-radius: var(--radios-default);
  border: 1px solid var(--grey);
  font-size: 1.2rem;
  background-color: var(--grey);
  color: var(--black-l);
  cursor: pointer;
  transition: .2s;
}
.warp button:hover {
  transform: scale(105%);
  border-radius: var(--radios-second);
  box-shadow: var(--shadow);
}
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
  max-height: 550px;
}
.form::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
  background-color: var(--black-S);
}
.form::-webkit-scrollbar-thumb {
  width: 3px;
  border-radius: 10px;
  background-color: var(--grey);
}
</style>