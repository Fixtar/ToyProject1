const quotes =[
    {
        quote: "꾸준한 노력이 함께하지 않는 꿈은 몽상에 불과하다.",
        author:"",
    },{
        quote: "계속 갈망하라. 언제나 우직하게.",
        author:"스티브잡스",
    },{
        quote: "실패하는게 두려운게 아니라 노력하지 않는게 두렵다.",
        author:"마이클 조던",
    },{
        quote: "우리가 쓰는 것 중 가장 값비싼 것은 시간이다.",
        author:"테오프라토스",
    },{
        quote: "나를 죽이지 않는 역경은 나를 키운다.",
        author:"니체",
    },{
        quote: "너의 나태함을 슬럼프라고 착각하지 마라",
        author:"",
    },{
        quote: "말로 행동을 변명하지말고 행동으로 말을 증명하라.",
        author:"",
    },{
        quote: "오늘 변화가 없으면 1년 후에도 변화가 없다.",
        author:"",
    },{
        quote: "서두르지도 말고, 쉬지도 말아라.",
        author:"",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText =  todaysQuote.author;