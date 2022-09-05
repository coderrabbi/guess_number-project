const submitBtn = document.getElementById('submitBtn');
const randomNum = document.getElementById('randomNum');




submitBtn.addEventListener('click',function(e) {
    e.preventDefault();
    const numberValue = parseInt(randomNum.value);
    const number = Math.random()*20;
    const result =Math.round(number)
    const finalResult =(result%2 == 0);
    const numValue =(numberValue%2 == 0);
   
    var audio = new Audio('ES_Error Tone 2 - SFX Producer.mp3');
    var successAudio = new Audio('mixkit-soap-bubble-sound-2925.wav');




  //  if(Number.isNaN(numberValue)){
  //   swal({
  //       title: "Please enter your number",
  //       icon: "warning",
  //     });
  //  }
if(Number.isNaN(numberValue)){
  swal({
    title: "Please enter your number",
    icon: "warning",
  });
}

 else if(numberValue===0){
    swal({
        title: "This is Zero",
        icon: "warning",    
      });
}
   else if(numValue==finalResult ){
        swal({
            title: "you're Win",
            text: "Random Number is"+" "+ result,
            icon: "success",           
          });
          successAudio.play();
        console.log(result);
    }
   
   
    
    else if(numValue!=finalResult ){
        swal({
            title: "you're lose",
            text: "Random Number is"+" "+ result,
            icon: "error",            
          });
          audio.play();
        console.log(result);
    }
 
    handleReset();
})
const handleReset=()=>{
    randomNum.value="";
    randomNdNum.value="";
}

