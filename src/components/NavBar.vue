
<template>
  <nav>
    <div class="menu-item">
      <router-link to="/home">
        Home
      </router-link> 
    </div>

    <div class="menu-item">
      <router-link to="/cpp">
        Curva de Possibilidade de Produção 
      </router-link> 
    </div>

    <div class="menu-item">
      <router-link to="/grupo">
        Grupo
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
}
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav .menu-item {
    display: flex;
    color: var(--font-color);
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    transition: 0.4s;
  }

  nav .menu-item.active,
  nav .menu-item:hover{
    background-color: var(--black-M);
    border-bottom-color: var(--grey);
    border-radius: 16px 0 16px 0;

  }
  nav .menu-item  a.router-link-exact-active {
    border-bottom: 2px solid var(--grey);
    line-height: 20px;
  }

  nav .menu-item a{
    color: inherit;
    text-decoration: none;
    font-size: x-large;
  }

</style>