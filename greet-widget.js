document.addEventListener('alpine:init', ()=>{
    Alpine.data('greetWidget',function()
    {
        return{
    name:'', 
    message :'',
    showGreeting : false, 
    greetMe(){
    this.message = greet(this.name);
    setTimeout(() => {
        this.message = '';
    }, 3000);

    }
}
})
})
