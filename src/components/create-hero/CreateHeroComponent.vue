<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Hero</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <!-- Início bloco: Hero name -->
          <div class="mb-3">
            <label class="form-label">Hero Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Type the Hero Name"
              v-model="hero.name"
              required
            />
          </div>
          <!-- Fim bloco: Hero name -->

          <!-- Início bloco: Hero Description -->
          <div class="mb-3">
            <label class="form-label">Hero Description</label>
            <input
              type="text"
              class="form-control"
              placeholder="Describe this Hero"
              v-model="hero.description"
              required
            />
          </div>
          <!-- Fim bloco: Hero Description -->

          <!-- Início bloco: Abilities -->
          <div class="mb-5">
            <label class="form-label">Abilities</label>
            <input
              type="text"
              class="form-control"
              placeholder="What are your powers?"
              v-model="hero.abilities"
              required
            />
          </div>
          <!-- Fim bloco: Abilities-->

          <!-- Início bloco: Submit button -->
          <div class="d-grip gap-2">
            <button type="button" class="btn btn-outline-dark mr-1">
              New Hero
            </button>
          </div>
          <!-- Início bloco: Submit button -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    name: 'CreateHeroComponent',
  },
  data() {
    return {
      hero: {
        name: '',
        description: '',
        abilities: '',
      },
    };
  },
  methods: {
    handleSubmitForm() {},
  },
};
</script>
