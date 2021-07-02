<template>
  <div class="details">
    <p class="details__content">Like <em>really</em> cool.</p>
    <img
      src="https://images.unsplash.com/photo-1607489180229-4b3ec6ce3884?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80"
      alt=""
      class="details__img"
    />
  </div>
</template>

<style lang="scss">
.details {
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
