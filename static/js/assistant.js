
const next = document.getElementById("next")
const button = document.querySelector("button");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
//const languageSelect = document.getElementById('language-select');
const userSelectedLangCode = document.getElementById('language-select').value;
var ans={
"Greetings":"",
"How are you doing?":"",
 "Tell me about yourself?":"",
 "Say me your strengths?":"",
 "What brings you here?":"",
 "Have you been to therapy before? If so, what was your impression of it?":"",
 "If you had a magical wish, what would you wish for?" :"",
 "What is your favorite food for breakfast?":"",
 "What makes someone a friend to you?":"",
 "Why and When were you last angry?":"",
 "What do you not like to do at home?":""

};
let i=0;
var a = true;
var c =1;
recognition.onstart = function(){
    console.log("Speech Recognition started");
};

recognition.onresult = function(event)
{
    console.log(event);
    
    const spokenwords= event.results[0][0].transcript;
    while (i<11){
        
            let key =Object.entries(ans)[i][0]
            ans[`${key}`]=spokenwords;
            break
        
        
    }
   i=i+1
    console.log(Object.entries(ans)[0][0])
    console.log("spoken words:",spokenwords);
    console.log("spoken words:",ans);
    let json =JSON.stringify(ans, null, 2)
    console.log(json)
    computerSpeech(spokenwords);
};

function computerSpeech(words)
{
    
    const speech = new SpeechSynthesisUtterance();
    speech.lang ="en-US";
    speech.pitch = 0.9;
    speech.volume =1;
    speech.rate =0.8;
    speech.lang = userSelectedLangCode;
    console.log(speech.lang);
    determineWords(speech,words);
    window.speechSynthesis.speak(speech);
}
function determineWords(speech,words)
{
    words = words.toLowerCase();
    if(words.includes("hi")&& a==true)
    {
        
        speech.text = "Hi there! How are you doing? Say good or bad";
        
    }
    else if((words.includes("good")|| words.includes("great") || words.includes("well")||words.includes("fine")))
    {
        
        speech.text = "Thats great buddy!, Tell me about yourself?";
        a=false;
    }
    else if((words.includes("bad") || words.includes("sad")|| words.includes("okay"))&& a==true)
    {
        
        
        speech.text = "Thats okay buddy, we will sort it out!.. Tell me about yourself?";
        a=false;
    }
    
    else if(words.length!=0 && c==1 && a==false)
    {
        
        speech.text = "Okay buddy!! I’m here for you I’m happy to listen any time Say me your strengths?";
        c=2;
    }
    else if(words.length!=0 && c==2 && a==false)
    {
        speech.text = "Thats great buddy!! What brings you here?";
        c=3;  
    }
    else if(words.length!=0 && c==3 && a==false)
    {
        speech.text = "Okay buddy!! I’m glad you told me    Have you been to therapy before? If so, what was your impression of it?";
        c=4;  
    }
    else if(words.length!=0&& c==4 && a==false)
    {
        speech.text ="Thank you for sharing with me    If you had a magical wish, what would you wish for?";
        c=5;
    }
    else if(words.length!=0 && c==5 && a==false)
    {
        speech.text="Thats nice to hear from you,What is your favorite food for breakfast?";
        c=6;
    }
    else if(words.length!=0 && c==6 && a==false)
    {
        speech.text="Yum Yum!!,  Can you tell me What makes someone a friend to you?";
        c=7;
    }
    else if(words.length!=0 && c==7 && a==false)
    {
        speech.text="Wow thats great!.. Lets get into deep conversation now..Why and When were you last angry?";
        c=8;
    }
    else if(words.length!=0 && c==8 && a==false)
    {
        speech.text="This must be hard to talk about, Thanks for opening up to me,What do you not like to do at home?";
        c=9;
    }
    else if(words.length!=0 && c==9 && a==false)
    {
        speech.text="I’m glad you told me Shall we start??Say yes to start";
        c=10;
    }
    else if(words.length!=0 && c==10 && a==false && words.includes("yes"))
    {
        speech.text="Click next!";
        c=11;
        document.getElementById("next").style.visibility="visible";
    }
    else if(words.length!=0 && c==10 && a==false && words.includes("no"))
    {
        speech.text="Be strong!! we will sort it out Click next!";
        c=12;
        document.getElementById("next").style.visibility="visible";
    }
   

}

let response = async () => {
    console.log("response");
    let response = await fetch('/response/', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(ans)
        
    })
    
    let obj = await response.json()
    return obj
}
button.addEventListener("click",()=>{
    recognition.start();
});
next.addEventListener("click",response);





// const next = document.getElementById("next")
// const button = document.querySelector("button");
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// const deeplApiKey = 'YOUR_DEEPL_API_KEY'; // replace with your Deepl API key
// const userSelectedLangCode = document.getElementById('language-select').value;
// var ans={
//     "Greetings":"",
//     "How are you doing?":"",
//     "Tell me about yourself?":"",
//     "Say me your strengths?":"",
//     "What brings you here?":"",
//     "Have you been to therapy before? If so, what was your impression of it?":"",
//     "If you had a magical wish, what would you wish for?" :"",
//     "What is your favorite food for breakfast?":"",
//     "What makes someone a friend to you?":"",
//     "Why and When were you last angry?":"",
//     "What do you not like to do at home?":""
// };
// let i=0;
// var a = true;
// var c =1;

// recognition.onstart = function(){
//     console.log("Speech Recognition started");
// };

// recognition.onresult = async function(event) {
//     console.log(event);
    
//     const spokenwords = event.results[0][0].transcript;
//     while (i < 11) {
//         let key = Object.entries(ans)[i][0];
//         ans[`${key}`] = spokenwords;
//         break;
//     }
//     i++;
//     console.log("spoken words:", spokenwords);
//     console.log("spoken words:", ans);
//     let json = JSON.stringify(ans, null, 2);
//     console.log(json);
//     const translatedWords = await translate(spokenwords, userSelectedLangCode, 'EN');
//     computerSpeech(translatedWords);
// };

// async function translate(text, sourceLangCode, targetLangCode) {
//     const url = `https://api-free.deepl.com/v2/translate?auth_key=${deeplApiKey}&text=${encodeURIComponent(text)}&source_lang=${sourceLangCode}&target_lang=${targetLangCode}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.translations[0].text;
// }

// function computerSpeech(words) {
//     const speech = new SpeechSynthesisUtterance();
//     speech.lang = "en-US";
//     speech.pitch = 0.9;
//     speech.volume = 1;
//     speech.rate = 0.8;
//     console.log(userSelectedLangCode);
//     determineWords(speech, words);
//     window.speechSynthesis.speak(speech);
// }

// function determineWords(speech, words) {
//     words = words.toLowerCase();
//     if (words.includes("hi") && a == true) {
//         speech.text = "Hi there! How are you doing? Say good or bad";
//     } else if ((words.includes("good") || words.includes("great") || words.includes("well") || words.includes("fine"))) {
//         speech.text = "Thats great buddy!, Tell me about yourself?";
//         a = false;
//     } else if ((words.includes("bad") || words.includes("sad") || words.includes("okay")) && a == true) {
//         speech.text = "Thats okay buddy, we will sort it out!.. Tell me about yourself?";
//         a = false;
//     } else if (words.length != 0 && c == 1 && a == false) {
//         speech.text = "Okay buddy!! I’m here for you I’m happy to listen any time Say me your strengths?";
//         c = 
