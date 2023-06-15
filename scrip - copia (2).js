function SpiralPrint(arr){

    let nros2=arr[0].length 
    let numeros=3
    let valor=[]
    let buleano=false;
    let letras=0;
    let letras2=nros2-1;
    let letras3=nros2-1;
    let letras4=1;
    for(let x=0;x<=numeros;x++){
        for(let y=0;y<=nros2;y++){
           
        
            if(x==0){
       valor[y]=arr[x][y];

            }
            if(x==1){
                
                valor[nros2]=arr[x][nros2-1];
                if(buleano==false){
                valor[nros2+letras]=arr[x+1][nros2-1];
                buleano=true;
                }
                valor[nros2+letras+1]=arr[x+1][letras2];
                if(letras<nros2){
                    letras++
                    letras2--
                }
            
                     }
                     if(x==2){
                
                        valor[nros2*2+letras4]=arr[x-1][letras3-1];
                   
                        if(letras4<nros2){
                            letras4++
                            letras3--
                        }
                             }
            
           
                       
                             }
    
        
    }
    return valor;
    }
    console.log(SpiralPrint ([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));