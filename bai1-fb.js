$(document).ready(function () {
    $('[ data-hieuung="tooltip"]').tooltip();
    var nut=document.querySelectorAll('.icon_click'),
    khung=document.getElementsByClassName('chung'); 
    for(var i=0;i<nut.length;i++){
        nut[i].onclick=function(){      
           if(this.classList[2]=="active"){
            var noidung= this.getAttribute('data-noidung');
            var hien =document.getElementById(noidung);
            hien.classList.remove('ra');
            this.classList.remove('active');
        }
         else{
             for(var i=0;i<nut.length ;i++){
                 nut[i].classList.remove('active');
             }
             this.classList.add('active');
             var noidung= this.getAttribute('data-noidung');
             var hien =document.getElementById(noidung);
             for(var i=0;i<khung.length ;i++){              
                khung[i].classList.remove('ra');
            }      
            hien.classList.add('ra');
         }         
        }
    }
 });
