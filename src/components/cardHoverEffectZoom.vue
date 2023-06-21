<template>
  <div class="glassBox">
    <div class="glassBox__imgBox">
      <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" alt="" />
      <h3 class="glassBox__title">Golden Shoe</h3>
    </div>
    <div class="glassBox__content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam
      adipisci fugit qui quaerat!
    </div>
  </div>
</template>
<script>
export default {
  name: "cardHoverEffectZoom",
};
</script>
<style lang="scss">
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/*
 * Preparing stage
*/
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
body {
  position: relative;
  @include flex-center;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}

/*
 * Start
*/
.glassBox {
  &,
  & * {
    box-sizing: border-box;
    transition: 400ms;
  }
  width: 100%;
  height: 400px;
  max-width: 300px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  padding: 15px;
  position: relative;
  @include flex-center;
  flex-direction: column;
  &__imgBox {
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  &__title {
    text-align: center;
    margin-top: 15px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    font-family: "Lato";
  }
  &__content {
    position: absolute;
    right: 15px;
    bottom: 15px;
    left: 15px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-family: "Lato";
    letter-spacing: 0.1em;
    opacity: 0;
  }
  &:hover &__imgBox {
    transform: translateY(-50px);
  }
  &:hover &__imgBox img {
    transform: translate(-20px, -40px) rotate(-15deg) scale(1.4);
  }
  &:hover &__title {
    margin-top: 40px;
  }
}
</style>
