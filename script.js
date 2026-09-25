/* =========================================================
   叙 · Final Edition
   文案/配图直接改下面 CONTENT / GALLERY / EDITORIAL / LETTER
   ========================================================= */
const IMG = "../";
const u = (f) => IMG + encodeURIComponent(f);

const FINALE_IMG = "5f3e5960da412ae1be7e5465691a9a8d.jpg";
const EDITORIAL = {
  a:"0baff2aee055782dfe41f5ed1f156227.jpg",
  b:"dfb0175c3c0ae86eb808416f15648855.jpg",
  c:"ed9f0ddc94cfcac0ac992cdbbb47195e.jpg"
};

const CONTENT = [
  { type:"scene", id:"scene1", nav:"I 初遇",
    file:"057b6aaa6ca625aee146b42181aae4fa.jpg",
    num:"01", title:"初遇", en:"The First Glance",
    lines:[
      "我记不清那天的天气，却记得你笑起来的样子。",
      "不是什么惊天动地的场面，只是你抬头，世界就轻了半拍。",
      "后来我才信，有些人光是站在那里，就足以改变另一个人的一生。"
    ]},
  { type:"interlude", kicker:"INTERLUDE · 一",
    quote:"那一秒，<em>时间没有停，</em><br/>是我的心跳，抢了半拍。", by:"——写在故事的第一页" },
  { type:"scene", id:"scene2", nav:"II 靠近",
    file:"18d907d9078aa7cf8810e9e21d151829.jpg",
    num:"02", title:"靠近", en:"Getting Closer",
    lines:[
      "我的注意力开始追着你跑，手机亮起时偷偷希望那是你。",
      "从「晚安」到「早安」，从客套的寒暄，到什么废话都想讲给你听。",
      "距离就这样一点一点、不动声色地变短，短到能听见彼此的呼吸。"
    ]},
  { type:"scene", id:"scene3", nav:"III 心动",
    file:"197b43ca3b21bc18eb66b30ceeb6dddc.jpg",
    num:"03", title:"心动", en:"The Heart Knows",
    lines:[
      "心动这种事，嘴巴可以说谎，眼睛却藏不住。",
      "你随口提的小事，我偷偷记了很久；你不经意的笑，我反复回味了很久。",
      "原来喜欢一个人，是连自己都没察觉，嘴角就先扬了起来。"
    ]},
  { type:"interlude", kicker:"INTERLUDE · 二",
    quote:"我曾以为爱情要轰轰烈烈，<br/>遇见你才懂，<em>它是细水长流。</em>" },
  { type:"scene", id:"scene4", nav:"IV 日常",
    file:"2a321398b50650bc68ed3cff1ccf00f8.jpg",
    num:"04", title:"日常", en:"Our Little Days",
    lines:[
      "真正让我确定心意的，是那些普通得不能再普通的日常。",
      "一起吃的饭、走过的路、什么也不做的下午，全都在发着光。",
      "我开始喜欢回家的路，因为路的另一头，常常有你。"
    ]},
  { type:"scene", id:"scene5", nav:"V 远方",
    file:"c5e9aa849a1b2e89c414dd4040ac1cf4.jpg",
    num:"05", title:"远方", en:"Side by Side",
    lines:[
      "去哪里其实不重要，重要的是牵着的那只手。",
      "我们见过海，见过人群，见过深夜亮着的灯，可我记得最清的，始终是你。",
      "你在看风景，而我，在看你。"
    ]},
  { type:"interlude", kicker:"INTERLUDE · 三",
    quote:"世界很大，<br/>可只要你在身边，<em>哪里都像回家。</em>" },
  { type:"scene", id:"scene6", nav:"VI 约定",
    file:"54ee9eea7ae5af7ccfa81a6ce0bff83a.jpg",
    num:"06", title:"约定", en:"The Promise",
    lines:[
      "我开始贪心，贪心很多个明天，贪心每个季节都和你过一遍。",
      "春天看花，夏天分一支冰淇淋，秋天踩落叶，冬天把手塞进你的口袋。",
      "连「白头偕老」这种俗气的词，我都开始，认认真真地相信。"
    ]}
];

const GALLERY = [
  {file:"55eb58c8328ca1dc06ec93d8ffc8fa1e.jpg", n:"07", cap:"等你消息的时间，总是特别慢。"},
  {file:"56d477ce33facc16dd09e10ba864121c.jpg", n:"08", cap:"你的每一句话，我都想认真回。"},
  {file:"587ee75df04a776d255161d5506498e8.jpg", n:"09", cap:"你站在那里，就是风景。"},
  {file:"6983ea8954f7385822868e2060384d93.jpg", n:"10", cap:"午后、微风，和你。"},
  {file:"a2c45cf8f262222eb63b18432af78cfe.jpg", n:"11", cap:"赖着你的时候，最安心。"}
];

const LETTER = [
  "亲爱的：",
  "有时候我会偷偷想，遇见你之前的我，到底是怎么把日子过下来的。那时候也笑，也忙，也有看起来不错的一天，可心里总像空着一小块地方，不知道在等什么，也不知道能等什么。直到你来了我才明白——原来那一小块，一直是给你留的。",
  "我喜欢你开心时藏不住的样子，也喜欢你疲惫时安静靠过来的样子；喜欢你认真做事时的侧脸，也喜欢你睡到迷迷糊糊、说话颠三倒四的声音。我渐渐发现，我喜欢的不是某一个瞬间的你，而是所有时刻拼起来的、完完整整的你。",
  "和你在一起以后，我变得有点贪心。我贪心想要很多个明天，贪心每个季节都和你过一遍：春天看花，夏天分一支冰淇淋，秋天踩落叶，冬天把手塞进你的口袋。我贪心到，连「白头偕老」这种以前觉得俗气的词，都开始偷偷相信。",
  "我知道以后不会全是好日子。我们会为鸡毛蒜皮拌嘴，会在加班的深夜累得不想说话，会有谁也不肯先低头的倔强，也会有被生活压得喘不过气的时刻。可我想让你知道——这些我都想过了，而我依然，毫不犹豫地选择你。",
  "因为是你，所以难的路我也愿意走，平淡的日子我也愿意过，吵得再凶，我也记得先回头抱抱你。你不用在我面前一直坚强，不用总是懂事，不用害怕展示糟糕的那一面。在我这里，你可以永远做个小孩，可以任性，可以脆弱，可以放心地把后背交给我。",
  "谢谢你出现在我的生命里，谢谢你喜欢这样一个不完美的我，谢谢你把那些普通的日子，都过成了我舍不得快进的电影。是你让我相信，原来被一个人稳稳地放在心上，是这种感觉。",
  "这世界人很多，路很长，夜也会很深。但没关系，只要牵着你的手，我就什么都不怕。往后的春夏秋冬、日出日落、柴米油盐、诗和远方，我都想和你一起，一个一个，慢慢地，走完。",
  "我爱你。不是一时兴起，不是说说而已，是想把你的名字写进我所有的明天里，一年，又一年。"
];

/* ---------- 图片 ---------- */
document.getElementById("finaleImg").src = u(FINALE_IMG);
document.getElementById("edA").src = u(EDITORIAL.a);
document.getElementById("edB").src = u(EDITORIAL.b);
document.getElementById("edC").src = u(EDITORIAL.c);
document.getElementById("footYear").textContent = new Date().getFullYear();

/* ---------- 渲染内容流 ---------- */
const scenesEl = document.getElementById("scenes");
const railNav = document.getElementById("railNav");
let sceneCount = 0;

CONTENT.forEach(item => {
  if (item.type === "interlude") {
    const sec = document.createElement("section");
    sec.className = "interlude";
    sec.innerHTML = `<span class="il-glow"></span><div>
      <p class="il-kicker rise">${item.kicker}</p>
      <q class="rise d1">${item.quote}</q>
      ${item.by ? `<p class="il-by rise d2">${item.by}</p>` : ""}</div>`;
    scenesEl.appendChild(sec);
    return;
  }
  sceneCount++;
  const right = (sceneCount % 2 === 0) ? " right" : "";
  const sec = document.createElement("section");
  sec.className = "scene" + right;
  sec.id = item.id;
  sec.innerHTML = `
    <div class="scene-sticky">
      <div class="scene-bg"><img src="${u(item.file)}" alt="${item.title}" loading="lazy" decoding="async" /></div>
      <div class="scene-veil${right}"></div>
      <div class="scene-text">
        <p class="scene-num">SCENE ${item.num}</p>
        <h2 class="scene-title">${item.title}</h2>
        <p class="scene-en">${item.en}</p>
        <div class="scene-lines">${item.lines.map(l => `<p>${l}</p>`).join("")}</div>
      </div>
      <div class="scene-progress"><span></span></div>
      <span class="scene-count">${item.num} / 06</span>
    </div>`;
  scenesEl.appendChild(sec);

  const a = document.createElement("a");
  a.href = "#" + item.id; a.dataset.target = item.id;
  a.innerHTML = `<span>${item.nav}</span>`;
  railNav.appendChild(a);
});

["counters","gallery","editorial","letter","epilogue"].forEach(id => {
  const labels = {counters:"数",gallery:"帧",editorial:"光",letter:"信",epilogue:"约"};
  const a = document.createElement("a");
  a.href = "#" + id; a.dataset.target = id;
  a.innerHTML = `<span>${labels[id]}</span>`;
  railNav.appendChild(a);
});

/* ---------- 横向画廊 ---------- */
const hpinTrack = document.getElementById("hpinTrack");
hpinTrack.innerHTML = GALLERY.map(g => `
  <article class="hcard" data-file="${g.file}" data-cap="${g.cap}">
    <div class="hframe">
      <img src="${u(g.file)}" alt="${g.cap}" loading="lazy" decoding="async" />
      <span class="hnum">N°${g.n}</span>
    </div>
    <p class="hcap"><b>FRAME ${g.n}</b>${g.cap}</p>
  </article>`).join("");

/* ---------- 信 ---------- */
document.getElementById("letterBody").innerHTML =
  LETTER.map((p,i) => `<p class="lp ${i===0?"dear":""}">${p}</p>`).join("");

/* ---------- 平滑滚动：进入后才初始化，避免锁滚动 ---------- */
let lenis = null, lenisTried = false;
function setupLenis(){
  if(lenisTried||lenis||!window.Lenis) return;
  lenisTried = true;
  lenis = new Lenis({ duration:1.2, easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)) });
  const raf = (time)=>{ lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  requestAnimationFrame(()=>lenis.resize());
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    const id=a.getAttribute("href"); if(id.length<=1) return;
    e.preventDefault();
    if(lenis) lenis.scrollTo(id);
    else { const el=document.querySelector(id); if(el) el.scrollIntoView({behavior:"smooth"}); }
  });
});

/* ---------- 滚动驱动 ---------- */
const sceneEls = [...document.querySelectorAll(".scene")];
const hpin = document.getElementById("gallery");
const progressBar = document.getElementById("progress");
function update(){
  const vh = window.innerHeight;
  sceneEls.forEach(sec=>{
    const bg = sec.querySelector(".scene-bg");
    const lines = sec.querySelectorAll(".scene-lines p");
    const bar = sec.querySelector(".scene-progress span");
    const rect = sec.getBoundingClientRect();
    const total = sec.offsetHeight - vh;
    const p = Math.min(1, Math.max(0, -rect.top / total));
    bg.style.transform = `scale(${1.12 + p*0.08})`;
    const n = lines.length;
    lines.forEach((el,i)=>{
      const start=(i-.2)/n, end=(i+.55)/n;
      let o=(p-start)/(end-start);
      o=Math.min(1,Math.max(0,o));
      if(i===0 && p<0.06) o=1;
      el.style.opacity=o;
      el.style.transform=`translateY(${(1-o)*24}px)`;
    });
    bar.style.width=(p*100)+"%";
  });
  const r=hpin.getBoundingClientRect();
  const total=hpin.offsetHeight-vh;
  const p=Math.min(1,Math.max(0,-r.top/total));
  const max=hpinTrack.scrollWidth-window.innerWidth;
  hpinTrack.style.transform=`translate3d(${-p*max}px,0,0)`;
  const doc=document.documentElement;
  progressBar.style.width=(doc.scrollTop/(doc.scrollHeight-doc.clientHeight)*100)+"%";
}
window.addEventListener("scroll",update,{passive:true});
window.addEventListener("resize",update);
update();
document.querySelectorAll(".scene-lines p").forEach((p,i)=>{ if(i>0)p.style.opacity=0; });

/* ---------- 滚动入场 ---------- */
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);} });
},{threshold:.15});
document.querySelectorAll(".rise").forEach(el=>io.observe(el));

/* ---------- 数字计数 ---------- */
const counters=document.querySelectorAll(".counter .num");
const cIO=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const el=e.target, to=+el.dataset.to, suffix=el.dataset.suffix||"", dur=1600, start=performance.now();
    const tick=now=>{
      const t=Math.min(1,(now-start)/dur), eased=1-Math.pow(1-t,3);
      let val=Math.floor(eased*to);
      if(to>=1000) val=val.toLocaleString();
      el.textContent=val+suffix;
      if(t<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick); cIO.unobserve(el);
  });
},{threshold:.5});
counters.forEach(c=>cIO.observe(c));

/* ---------- 侧栏高亮 ---------- */
const spyTargets=["scene1","scene2","scene3","scene4","scene5","scene6","counters","gallery","editorial","letter","epilogue"]
  .map(id=>document.getElementById(id)).filter(Boolean);
const railLinks=[...railNav.querySelectorAll("a")];
const spy=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) railLinks.forEach(a=>a.classList.toggle("on",a.dataset.target===e.target.id)); });
},{threshold:.5});
spyTargets.forEach(t=>spy.observe(t));

/* ---------- 进入网站 ---------- */
const cover=document.getElementById("cover"), main=document.getElementById("main");
const bgm=document.getElementById("bgm"), musicBtn=document.getElementById("musicBtn");
let entered=false;
function enterSite(){
  if(entered) return; entered=true;
  cover.classList.add("gone");
  main.classList.remove("hidden");
  window.scrollTo(0,0);
  setupLenis();
  if(!lenis && window.Lenis===undefined){
    let w=0; const iv=setInterval(()=>{
      w+=100; setupLenis();
      if(lenis){lenis.resize();lenis.scrollTo(0,{immediate:true});clearInterval(iv);}
      if(w>4000) clearInterval(iv);
    },100);
  }
  setTimeout(()=>{ if(lenis){lenis.resize();lenis.scrollTo(0,{immediate:true});} update(); },60);
  bgm.play().then(()=>musicBtn.classList.add("playing")).catch(()=>{});
  setTimeout(()=>cover.style.display="none",1100);
}
document.getElementById("enterBtn").addEventListener("click",enterSite);
window.addEventListener("wheel",enterSite,{passive:true,once:true});
window.addEventListener("touchmove",enterSite,{passive:true,once:true});
window.addEventListener("keydown",e=>{
  if(["ArrowDown","ArrowRight"," ","Enter","PageDown"].includes(e.key)) enterSite();
},{once:true});

/* ---------- 音乐 ---------- */
musicBtn.addEventListener("click",()=>{
  if(bgm.paused){
    bgm.play().then(()=>musicBtn.classList.add("playing")).catch(()=>{
      musicBtn.classList.remove("playing");
      alert('还没有音乐：把一首 MP3 重命名为 music.mp3，放进 "音乐" 文件夹即可。');
    });
  }else{ bgm.pause(); musicBtn.classList.remove("playing"); }
});

/* ---------- 灯箱 ---------- */
const lb=document.getElementById("lightbox"), lbImg=document.getElementById("lbImg");
function openLb(file){lbImg.src=u(file);lb.classList.add("open");lb.setAttribute("aria-hidden","false");}
function closeLb(){lb.classList.remove("open");lb.setAttribute("aria-hidden","true");}
document.body.addEventListener("click",e=>{
  const t=e.target.closest("[data-file]");
  if(t) openLb(t.dataset.file);
});
document.querySelector(".lb-close").addEventListener("click",closeLb);
lb.addEventListener("click",e=>{if(e.target===lb)closeLb();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLb();});
