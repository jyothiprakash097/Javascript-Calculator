function insert(num){
    document.form.textView.value =document.form.textView.value+num;
  }

function equal() {
    let expression=document.form.textView.value;
    if(expression){
        document.form.textView.value=eval(expression)
    }
}
function clean() {
     document.form.textView.value=''
}
function back() {
    let expression=document.form.textView.value;
    document.form.textView.value=expression.substring(0,expression.length-1)
}