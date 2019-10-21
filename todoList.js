var List = document.querySelectorAll('li');

for( var i = 0 ; i < List.length; i++){
    List[i].addEventListener('mouseover', function(){
        this.classList.add('mouseOver');
        

    });

    List[i].addEventListener('mouseout', function(){

        this.classList.remove('mouseOver');
        
    });

    List[i].addEventListener('click', function(){
        this.classList.toggle('done');
        
    });
  
    
    

}
