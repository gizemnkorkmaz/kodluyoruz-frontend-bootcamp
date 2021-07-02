<template>
  <div class="about">
    <p class="about__content">Cats are cool.</p>
    <img
      src="https://images.unsplash.com/photo-1588768987479-bcebeefb8a5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
      alt="About Us"
      class="about__img"
    />
  </div>
</template>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  &__img {
    width: 400px;
    height: 600px;
  }
}
</style>
