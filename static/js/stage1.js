const next = document.getElementById("next")

const button = document.querySelector("button");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
let i=0;
var ans={
    "Greetings":"",
    "Ready to start":"",
     "Do you sometimes have trouble falling asleep? Say yes or no":"",
     "Do you worry about the future?.Say yes or no":"",
     "Do you often reach for a cigarette, a drink, or a tranquilizer in order to reduce tension? .Say yes or no":"",
     "Do you become irritated over basically insignificant matters ?.Say yes or no":"",
     "Do you have less energy than you seem to need or would like to have?.Say yes or no" :"",
     "Do you have too many things to do and not enough time to do them? .Say yes or no":"",
     "Do you have headaches or stomach problems?.Say yes or no":"",
     "Do you feel pressure to accomplish or to get things done?.Say yes or no":"",
     
     "Do you find it hard to stop worrying?":"",
     "Do you experience feelings of restlessness?":"",
     "Do you have feelings of tiredness easily?":"",
     "Do you have difficulty concentrating?":"",
     "Do you feel irritable?":"",
     "Do you experience muscle pain?":"",
     
    "stress":"",
    "anxiety":""
  };
// var ans={
//     "Greetings":"hi",
//     "Ready to start":"im ready to start",
//      "Do you sometimes have trouble falling asleep? Say yes or no":"yes",
//      "Do you worry about the future?.Say yes or no":"yes",
//      "Do you often reach for a cigarette, a drink, or a tranquilizer in order to reduce tension? .Say yes or no":"no",
//      "Do you become irritated over basically insignificant matters ?.Say yes or no":"yes",
//      "Do you have less energy than you seem to need or would like to have?.Say yes or no" :"yes",
//      "Do you have too many things to do and not enough time to do them? .Say yes or no":"yes",
//      "Do you have headaches or stomach problems?.Say yes or no":"yes",
//      "Do you feel pressure to accomplish or to get things done?.Say yes or no":"no",
     
//      "Do you find it hard to stop worrying?":"no",
//      "Do you experience feelings of restlessness?":"no",
//      "Do you have feelings of tiredness easily?":"no",
//      "Do you have difficulty concentrating?":"yes",
//      "Do you feel irritable?":"yes",
//      "Do you experience muscle pain?":"yes",
     
//     "stress":"8",
//     "anxiety":"10"
//     };

var a = true;
var c =1;
var s=0;
var nos=1;
var stress=0;
var count=0;
var anxiety=0;
recognition.onstart = function(){
    console.log("Speech Recognition started");
};
recognition.onresult = function(event)
{
    console.log(event);
    const spokenwords= event.results[0][0].transcript;
    while (i<23){
        
        let key =Object.entries(ans)[i][0]
        ans[`${key}`]=spokenwords;
        break
    
    
}
i=i+1
console.log(Object.entries(ans)[0][0])
console.log("spoken words:",spokenwords);
console.log("spoken words:",ans);
console.log("anxiety",anxiety);
console.log("stress",stress);
let json =JSON.stringify(ans, null, 2)
console.log(json)
    computerSpeech(spokenwords);
};
function computerSpeech(words)
{
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-IN";
    speech.pitch = 0.9;
    speech.volume =1;
    speech.rate =0.8;
    determineWords(speech,words);
    window.speechSynthesis.speak(speech);
}
function determineWords(speech,words)
{
    words = words.toLowerCase();
    if(words.includes("hi")&& a==true)
    {
        
        speech.text = "Hi there! Can we start? Say I am ready to start!!";
        
    }
    else if(words.includes("ready"))
    {
        
        speech.text = "Thats great buddy!,  Do you sometimes have trouble falling asleep? Say yes or no";
        
    }
    else if(words.includes("yes") && count==0)
    {
        anxiety=anxiety+1
        count+=1
        speech.text = "Okay buddy! Lets start the actual conversation, Do you worry about the future?.Say yes or no";  
    }
    else if(words.includes("no") && count==0)
    {
        count+=1;
        speech.text = "Okay buddy!Lets start the actual conversation Do you worry about the future?.Say yes or no";  
         
    }
    else if(words.includes("yes") && count<=1)
    {
        stress=stress+1;
        count+=1
       
        speech.text = "Okay buddy! Do you often reach for a cigarette, a drink, or a tranquilizer in order to reduce tension? .Say yes or no";  
       
        
    }
    else if(words.includes("no") && count<=1)
    {
        count+=1
        speech.text = "Okay buddy! Do you often reach for a cigarette, a drink, or a tranquilizer in order to reduce tension? .Say yes or no";  
        
    }
    else if(words.includes("yes") && count<=2 )
    {
        stress=stress+1;
        count+=1
        speech.text = "Okay buddy! Do you become irritated over basically insignificant matters ?.Say yes or no";  
    }
    else if(words.includes("no") && count<=2)
    {
        count+=1
        speech.text = "Okay buddy! Do you become irritated over basically insignificant matters ?.Say yes or no";  
        
    }
    else if(words.includes("yes") && count<=3)
    {
        stress=stress+1;
        count+=1
        speech.text = "Okay buddy! Do you have less energy than you seem to need or would like to have?.Say yes or no";  
    }
    else if(words.includes("no") && count<=3)
    {
        count+=1
        speech.text = "Okay buddy! Do you have less energy than you seem to need or would like to have?.Say yes or no";
    }
    else if(words.includes("yes") && count<=4)
    {
        stress=stress+1;
        count+=1
        speech.text = "Okay buddy! Do you have too many things to do and not enough time to do them? .Say yes or no";  
    }
    else if(words.includes("no") && count<=4)
    {
        count+=1
        speech.text = "Okay buddy!Do you have too many things to do and not enough time to do them? .Say yes or no";
    }
    else if(words.includes("yes") && count<=5 )
    {
        stress=stress+1;
        count+=1
        speech.text = "Okay buddy!  Do you have headaches or stomach problems?.Say yes or no";  
    }
    else if(words.includes("no") && count<=5)
    {
        count+=1
        speech.text = "Okay buddy!  Do you have headaches or stomach problems?.Say yes or no";
    }
    else if(words.includes("yes") && count<=6)
    {
        count+=1
        stress=stress+1;
        speech.text = "Okay buddy! Your honest input is valuable and can make a real difference, kindly focus  Do you feel pressure to accomplish or to get things done?.Say yes or no";  
    }
    else if(words.includes("no") && count<=6)
    {
        count+=1
        speech.text = "Okay buddy! Your honest input is valuable and can make a real difference, kindly focus Do you feel pressure to accomplish or to get things done?.Say yes or no";
    }
    
  
    
    
    else if(words.includes("yes") && count<=7)
    {
        anxiety=anxiety+1;
        count+=1
        speech.text = "Okay buddy! Do you find it hard to stop worrying?.Say yes or no";  
    }
    else if(words.includes("no") && count<=7)
    {
        count+=1
        speech.text = "Okay buddy! Do you find it hard to stop worrying?.Say yes or no";
    }
    else if(words.includes("yes") && count<=8)
    {
        anxiety=anxiety+1;
        count+=1
        speech.text = "Okay buddy! Do you experience feelings of restlessness?.Say yes or no";  
    }
    else if(words.includes("no") && count<=8)
    {
        count+=1
        speech.text = "Okay buddy! Do you experience feelings of restlessness?.Say yes or no";
    }
    else if(words.includes("yes") && count<=9)
    {
        anxiety=anxiety+1;
        count+=1
        speech.text = "Okay buddy! three more questions to go you are almost there, Do you have feelings of tiredness easily?.Say yes or no";  
    }
    else if(words.includes("no") && count<=9)
    {
        count+=1
        speech.text = "Okay buddy!three more questions to go you are almost there, Do you have feelings of tiredness easily?.Say yes or no";
    }
    else if(words.includes("yes") && count<=10)
    {
        anxiety=anxiety+1;
        count+=1
        speech.text = "Okay buddy! Do you have difficulty concentrating?.Say yes or no";  
    }
    else if(words.includes("no") && count<=10)
    {
        count+=1
        speech.text = "Okay buddy! Do you have difficulty concentrating?.Say yes or no";
    }
    else if(words.includes("yes") && count<=11)
    {
        anxiety=anxiety+1;
        count+=1
        speech.text = "Okay buddy! Do you feel irritable?.Say yes or no";  
    }
    else if(words.includes("no") && count<=11)
    {
        count+=1
        speech.text = "Okay buddy! Do you feel irritable?.Say yes or no";
    }
    else if(words.includes("yes") && count<=12)
    {
        anxiety=anxiety+1;
        count+=1
        speech.text = "Okay buddy!  Do you experience muscle pain? Say yes or no";  
    }
    else if(words.includes("no") && count<=12)
    {
        count+=1
        speech.text = "Okay buddy!   Do you experience muscle pain? Say yes or no";
    }
    
    
    else if(count==13)
    {
        speech.text = "Thank you for your responses and trusting Stress and Anxiety Detection System, Click next";
        ans['stress']=stress;
        ans['anxiety']=anxiety;
        document.getElementById("next").style.visibility="visible";
    }
}
let resone = async () => {
    console.log("response");
    console.log(ans);
    let resone = await fetch('/resone/', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(ans)
        
    })
    
    let obj = await resone.json()
    console.log(obj);
    return obj
}
        
button.addEventListener("click",()=>{
    recognition.start();
});
// next.addEventListener("click",resone);
next.addEventListener("click", resone);