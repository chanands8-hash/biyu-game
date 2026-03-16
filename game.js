const worlds = [
  {
    id: "sky-village",
    name: "天空村",
    intro: "一起去天空村，找出天空裡最像的東西！",
    questions: [
      {
        subject: "月亮",
        answer: "香蕉",
        sentence: "月亮像香蕉。",
        imageUrl: "assets/moon-banana.png",
        options: [
          { text: "香蕉" },
          { text: "皮球" },
          { text: "扇子" }
        ]
      },
      {
        subject: "太陽",
        answer: "火球",
        sentence: "太陽像火球。",
        imageUrl: "assets/sun-fireball.png",
        options: [
          { text: "火球" },
          { text: "積木" },
          { text: "雨傘" }
        ]
      },
      {
        subject: "白雲",
        answer: "棉花糖",
        sentence: "白雲像棉花糖。",
        imageUrl: "assets/white-cloud-cotton-candy.png",
        options: [
          { text: "棉花糖" },
          { text: "刷子" },
          { text: "石頭" }
        ]
      },
      {
        subject: "星星",
        answer: "鑽石",
        sentence: "星星像鑽石。",
        imageUrl: "assets/star-diamond.png",
        options: [
          { text: "鑽石" },
          { text: "葉子" },
          { text: "杯子" }
        ]
      },
      {
        subject: "彩虹",
        answer: "滑梯",
        sentence: "彩虹像滑梯。",
        imageUrl: "assets/rainbow-slide.png",
        options: [
          { text: "滑梯" },
          { text: "帽子" },
          { text: "木匙" }
        ]
      },
      {
        subject: "雨點",
        answer: "珍珠",
        sentence: "雨點像珍珠。",
        imageUrl: "assets/raindrop-pearl.png",
        options: [
          { text: "珍珠" },
          { text: "香蕉" },
          { text: "箱子" }
        ]
      },
      {
        subject: "閃電",
        answer: "樹枝",
        sentence: "閃電像樹枝。",
        imageUrl: "assets/lightning-branch.png",
        options: [
          { text: "樹枝" },
          { text: "氣球" },
          { text: "蛋糕" }
        ]
      },
      {
        subject: "夕陽",
        answer: "橙子",
        sentence: "夕陽像橙子。",
        imageUrl: "assets/sunset-orange.png",
        options: [
          { text: "橙子" },
          { text: "剪刀" },
          { text: "積木" }
        ]
      },
      {
        subject: "雪花",
        answer: "小花",
        sentence: "雪花像小花。",
        imageUrl: "assets/snowflake-flower.png",
        options: [
          { text: "小花" },
          { text: "皮球" },
          { text: "勺子" }
        ]
      },
      {
        subject: "霧",
        answer: "白紗",
        sentence: "霧像白紗。",
        imageUrl: "assets/fog-white-gauze.png",
        options: [
          { text: "白紗" },
          { text: "木椅" },
          { text: "蘋果" }
        ]
      }
    ]
  },
  {
    id: "animal-valley",
    name: "動物谷",
    intro: "走進動物谷，看看動物們像什麼！",
    questions: [
      {
        subject: "刺蝟",
        answer: "小刷子",
        sentence: "刺蝟像小刷子。",
        imageUrl: "assets/hedgehog-small-brush.png",
        options: [
          { text: "小刷子" },
          { text: "雨鞋" },
          { text: "月餅" }
        ]
      },
      {
        subject: "孔雀尾巴",
        answer: "扇子",
        sentence: "孔雀尾巴像扇子。",
        imageUrl: "assets/peacock-tail-fan.png",
        options: [
          { text: "扇子" },
          { text: "皮箱" },
          { text: "湯匙" }
        ]
      },
      {
        subject: "綿羊",
        answer: "棉花球",
        sentence: "綿羊像棉花球。",
        imageUrl: "assets/sheep-cotton-ball.png",
        options: [
          { text: "棉花球" },
          { text: "香蕉" },
          { text: "梯子" }
        ]
      },
      {
        subject: "小兔耳朵",
        answer: "葉子",
        sentence: "小兔耳朵像葉子。",
        imageUrl: "assets/rabbit-ears-leaf.png",
        options: [
          { text: "葉子" },
          { text: "杯子" },
          { text: "星星" }
        ]
      },
      {
        subject: "小貓鬍子",
        answer: "細線",
        sentence: "小貓鬍子像細線。",
        imageUrl: "assets/cat-whiskers-lines.png",
        options: [
          { text: "細線" },
          { text: "皮球" },
          { text: "木盒" }
        ]
      },
      {
        subject: "蝸牛殼",
        answer: "小房子",
        sentence: "蝸牛殼像小房子。",
        imageUrl: "assets/snail-shell-house.png",
        options: [
          { text: "小房子" },
          { text: "鉛筆" },
          { text: "雨點" }
        ]
      },
      {
        subject: "小魚",
        answer: "樹葉",
        sentence: "小魚像樹葉。",
        imageUrl: "assets/fish-leaf.png",
        options: [
          { text: "樹葉" },
          { text: "蛋糕" },
          { text: "剪刀" }
        ]
      },
      {
        subject: "長頸鹿脖子",
        answer: "長梯",
        sentence: "長頸鹿脖子像長梯。",
        imageUrl: "assets/giraffe-neck-ladder.png",
        options: [
          { text: "長梯" },
          { text: "蘋果" },
          { text: "杯蓋" }
        ]
      },
      {
        subject: "鴨嘴",
        answer: "小鏟子",
        sentence: "鴨嘴像小鏟子。",
        imageUrl: "assets/duck-bill-shovel.png",
        options: [
          { text: "小鏟子" },
          { text: "球鞋" },
          { text: "蛋捲" }
        ]
      },
      {
        subject: "毛毛蟲",
        answer: "小火車",
        sentence: "毛毛蟲像小火車。",
        imageUrl: "assets/caterpillar-train.png",
        options: [
          { text: "小火車" },
          { text: "雨傘" },
          { text: "書本" }
        ]
      }
    ]
  },
  {
    id: "living-island",
    name: "生活島",
    intro: "來到生活島，找找食物和用品像什麼！",
    questions: [
      {
        subject: "西瓜",
        answer: "皮球",
        sentence: "西瓜像皮球。",
        imageUrl: "assets/watermelon-ball.png",
        options: [
          { text: "皮球" },
          { text: "尺子" },
          { text: "帽子" }
        ]
      },
      {
        subject: "香蕉",
        answer: "小船",
        sentence: "香蕉像小船。",
        imageUrl: "assets/banana-boat.png",
        options: [
          { text: "小船" },
          { text: "剪刀" },
          { text: "積木" }
        ]
      },
      {
        subject: "麵條",
        answer: "長長的線",
        sentence: "麵條像長長的線。",
        imageUrl: "assets/noodles-long-lines.png",
        options: [
          { text: "長長的線" },
          { text: "皮球" },
          { text: "刷子" }
        ]
      },
      {
        subject: "果凍",
        answer: "水晶",
        sentence: "果凍像水晶。",
        imageUrl: "assets/jelly-crystal.png",
        options: [
          { text: "水晶" },
          { text: "木碗" },
          { text: "葉子" }
        ]
      },
      {
        subject: "爆谷",
        answer: "小雲朵",
        sentence: "爆谷像小雲朵。",
        imageUrl: "assets/popcorn-cloud.png",
        options: [
          { text: "小雲朵" },
          { text: "梯子" },
          { text: "杯子" }
        ]
      },
      {
        subject: "燈籠",
        answer: "小太陽",
        sentence: "燈籠像小太陽。",
        imageUrl: "assets/lantern-little-sun.png",
        options: [
          { text: "小太陽" },
          { text: "鉛筆" },
          { text: "拖鞋" }
        ]
      },
      {
        subject: "風扇",
        answer: "花",
        sentence: "風扇像花。",
        imageUrl: "assets/fan-flower.png",
        options: [
          { text: "花" },
          { text: "書包" },
          { text: "積木" }
        ]
      },
      {
        subject: "雨傘",
        answer: "蘑菇",
        sentence: "雨傘像蘑菇。",
        imageUrl: "assets/umbrella-mushroom.png",
        options: [
          { text: "蘑菇" },
          { text: "剪刀" },
          { text: "手套" }
        ]
      },
      {
        subject: "鈕扣",
        answer: "小月亮",
        sentence: "鈕扣像小月亮。",
        imageUrl: "assets/button-little-moon.png",
        options: [
          { text: "小月亮" },
          { text: "椅子" },
          { text: "畫筆" }
        ]
      },
      {
        subject: "氣球",
        answer: "大蘋果",
        sentence: "氣球像大蘋果。",
        imageUrl: "assets/balloon-big-apple.png",
        options: [
          { text: "大蘋果" },
          { text: "尺子" },
          { text: "刷牙杯" }
        ]
      }
    ]
  }
];

let currentWorld = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

const startScreen = document.getElementById("startScreen");
const worldScreen = document.getElementById("worldScreen");
const gameScreen = document.getElementById("gameScreen");
const endScreen = document.getElementById("endScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const chooseWorldAgainBtn = document.getElementById("chooseWorldAgainBtn");
const backWorldBtn = document.getElementById("backWorldBtn");
const soundBtn = document.getElementById("soundBtn");

const questionNo = document.getElementById("questionNo");
const totalNo = document.getElementById("totalNo");
const scoreEl = document.getElementById("score");
const progressBar = document.getElementById("progressBar");
const currentWorldName = document.getElementById("currentWorldName");

const questionImage = document.getElementById("questionImage");
const questionText = document.getElementById("questionText");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const finalText = document.getElementById("finalText");
const instruction = document.getElementById("instruction");

startBtn.addEventListener("click", () => {
  showScreen("world");
});

restartBtn.addEventListener("click", () => {
  if (currentWorld) {
    startWorld(currentWorld.id);
  } else {
    showScreen("world");
  }
});

chooseWorldAgainBtn.addEventListener("click", () => {
  showScreen("world");
});

backWorldBtn.addEventListener("click", () => {
  showScreen("world");
});

nextBtn.addEventListener("click", goNext);

soundBtn.addEventListener("click", () => {
  const q = currentQuestions[currentIndex];
  if (q) {
    speak(q.sentence);
  } else if (currentWorld) {
    speak(currentWorld.intro);
  }
});

document.querySelectorAll(".world-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    startWorld(btn.dataset.worldId);
  });
});

function startWorld(worldId) {
  const selectedWorld = worlds.find(world => world.id === worldId);
  if (!selectedWorld) return;

  currentWorld = selectedWorld;
  currentQuestions = selectedWorld.questions;
  currentIndex = 0;
  score = 0;
  answered = false;

  currentWorldName.textContent = currentWorld.name;
  totalNo.textContent = currentQuestions.length;
  instruction.textContent = currentWorld.intro;

  showScreen("game");
  renderQuestion();
}

function showScreen(name) {
  startScreen.classList.remove("active");
  worldScreen.classList.remove("active");
  gameScreen.classList.remove("active");
  endScreen.classList.remove("active");

  if (name === "start") startScreen.classList.add("active");
  if (name === "world") worldScreen.classList.add("active");
  if (name === "game") gameScreen.classList.add("active");
  if (name === "end") endScreen.classList.add("active");
}

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function renderQuestion() {
  answered = false;
  nextBtn.classList.add("hidden");
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";

  const q = currentQuestions[currentIndex];
  if (!q) return;

  questionNo.textContent = currentIndex + 1;
  scoreEl.textContent = score;
  questionText.textContent = `${q.subject}像什麼？`;

  const progress = (currentIndex / currentQuestions.length) * 100;
  progressBar.style.width = `${progress}%`;

  questionImage.onerror = function () {
    this.onerror = null;
    this.src = "assets/fallback.png";
  };

  questionImage.src = q.imageUrl;
  questionImage.alt = q.subject;

  optionsEl.innerHTML = "";

  const shuffledOptions = shuffleArray(q.options);

  shuffledOptions.forEach(option => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.textContent = option.text;
    btn.addEventListener("click", () => checkAnswer(option.text, btn));
    optionsEl.appendChild(btn);
  });

  speak(`${q.subject}像什麼？`);
}

function checkAnswer(selected, selectedBtn) {
  if (answered) return;
  answered = true;

  const q = currentQuestions[currentIndex];
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(btn => btn.classList.add("disabled"));

  if (selected === q.answer) {
    score++;
    scoreEl.textContent = score;
    selectedBtn.classList.add("correct");
    feedbackEl.textContent = `答對了！${q.sentence}`;
    feedbackEl.classList.add("good");
    speak(`答對了。${q.sentence}`);
  } else {
    selectedBtn.classList.add("wrong");

    buttons.forEach(btn => {
      if (btn.textContent === q.answer) {
        btn.classList.add("correct");
      }
    });

    feedbackEl.textContent = `再試下記住：${q.sentence}`;
    feedbackEl.classList.add("bad");
    speak(`再試下。${q.sentence}`);
  }

  nextBtn.classList.remove("hidden");
}

function goNext() {
  currentIndex++;

  if (currentIndex >= currentQuestions.length) {
    finishWorld();
    return;
  }

  renderQuestion();
}

function finishWorld() {
  progressBar.style.width = "100%";
  finalText.textContent = `你好叻！你完成了${currentWorld.name}，找到 ${score} 顆像像星，共完成 ${currentQuestions.length} 關！`;
  showScreen("end");
  speak(finalText.textContent);
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-HK";
  utterance.rate = 0.85;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const zhVoice = voices.find(v =>
    v.lang === "zh-HK" ||
    v.lang === "zh-TW" ||
    v.lang === "zh-CN"
  );

  if (zhVoice) {
    utterance.voice = zhVoice;
  }

  window.speechSynthesis.speak(utterance);
}
