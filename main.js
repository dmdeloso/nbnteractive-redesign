let button = document.querySelector('.enter-button');
let mainText = document.querySelector('.main-text');
let pageHeader = document.querySelector('.title-text');
let navLatest = document.querySelector('#latest');
let navJoin = document.querySelector('#join');
let navAlum = document.querySelector('#alumni');
let navWork = document.querySelector('#multimedia');
let burgerMenu = document.querySelector('.mobile-burger');
button.onclick = function() {pageHeader.classList.add('active');
button.classList.add('button-active');
mainText.classList.add('text-display');
mainText.classList.add('text-active');
document.querySelector('.navbar').classList.add('nav-active');
burgerMenu.classList.add("burger-active")};

const pageList = [
  {title: "NBN Interactive",
  header: "nbn interactive.",
  content: `      <p>We are the interactive section of <a href="http://northbynorthwestern.com/" target="_blank">North by Northwestern</a>, a student publication based out of Northwestern University.</p>

  <p>Our team builds software in the context of journalism. We create storytelling tools for our newsroom and interactive experiences for our readers using modern web development tools, data, design and more.</p>

  <p>The team is currently led by David Deloso and Stephanie Zhu.</p>
  <p>David is a third-year studying Journalism, Design and Asian American Studies, and has previously served as NBN's editor-in-chief. He spent his summer working as Web Director for N3Mag, an annual magazine published by AAJA-Asia.</p>
  <p>Stephanie is a third-year studying Journalism, Computer Science and Design, and has previously served as NBN mag's Creative Director. She spent her summer as a design intern at Paravane Ventures.</p>`},
    {
      title: "Join Us",
      header: "our team.",
      content: `<p>We are always accepting applications for contributors to the section. No experience is necessary, but a willingness to learn web tools (HTML, CSS and JavaScript) is! Our weekly meetings are held every Sunday at 3:30 p.m. CST over Zoom. <br> <br> <a href="https://forms.gle/Tg1UKSLbAaiw8t8VA" target="_blank">Fill out this form to join our listserv and recieve the Zoom link when we meet!</a></p>`

    },
    {
      title: "Our Alumni",
      header: "our alumni.",
      content: `<p>In no particular order, here are the Twitters of some of our awesome alumni. They've worked at places like ProPublica, The New York Times, POLITICO, 538, The Washington Post, NPR, and more.</p>
      <ul class="alumni-twitter-list">
        <li><span class="purple"><a class="no-style" target="_blank" href="https://twitter.com/giratikanon">@giratikanom</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank" href="https://twitter.com/denisedslu">@denisedslu</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank" href="https://twitter.com/_mazhang">@_mazhang</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank"href="https://twitter.com/guswez">@guswez</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank"href="https://twitter.com/nicolelzhu">@nicolelzhu</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank"href="https://twitter.com/tylrfishr">@tylrfishr</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank"href="https://twitter.com/asduner">@asduner</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank"href="https://twitter.com/sisiwei">@sisiwei</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank"href="https://twitter.com/lisagartner">@lisagartner</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank" href="https://twitter.com/alexcampbell">@alexcampbell</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank"href="https://twitter.com/kkrebeccalai">@kkrebeccalai</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank"href="https://twitter.com/eschow">@eschow</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank"href="https://twitter.com/acdebruine">@acdebruine</a></span></li>
        <li><span class="purple"><a class="no-style" target="_blank"href="https://twitter.com/maxine_whitely">@maxine_whitely</a></span></li>
      </ul>`
    },
    {
      title: "Our Work",
      header: "our work.",
      content: `<p>Below are a few of our recent interactive stories! More can be found at <a href="https://northbynorthwestern.com/">northbynorthwestern.com</a></p>
      <div class="work-container">
          <a href="https://northbynorthwestern.com/first-contact/" target="_blank" class="work-link">
            <div class="work-item">
              <div class="work-thumb"  style="background-image: url('img/firstcontact.png')"></div>
              <p class="work-hed">First Contact</p>
            </div>
          </a>
          <a href="https://northbynorthwestern.com/housing-guide-2020/" target="_blank" class="work-link">
            <div class="work-item">
              <div class="work-thumb"  style="background-image: url('img/housing.jpg')"></div>
              <p class="work-hed">Housing Guide 2020</p>
            </div>
          </a>
          <a href="https://northbynorthwestern.com/buildings-ranked/" target="_blank" class="work-link">
            <div class="work-item">
              <div class="work-thumb"  style="background-image: url('img/deeringthumb.jpg')"></div>
              <p class="work-hed">NU Buildings Ranked
              </p>
            </div>
          </a>
          <a href="https://northbynorthwestern.com/street-carts/" target="_blank" class="work-link">
            <div class="work-item">
              <div class="work-thumb"  style="background-image: url('img/carts.jpg")></div>
              <p class="work-hed">Street carts
              </p>
            </div>
          </a>
      </div>`
    }

];

const pageNav = (target) => {
  document.querySelector('.navbar').classList.toggle("mobile-active-nav");
  burgerMenu.classList.toggle("menu-active");
  if (pageHeader.classList.contains("turning")) {
    pageHeader.classList.replace("turning", "pageTurn");
    mainText.classList.replace("turning", "pageTurn");
  }
  else{
    pageHeader.classList.add("pageTurn");
    mainText.classList.remove("text-active");
    mainText.classList.add("pageTurn");
  }

  setTimeout(function(){
    pageHeader.innerHTML = target.header;
    document.title = target.title;
    mainText.innerHTML = target.content;
    pageHeader.classList.replace("pageTurn", "turning");
    mainText.classList.replace("pageTurn", "turning");
},550)

  // pageHeader.classList.replace("pageTurn", "turning");

}

navLatest.onclick = function(){pageNav(pageList[0]);};
navJoin.onclick = function(){pageNav(pageList[1]);};
navAlum.onclick = function(){pageNav(pageList[2]);};
navWork.onclick = function(){pageNav(pageList[3]);};

burgerMenu.onclick = function(){document.querySelector('.navbar').classList.toggle("mobile-active-nav"); burgerMenu.classList.toggle("menu-active");}
