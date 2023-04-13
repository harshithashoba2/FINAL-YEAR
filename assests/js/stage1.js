const button = document.querySelector("button");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
var ans="";
var a = true;
var c =1;
var stress=0;
var anxiety=0;
recognition.onstart = function(){
    console.log("Speech Recognition started");
};
recognition.onresult = function(event)
{
    console.log(event);
    const spokenwords= event.results[0][0].transcript;
    ans+=spokenwords;
    console.log("spoken words:",spokenwords);
    console.log("spoken words:",ans);
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
    if(words.includes("ready"))
    {
        
        speech.text = "Thats great buddy!, How many hours you sleep a day?Do you have any sleep disturbances like waking from sleep0? Say yes or no";
        if(words.includes("yes"))
        {
            speech.text = "Okay buddy! Now lets start the actual conversation, Do you feel tension, nervousness in most of things or places you go?Say yes or no"; 
            if(words.includes("yes"))
            {
                stress=stress+1;
                speech.text = "Okay buddy! Do you lack interest in activities you do? or do you lose interest in doing even your favourite activity or tasks.Say yes or no"; 
                if(words.includes("yes"))
                {
                    stress=stress+1
                }
            }
        }
        else if(words.includes("no"))
        {

        }
        
    }
    // else if((words.includes("bad") || words.includes("sad"))&& a==true)
    // {
        
        
    //     speech.text = "Thats okay buddy, we will sort it out!.. Tell me about yourself?";
    //     a=false;
    // }
    
    // else if(words.length!=0 && c==1 && a==false)
    // {
        
    //     speech.text = "Okay buddy!! I’m here for you I’m happy to listen any time Say me your strengths?";
    //     c=2;
    // }
    // else if(words.length!=0 && c==2 && a==false)
    // {
    //     speech.text = "Thats great buddy!! What brings you here?";
    //     c=3;  
    // }
    // else if(words.length!=0 && c==3 && a==false)
    // {
    //     speech.text = "Okay buddy!! I’m glad you told me,Have you been to therapy before? If so, what was your impression of it?";
    //     c=4;  
    // }
    // else if(words.length!=0&& c==4 && a==false)
    // {
    //     speech.text ="Thank you for sharing with me,If you had a magical wish, what would you wish for?";
    //     c=5;
    // }
    // else if(words.length!=0 && c==5 && a==false)
    // {
    //     speech.text="Thats nice to hear from you,When were you last angry?";
    //     c=6;
    // }
    // else if(words.length!=0 && c==6 && a==false)
    // {
    //     speech.text="This must be hard to talk about, Thanks for opening up to me,What is your favorite food for breakfast?";
    //     c=7;
    // }
    // else if(words.length!=0 && c==7 && a==false)
    // {
    //     speech.text="Yum Yum!!,What do you not like to do at home?";
    //     c=8;
    // }
    // else if(words.length!=0 && c==8 && a==false)
    // {
    //     speech.text="I’m glad you told me.What makes someone a good friend to you?";
    //     c=9;
    // }
    // else if(words.length!=0 && c==9 && a==false)
    // {
    //     speech.text="Wow thats great! Shall we start??Say yes to start";
    //     c=10;
    // }
    // else if(words.length!=0 && c==10 && a==false && words.includes("yes"))
    // {
    //     speech.text="Click next!";
    //     c=11;
    //     document.getElementById("next").style.visibility="visible";
    // }
    // else if(words.length!=0 && c==10 && a==false && words.includes("no"))
    // {
    //     speech.text="Be strong!! we will sort it out.Click next!";
    //     c=12;
    //     document.getElementById("next").style.visibility="visible";
    // }
   

}
button.addEventListener("click",()=>{
    recognition.start();
});