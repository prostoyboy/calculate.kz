console.log("работает")

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
    
}
  

 function cnk(n, k) {
    if(k > n)
    alert('k не должно быть больше n!')
     let l = n-k
    return factorial(n) / (factorial(k) * factorial(l))
    
}


function pn(n){
    return factorial(n)
}

function ank(n, k) {
   
    if(k > n)
   alert('k не должно быть больше n!')
    let l = n-k
   return factorial(n) / factorial(l)
   
}

let text = $('.ura').text()
let text2 = $('.test').html()

$('.ura').click(function(){
    console.log(text2)
})

$('#select').change(function(){
    console.log('Изменился текст', $(this).val() == '2')
})
