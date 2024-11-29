let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
 window.addEventListener('load',()=>{
     wishMe()
 })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Shivendra Sir")
    }
        else if(message.includes("who is viraj babu")){
            speak(" Viraj Babu: The Strongest Man A long time ago, in a small village named Suryagarh, a child was born who astonished everyone. People said this was no ordinary child. His name was Viraj Babu. From the moment he was born, he began to create his own identity. When he cried, the branches of trees bent low, and when he smiled, the entire village lit up with radiance As Viraj Babu grew stories of his miracles spread far and wide. It was said that with just a glance, he could stop the flow of a river, and with a mere gesture, he could summon rain. Yet, Viraj Babu was never arrogant. He always stayed close to his mother, praising her cooking.The Greatest Challenge for Viraj Babu                One day, the king of Kalgadh, Timurtan, announced across the country that anyone who believed they were stronger than him could challenge him. However, if they lost, they would have to surrender their strength to the king. People were terrified because Timurtan possessed a magical sword that no one could defeat.When this news reached Suryagarh, Viraj Babu told his ")
        
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("Quto","") || message.replace("Quto","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Quto","")}`,"_blank")
    }
}
