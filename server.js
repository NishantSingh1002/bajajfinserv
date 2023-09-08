const express=require('express')
const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('BFHL')
})
app.get('/bfhl',(req,res)=>{
  res.status(200).json({operation_code:1})
})
app.post('/bfhl',(req,res)=>{
  const {data}=req.body
  // segregating the numbers from data
  let numbers=[]
  for(let i=0;i<data.length;i++){
    if(!isNaN(data[i])){
      numbers.push(data[i])
    }
  }
  //filtering the alphabets
  let alphabets=data.filter(alp=>!numbers.includes(alp))
  //finding the highest alphabet
  let highest_alphabet=alphabets.sort()
  res.json({is_success:true,user_id:"Nishant_Singh_002002",email:"nS6512@srmist.edu.in",roll_number:"RA2011003010443",numbers,alphabets,highest_alphabet:[highest_alphabet[highest_alphabet.length-1]]})
})
app.listen(5700,()=>{
  console.log('Listening to server....')
})
