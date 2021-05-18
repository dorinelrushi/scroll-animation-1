window.addEventListener("wheel",function(){
    var shoes = document.getElementById("demo");
           
            console.log(this.pageYOffset)
            
            var count = this.pageYOffset;
            count++; 

            shoes.style.marginTop = count + "px";
    
})