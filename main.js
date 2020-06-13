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
  content: `  <p>We are the interactive section of <a href="http://northbynorthwestern.com/" target="_blank">North by Northwestern</a>, a student publication based out of Northwestern University.</p>

    <p>Our team builds software in the context of journalism. We create storytelling tools for our newsroom and interactive experiences for our readers using modern web development tools, data, design and more.</p>

    <p>The team is currently led by Audrey DeBruine and Maxine Whitely.</p>

    <p>Audrey is a senior double majoring in journalism and statistics. She spent her summer at the San Francisco Chronicle as an Interactive Intern.</p>

    <p>Maxine is a junior studying computer science. She spent her summer as a Software Engineering Intern at GitHub and her fall as an Interactive News Developer Intern at the New York Times.</p>`},
    {
      title: "Join Us",
      header: "our team.",
      content: `<p>We are always accepting applications for contributors to the section. Read more about the role below and apply here. Once you fill out the application form, you will be added to a Slack channel and an email list where story opportunities and other information related to the section will be shared.</p>`

    },
    {
      title: "Our Alumni",
      header: "our alumni.",
      content: `<p>In no particular order, here are the Twitters of some of our awesome alumni. They've worked at places like ProPublica, The New York Times, POLITICO, 538, The Washington Post, NPR, and more.</p>
      <ul class="alumni-twitter-list">
        <li><span class="purple"><a class="no-style" href="https://twitter.com/giratikanon">@giratikanom</a></span></li>
        <li><span class="purple"><a class="no-style" href="https://twitter.com/denisedslu">@denisedslu</a></span></li>
        <li><span class="purple"><a class="no-style" href="https://twitter.com/_mazhang">@_mazhang</a></span></li>
        <li><span class="purple"><a class="no-style" href="https://twitter.com/guswez">@guswez</a></span></li>
        <li><span class="purple"><a class="no-style" href="https://twitter.com/nicolelzhu">@nicolelzhu</a></span></li>
        <li><span class="purple"><a class="no-style" href="https://twitter.com/tylrfishr">@tylrfishr</a></span></li>
        <li><span class="purple"><a class="no-style" href="https://twitter.com/asduner">@asduner</a></span></li>
        <li><span class="purple"><a class="no-style" href="https://twitter.com/sisiwei">@sisiwei</a></span></li>
        <li><span class="purple"><a class="no-style" href="https://twitter.com/lisagartner">@lisagartner</a></span></li>
        <li><span class="purple"><a class="no-style" href="https://twitter.com/alexcampbell">@alexcampbell</a></span></li>
        <li><span class="purple"><a class="no-style" href="https://twitter.com/kkrebeccalai">@kkrebeccalai</a></span></li>
        <li><span class="purple"><a class="no-style" href="https://twitter.com/eschow">@eschow</a></span></li>
      </ul>`
    },
    {
      title: "Our Work",
      header: "our work.",
      content: "<p>WIP</p>"
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
