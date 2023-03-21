<template>
  <section class="section">
    <div class="card">
      <div class="card-header">
        <span class="material-symbols-rounded">
          person
        </span>
        <h1 class="nome-title">
          Bianca Fernandes
        </h1>
      </div>
      <div class="card-content">
        <h2 class="sub-title">
          <span>RA:</span> 21.1.8189
        </h2>
      </div>
    </div>
      <div class="card">
        <div class="card-header">
          <span class="material-symbols-rounded">
            person
          </span>
          <h1 class="nome-title">
            Laura Soares
          </h1>
        </div>
        <div class="card-content">
          <h2 class="sub-title">
            <span>RA: </span>21.1.8125
          </h2>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <span class="material-symbols-rounded">
            person
          </span>
          <h1 class="nome-title">
            MArcelo Coelho Jr. 
          </h1>
        </div>
        <div class="card-content">
          <h2 class="sub-title">
            <span>RA:</span>  21.1.8063
          </h2>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <span class="material-symbols-rounded">
            person
          </span>
          <h1 class="nome-title">
            Pedro H. Santos 
          </h1>
        </div>
        <div class="card-content">
          <h2 class="sub-title">
            <span>RA:</span> 21.1.8148
          </h2>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.section {
  height: 100%;
	margin-top: 2rem;
	margin-bottom: 2rem;
	padding-left: 1.5rem;
	padding-right: 1.5em;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.card {
  width: 300px;
  height: 350px;
  margin-block-end: 15px;
  background-color: var(--black-M);
  border: 2px solid var(--grey);
  box-shadow: var(--shadow);

}

.card:nth-child(odd){
  border-radius: 16px 0 16px 0;
  overflow: hidden;
}
.card:nth-child(even){
  border-radius: 0 16px 0 16px;
  overflow: hidden;
}


.card-header{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 200px;
  background-color: var(--black-S);
}

.card-header  span {
  color: var(--grey);
  font-size: 4rem;
}
.card-header .nome-title {
  text-transform: uppercase;
  color: var(--font-color);
  font-size: 1.5rem;
  text-align: center;
  text-shadow: var(--shadow);

}

.card-content .sub-title {
  color: var(--font-color);
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  text-shadow: var(--shadow);

}

.card-content .sub-title span {
  color: var(--grey);
  text-shadow: var(--shadow-2); ;
}
</style>