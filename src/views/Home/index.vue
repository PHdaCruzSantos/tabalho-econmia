<template>
  <main class="main-home">
    <section class="container-home">
      <h1 class="cont-title">home</h1>
      <p class="cont-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Ipsam tenetur optio sint possimus sequi deserunt placeat.
         At, molestias culpa provident illum placeat magnam,
         accusantium corporis temporibus quibusdam libero nobis ipsa!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Ipsam tenetur optio sint possimus sequi deserunt placeat.
         At, molestias culpa provident illum placeat magnam,
         accusantium corporis temporibus quibusdam libero nobis ipsa!
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
  text-align: center;
  text-shadow: var(--shadow);
}
</style>