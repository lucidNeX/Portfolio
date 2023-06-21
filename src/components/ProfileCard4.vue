<template>
  <div class="game">
    <div class="rank">2</div>
    <div class="front">
      <img
        src="https://i.popdog.com/00dffacb-a67b-11ea-a9cd-0a58a9feac2a/rc/279x372-c.jpg"
        alt="game"
      />
      <h3 class="name">Just Chatting</h3>
      <div class="status">
        <p class="viewers">132.5k</p>
        <div class="streamers">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
          <img
            src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="back">
      <div class="streaming-info">
        <p class="game-stat">174.4k <span>Watching</span></p>
        <p class="game-stat">3,172<span>Streams</span></p>
      </div>
      <button class="btn">See more streams</button>
      <div class="streamers">
        <div class="streamer">
          <div class="icon">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
          </div>
          <p class="name">gamer 1</p>
          <p class="number">18k</p>
        </div>
        <div class="streamer">
          <div class="icon">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
          </div>
          <p class="name">gamer 2</p>
          <p class="number">9,600</p>
        </div>
        <div class="streamer">
          <div class="icon">
            <img
              src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e"
              alt=""
            />
          </div>
          <p class="name">gamer 3</p>
          <p class="number">7,407</p>
        </div>
      </div>
    </div>
    <div class="backgroundWrapper"></div>
  </div>
</template>
<script>
export default {
  name: "ProfileCard4",
  setup() {
    return {};
  },
};
</script>
<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}
:root {
  --clr-dark: rgb(13, 17, 19);
  --clr-light: #fff;
  --clr-secondary: #0a84ff;
}
body {
  font-family: sans-serif;
  background: var(--clr-dark);
  color: var(--clr-light);
  min-height: 100vh;
  display: grid;
  place-items: center;
}

h1,
h2,
h3,
p {
  margin: 0;
}
img {
  max-width: 100%;
}
.btn {
  cursor: pointer;
  padding: 0.5em 1em;
  border: 0;
  background: var(--clr-secondary);
  color: var(--clr-light);
  font-weight: bold;
  border-radius: 12px;
}
.game {
  position: relative;
  width: 12rem;
}
.streamers {
  display: flex;
  text-align: center;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
}
.front {
  transition: 200ms;
  & > img {
    border-radius: 12px;
  }
  .name {
    margin: 0.75em 0;
  }
  .status {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .streamers img {
    border: 1px solid var(--clr-dark);
    &:nth-child(1) {
      z-index: 1;
      transform: translateX(15px);
    }
    &:nth-child(2) {
      transform: translateX(10px);
    }
  }
}

.back {
  position: absolute;
  top: 56%;
  left: 0;
  right: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  .streaming-info {
    columns: 2;
    column-rule: 1px solid rgba(255, 255, 255, 0.6);
  }
  .game-stat {
    font-size: 1.2rem;
    text-align: center;
    span {
      display: block;
      font-size: 0.8rem;
    }
  }
  .streamers {
    display: flex;
  }
}
.backgroundWrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(36, 40, 42);
  z-index: -1;
  transform: scale(0.2, 0.8);
  opacity: 0;
  border-radius: 12px;
}
.game:hover {
  .front {
    transform: translateY(-25%) scale(0.8);
    .name {
      animation: gameName 150ms forwards;
    }
    .status {
      opacity: 0;
    }
  }
  .back {
    opacity: 1;
    .streamers {
      width: 100%;
      justify-content: space-between;
    }
    .streamer {
      font-size: 0.9rem;
    }
    .name {
      font-weight: bold;
    }
  }
  .rank {
    top: -35px;
    right: -30px;
  }
  .backgroundWrapper {
    transition: transform 200ms ease-in-out, opacity 100ms linear;
    opacity: 1;
    transform: scale(1.4, 1.2);
  }
}

.rank {
  position: absolute;
  right: 15px;
  font-weight: bold;
  font-size: 1.12rem;
  background: rgba(0, 0, 0, 0.75);
  padding: 0.5em 0.5em;
  clip-path: polygon(100% 0%, 100% 100%, 50% 85%, 0 100%, 0 0);
  transition: 250ms ease-in-out;
}

@keyframes gameName {
  0% {
    text-align: left;
    opacity: 1;
  }
  20% {
    text-align: left;
    opacity: 0;
  }
  50% {
    text-align: center;
    opacity: 0;
  }
  100% {
    text-align: center;
    opacity: 1;
  }
}
</style>
