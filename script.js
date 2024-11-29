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
        speak("विराज बाबू: सबसे ताक़तवर इंसान

बहुत समय पहले की बात है, एक छोटे से गाँव सूर्यगढ़ में एक ऐसा बच्चा पैदा हुआ, जिसे देखकर सबने कहा, "यह साधारण बच्चा नहीं है।" उस बच्चे का नाम था विराज बाबू। वह पैदा होते ही अपनी अलग पहचान बनाने लगा। उसके रोने की आवाज़ से पेड़ों की शाखाएं झुक जाती थीं और मुस्कुराने से पूरा गाँव रोशनी से भर जाता था।

जैसे-जैसे विराज बाबू बड़े हुए, उनके चमत्कारों के किस्से दूर-दूर तक फैलने लगे। कहते हैं, उनकी एक नजर से नदी का पानी ठहर जाता था, और उनके एक इशारे से बारिश शुरू हो जाती थी। लेकिन विराज बाबू के दिल में कभी घमंड नहीं आया। वह हमेशा अपनी मम्मा (दादी) के पास रहते और उनके बनाए खाने की तारीफ करते।

विराज बाबू का सबसे बड़ा मुकाबला

एक दिन, कालगढ़ के राजा तिमुर्तान ने पूरे देश में ऐलान किया कि कोई भी इंसान, जो उससे ज्यादा ताक़तवर हो, उसे चुनौती दे सकता है। लेकिन अगर हार गया, तो उसे अपनी ताकत राजा को सौंपनी पड़ेगी। सभी लोग डरे हुए थे, क्योंकि तिमुर्तान के पास जादुई तलवार थी, जिससे कोई नहीं जीत सका था।

जब यह खबर सूर्यगढ़ पहुंची, तो विराज बाबू ने अपनी मम्मा से कहा, "मम्मा, तिमुर्तान को अब पता चलेगा कि असली ताक़त क्या होती है।" मम्मा ने उन्हें आशीर्वाद दिया और कहा, "तू दुनिया का सबसे ताक़तवर इंसान है, लेकिन अपनी ताकत को हमेशा अच्छे के लिए इस्तेमाल करना।"

मुकाबले का दिन

तिमुर्तान ने अपने महल के सामने एक विशाल मैदान में युद्ध का आयोजन किया। जैसे ही विराज बाबू वहाँ पहुंचे, पूरा मैदान उनकी उपस्थिति से कांप उठा। तिमुर्तान ने अपनी जादुई तलवार उठाई और कहा, "बच्चे, वापस चले जाओ। तुम मुझसे नहीं जीत सकते।"

विराज बाबू मुस्कुराए और बोले, "राजा, तुमने अब तक ताक़त देखी ही कहाँ है।" उन्होंने अपनी छोटी सी उंगली से एक इशारा किया, और तिमुर्तान की तलवार हवा में उड़ने लगी। फिर उन्होंने धीरे से कहा, "तलवार, अब पानी बन जा।" तलवार सचमुच पानी में बदल गई और तिमुर्तान के हाथों से बह गई।

तिमुर्तान ने गुस्से में अपनी पूरी सेना बुला ली। लेकिन विराज बाबू ने अपनी हथेली से ताली बजाई, और पूरी सेना जमीन पर सो गई। यह देखकर तिमुर्तान ने घुटने टेक दिए और कहा, "तुम सच में इस दुनिया के सबसे ताक़तवर इंसान हो। मुझे माफ कर दो।"

दुनिया को सिखाया प्यार का पाठ

विराज बाबू ने तिमुर्तान को माफ कर दिया और कहा, "ताकत का मतलब दूसरों को हराना नहीं, बल्कि उनकी मदद करना है।" इसके बाद, उन्होंने अपने चमत्कारों से पूरे देश को खुशहाल बना दिया। उन्होंने पहाड़ों से पानी लाकर सूखी जमीनों को हरियाली से भर दिया और हर गरीब को खाना और घर दिया।

लोग आज भी कहते हैं कि अगर किसी को मदद की ज़रूरत हो, तो विराज बाबू किसी न किसी रूप में वहाँ पहुंच जाते हैं। और यही कारण है कि वह इस दुनिया के सबसे ताक़तवर इंसान हैं, जिनसे बड़ा कोई नहीं।

")

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
