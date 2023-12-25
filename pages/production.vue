<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
definePageMeta({
  layout: "framework",

});

const showBadge = ref(false);
const showAddition = ref(false);

const checkScrollBadge = () => {
  if (window.scrollY >= 2000) {
    showBadge.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkScrollBadge);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollBadge);
});

const checkScrollAddition = () => {
  if (window.scrollY >= 2000) {
    showAddition.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkScrollAddition);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollAddition);
});


</script>

<template>
  <div class="content">
    <div class="images">
      <div class="redline"></div>
      <img class="image1" src="../static/images/doublered.jpg" alt="">
      <div class="verticalLine"></div>
      <img class="image2" src="../static/images/originorange.jpg" alt="">
      <div class="orangeline"></div>
    </div>
    <div class="info">
      <div class="column">
        <div class="titl1">
          <h1 class="title">состав Bioplama Double_Red</h1>
          <div class="line"></div>
        </div>
        <p class="description1">земляника садовая<br>
          клубника полевая<br>
          смородина чёрная<br>
          смородина красная<br>
          рябина чёрная<br>
          рябина красная<br>
          клюква<br>
          брусника<br>
          голубика<br>
          черника<br>
          малина<br>
          ежевика<br>
          ирга<br>
          калина<br>
          черешня<br>
          облепиха<br>
          вишня<br>
          жимолость<br>
          крыжовник<br>
          шиповник<br>
          боярышник<br>
          барбарис<br>
          кизил<br>
          ягода годжи<br>
          инжир<br>
          финики<br>
          кокос<br>
          ананас<br>
          папайя<br>
          помело<br>
          манго<br>
          авокадо<br>
          питайя<br>
          киви<br>
          кумкват<br>
          лимон<br>
          грейпфрут<br>
          апельсин<br>
          мандарин<br>
          гранат<br>
          айва<br>
          яблоко<br>
          слива<br>
          виноград<br>
          нектарин<br>
          абрикос<br>
          персик<br>
          ранет<br>
          свекла<br>
          имбирь<br>
          экстракт корня лопуха<br>
          семя льна<br>
          семя кунжута<br>
          кедровый орех<br>
          пшеницы пророщенные зерна<br>
          кукурузы пророщенные зерна<br>
          гречихи зелёной пророщенные зерна<br>
          подсолнечника пророщенные семена<br>
          тыквы пророщенные семена<br>
          фасоли пророщенные бобы<br>
          какао бобы<br>
          ламинарии слоевища<br>
          корица пряная<br>
          расторопша<br>
          цикорий<br>
          эстрагон<br>
          шафран<br>
          творог<br>
          мёд</p>
        <div v-if="showBadge" class="badge">
          <div class="sign1">6</div>
          <div class="sign2">9</div>
          <div class="sign3">!</div>
          <div class="signs">ингредиентов</div>
        </div>
      </div>

      <div class="column">
        <div class="titl2">
          <h1 class="title">состав Bioplama Orange_Origin</h1>
          <div class="line"></div>
        </div>
        <p class="description2">морковь<br>
          дыня (с семенами без кожуры)<br>
          хурма (без семян)<br>
          тыква (без кожуры и без семян)<br>
          груша (с кожурой и семенами)<br>
          слива (без косточки)<br>
          нектарин (без косточки)<br>
          абрикос (без косточки)<br>
          финики (без косточки)<br>
          персик вяленый<br>
          инжир<br>
          папайя<br>
          кокос<br>
          ананас<br>
          манго<br>
          авокадо<br>
          банан<br>
          грецкий орех<br>
          расторопша<br>
          топинамбур<br>
          облепиховое масло<br>
          шафран<br>
          молоко<br>
          мёд</p>
        <div v-if="showBadge" class="badge">
          <div class="sign1">2</div>
          <div class="sign2">4</div>
          <div class="sign3">!</div>
          <div class="signs">ингредиента</div>
        </div>
      </div>
    </div>
    <div v-if="showAddition" class="addition">
      <img class="freeze" src="../static/images/froze.png" alt="">
      <p class="text">Bioplasma_Red хранится в холодильнике без вскрытия до 7 суток. Bioplasma_Orange хранится в
        холодильнике без вскрытия до 15 суток. Продукт допускает замораживание.</p>
    </div>
  </div>

  <!--<img class="backgroundlogo1" src="../static/images/logotype.png" />-->
  <div class="background"></div>
</template>

<style scoped>
.background {
  background-image: url(../static/images/triangulpatternbody1200.png);
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(2775px - 91px - 120px);
  z-index: -5;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: calc(2775px - 91px - 120px);
    background-color: rgb(136, 164, 214);
    opacity: 0.98;
    z-index: 1;
  }
}

.content {
  position: absolute;
}

.images {
  margin-top: 7vh;
  display: flex;
  justify-content: center;
}

.image1 {
  width: 34%;
  opacity: 0;
  animation: imageAnimation 2.3s forwards;
  animation-delay: 0.4s;
}

.image2 {
  width: 34%;
  opacity: 0;
  animation: imageAnimation 2.3s forwards;
  animation-delay: 0.8s;
}

@keyframes imageAnimation {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.verticalLine {
  position: absolute;
  width: 1px;
  height: 2270px;
  background: rgba(77, 89, 161, 0.40);
  opacity: 0;
  animation: centralAnimation 0.5s forwards;
  animation-delay: 1.4s;
}

@keyframes centralAnimation {
  from {
    opacity: 0;
    transform: translateY(300px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.redline {
  position: absolute;
  height: 2335px;
  background: #A3167C;
  left: 16%;
  top: 230px;
  width: 10px;
  opacity: 0;
  animation: asideLineAnimation 0.6s forwards;
  animation-delay: 1.6s;
  z-index: 3;
}

.orangeline {
  position: absolute;
  height: 2344px;
  background: #A47316;
  right: 16%;
  top: 220px;
  width: 10px;
  opacity: 0;
  animation: asideLineAnimation 0.6s forwards;
  animation-delay: 1.6s;
  z-index: 3;
}


@keyframes asideLineAnimation {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}

.info {
  display: flex;
  justify-content: center;
  gap: 15vw;
  margin-top: 20px;
  color: #FFF;
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.column {
  display: flex;
  flex-direction: column;

}

.titl1 {
  margin-left: 2vw;
  margin-top: 3vh;
  opacity: 0;
  animation: titl1Animation 0.5s forwards;
  animation-delay: 1.3s;
}

@keyframes titl1Animation {
  from {
    opacity: 0;
    transform: translateX(-200px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.titl2 {
  margin-left: 0;
  margin-top: 3vh;
  opacity: 0;
  animation: titl2Animation 0.5s forwards;
  animation-delay: 1.3s;
}

@keyframes titl2Animation {
  from {
    opacity: 0;
    transform: translateX(200px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.title {
  font-size: 21px;
}

.line {
  margin-top: 1vh;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.35);

}

.description1 {
  height: 1880px;
  font-size: 16px;
  line-height: 170%;
  margin-top: 3.5vh;
  opacity: 0;
  animation: descriptionAnimation 1s forwards;
  animation-delay: 1.5s;
}

.description2 {
  height: 1880px;
  font-size: 16px;
  line-height: 170%;
  margin-top: 3.5vh;
  margin-left: -3vw;
  opacity: 0;
  animation: descriptionAnimation 1s forwards;
  animation-delay: 1.5s;
}

@keyframes descriptionAnimation {
  from {
    opacity: 0;
    transform: translateY(300px);
  }

  to {
    opacity: 1;
    transform: translateY(0vh);
  }
}

.text {
  font-size: 16px;
}

.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 221px;
  height: 42px;
  margin-top: 5vh;
  margin-left: 3vw;
  border: 2px solid #FFFFFF;
  border-radius: 30px;
  background: rgba(222, 222, 222, 0.25);
  box-shadow: 3px 3px 9px 3px rgba(222, 222, 222, 0.70);
  opacity: 0;
  animation: badgeAnimation 1s forwards;
}

@keyframes badgeAnimation {
  from {
    opacity: 0;
  }

  25% {
    opacity: 0.7;
    transform: perspective(300px) rotateY(90deg);
  }

  to {
    opacity: 1;
  }
}

.sign1,
.sign2,
.sign3,
.signs {
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  font-family: Arial;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.sign1 {
  opacity: 0;
  animation: sign1Animation 0.5s forwards;
  animation-delay: 0.65s;
}

@keyframes sign1Animation {
  from {
    opacity: 0;
  }

  50% {
    opacity: 0.7;
    transform: scale(4);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.sign2 {
  opacity: 0;
  animation: sign2Animation 0.5s forwards;
  animation-delay: 0.75s;
}

@keyframes sign2Animation {
  from {
    opacity: 0;
  }

  50% {
    opacity: 0.7;
    transform: scale(4);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.sign3 {
  font-size: 29px;
  margin: 0 3px;
  opacity: 0;
  animation: sign3Animation 0.5s forwards;
  animation-delay: 0.85s;
}

@keyframes sign3Animation {
  from {
    opacity: 0;
  }

  50% {
    opacity: 0.7;
    transform: scale(4);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.signs {
  color: #FFF;
  font-size: 20px;
  margin-left: 5px;
  opacity: 0;
  animation: signsAnimation 0.6s forwards;
  animation-delay: 1.1s;
}

@keyframes signsAnimation {
  from {
    opacity: 0;
  }

  50% {
    opacity: 0.9;
    transform: scale(3);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.addition {
  display: flex;
  width: fit-content;
  padding: 39px 148px 27px 148px;
  justify-content: center;
  align-items: center;
  background: #DEDEDE;
  margin-top: 5vh;
  margin-left: 16%;
  opacity: 0;
  animation: additionAnimation 1.7s forwards;
  animation-delay: 1.2s;
}

@keyframes additionAnimation {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


.text {
  width: 735px;
  color: rgba(0, 0, 0, 0.70);
  text-align: center;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0;
  animation: textAnimation 1.2s forwards;
  animation-delay: 1.5s;
}

@keyframes textAnimation {
  from {
    opacity: 0;
    transform: translateY(70px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.freeze {
  position: absolute;
  width: 52px;
  height: 52px;
  margin-top: -16vh;
  transform: rotateX(90deg);
  animation: freezeAnimation 1.1s forwards;
  animation-delay: 2.1s;
}

@keyframes freezeAnimation {
  from {
    transform: rotateX(90deg);
  }

  to {
    transform: rotateY(0deg);
  }
}

.backgroundlogo1 {
  position: absolute;
  width: 500px;
  height: 500px;
  z-index: 3;
  top: 60vh;
  left: 32vw;
  background-image: url('../static/images/logotype.png');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>