const quotes = [
    {
        quote: "그렇게 삶을 비굴하게 살지 말라고",
        author: "레드벨벳 예리",
    },
    {
        quote: "고생하는거 절대 싫어",
        author: "레드벨벳 예리",
    },
    {
        quote: "엄마가 왜 도망갔는지 이제 얘기해줄 때도 됐어, 아빠",
        author: "레드벨벳 예리",
    },
    {
        quote: "소리에배락터러짐신가 영걷어진줄은모르고 겅핸나왕보거들랑 영해연 봥 밝도록 잠 한잠도안잠수다동네사람덜",
        author: "김정자 제주 구좌읍",
    },
    {
        quote: "내일에 대한 기대가 있어야 오늘 하루를 의미있게 보낼 수 있는거 같아요",
        author: "레드벨벳 아이린",
    },
    {
        quote: "힘들 땐 어떻게 이겨내나요? 가끔 져요",
        author: "아이유",
    },
    {
        quote: "하나를 잃으면 하나를 얻고, 하나를 얻으면 하나를 잃는다는 말을 되새김질하며 살고 있어요",
        author: "아이유",
    },
    {
        quote: "불안하면서 근사해 보이게 사느니, 그냥 초라하더라도 마음 편하게 살아야지 ",
        author: "아이유",
    },
    {
        quote: "난 비누가 되어야겠다",
        author: "아이유",
    },
    {
        quote: "음원으로서의 가치보다, 음악으로서의 가치를 조금 더 생각할 줄 아는 가수가, 작곡가가, 작사가가, 프로듀서가 되겠습니다",
        author: "아이유",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

//console.log(quotes[Math.floor(Math.random()*quotes.length)])
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author