<template>
  <div>
    <!-- Início NavBar -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand order-md-last"> My Heroes List</a>
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Create New Hero</router-link>
          </li>
        </ul>
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link " to="/list-heroes">List All Heroes</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Fim NavBar -->
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>
