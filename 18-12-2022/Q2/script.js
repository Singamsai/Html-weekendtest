const seconds = document.getElementById('seconds');
const Next = document.getElementById('next_button');
const Question = document.getElementById('Q1');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const qNo = document.getElementById('q_no');
const main = document.getElementById('main-container');
const body = document.getElementsByTagName('body');
const mark1 = document.getElementById('mark1');
const mark2 = document.getElementById('mark2');
const mark3 = document.getElementById('mark3');
const mark4 = document.getElementById('mark4');

let i=8;
let value=setInterval( ()=>{
    i--;
    seconds.innerHTML= i;
    if(i===0){
        clearInterval(value);
    }
}, 1000);

let questions = ['2. What does SQL stands for?', 
                '3. What does HTTP stands for?', 
                '4. What does IP stands for?', 
                '5. What does JS stands for?'];
let options = [{
    option1:'Structure Question Language'+`<span id ='mark1'> ✖ </span>`,
    option2:'Stands Queue Line'+`<span id ='mark1'> ✖ </span>`,
    option3:'Structuring Querries Language'+`<span id ='mark1'> ✖ </span>`,
    option4:'Structured Query Language'+`<span id ='mark2'> ✔ </span>`
},{ option1:'Hyper Text Texting Protocol'+`<span id ='mark1'> ✖ </span>`,
    option2:'Hyper Text Transfer Protocol'+`<span id ='mark2'> ✔ </span>`,
    option3:'Hyper Text Training Protocol'+`<span id ='mark1'> ✖ </span>`,
    option4:'Highly Transport Terminal policy'+`<span id ='mark1'> ✖ </span>`
},{ option1:'Internet Protocol'+`<span id ='mark2'> ✔ </span>`,
    option2:'Internal Personality'+`<span id ='mark1'> ✖ </span>`,
    option3:'Indian Petrolling'+`<span id ='mark1'> ✖ </span>`,
    option4:'Insurance Policy'+`<span id ='mark1'> ✖ </span>`
},{ option1:'Japan Saloon'+`<span id ='mark1'> ✖ </span>`,
    option2:'Just Store'+`<span id ='mark1'> ✖ </span>`,
    option3:'JavaScript'+`<span id ='mark2'> ✔ </span>`,
    option4:'Java Steps'+`<span id ='mark1'> ✖ </span>`
} ];
let j=-1;
Next.addEventListener('click', ()=>{
    j++;
    let k=8;
    if(j<4){
        Question.innerHTML=questions[j];
        option1.innerHTML=options[j].option1;
        option2.innerHTML=options[j].option2;
        option3.innerHTML=options[j].option3;
        option4.innerHTML=options[j].option4;
        qNo.innerHTML=j+2+' of 5 Questions';
        
        let stop= setInterval(async ()=>{
            k--;
            seconds.innerHTML= k;
            if(k==0){
                 clearInterval(stop);
            }
        }, 1000);
    }
    else{
        Question.innerHTML="You have attempted all the Qns ";
        option1.innerHTML="";
        option1.style.border='none';
        option2.innerHTML="";
        option2.style.border='none';
        option3.innerHTML="";
        option3.style.border='none';
        option4.innerHTML='';
        option4.style.border='none';
    }
});
let l=0;
document.addEventListener('click', (e)=>{
    const id = e.target.getAttribute('id');
    l++;
    if(l==1){
        switch(id){
            case 'option1':
                mark1.style.display='inline-block';
                mark2.style.display='inline-block';
                break;
            case 'option2':
                mark2.style.display='inline-block';
                break;
            case 'option3':
                mark3.style.display='inline-block';
                mark2.style.display='inline-block';
                break;
            case 'option4':
                mark4.style.display='inline-block';
                mark2.style.display='inline-block';
                break;
        }
    }
    l++;
    if(l==3){
        switch(id){
            case 'option1':
                mark1.style.display='inline-block';
                mark4.style.display='inline-block';
                break;
            case 'option2':
                mark2.style.display='inline-block';
                mark4.style.display='inline-block';
                break;
            case 'option3':
                mark3.style.display='inline-block';
                mark4.style.display='inline-block';
                break;
            case 'option4':
                mark4.style.display='inline-block';
                break;
        }
    }
    l++;
    if(l==5){
        
        switch(id){
            case 'option1':
                mark1.style.display='inline-block';
                mark2.style.display='inline-block';
                break;
            case 'option2':
                mark2.style.display='inline-block';
                break;
            case 'option3':
                mark3.style.display='inline-block';
                mark2.style.display='inline-block';
                break;
            case 'option4':
                mark4.style.display='inline-block';
                mark2.style.display='inline-block';
                break;
        }
    }
    l++;
    if(l==7){
        
        switch(id){
            case 'option1':
                mark1.style.display='inline-block';
                break;
            case 'option2':
                mark2.style.display='inline-block';
                mark1.style.display='inline-block';
                break;
            case 'option3':
                mark3.style.display='inline-block';
                mark1.style.display='inline-block';
                break;
            case 'option4':
                mark4.style.display='inline-block';
                mark1.style.display='inline-block';
                break;
        }
    }
    if(l==9){
        l++;
        switch(id){
            case 'option1':
                mark1.style.display='inline-block';
                mark3.style.display='inline-block';
                break;
            case 'option2':
                mark2.style.display='inline-block';
                mark3.style.display='inline-block';
                break;
            case 'option3':
                mark3.style.display='inline-block';
                break;
            case 'option4':
                mark4.style.display='inline-block';
                mark3.style.display='inline-block';
                break;
        }
    }
})
