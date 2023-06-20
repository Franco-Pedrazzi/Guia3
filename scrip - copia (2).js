function SpiralPrint(arr){

   
    let numeros=arr.length
    let valor=[]
    let buleano=false;
    let buleano2=false;
    let buleano3=false;
    let total=0
    let letras=0;
    let p=0
    let letras2=0;
    let letras3=1;
    let letras4=1;
    for(let x=0;x<=numeros;x++){
        let nros2=arr[x].length 
      
        console.log(nros2)

        if(x!=numeros && x !=0 ){
            valor[letras]=arr[x][nros2-1]
            letras++

            }
        for(let y=0;y<nros2;y++){
           
   
        if(x==0){
        valor[letras]=arr[0][letras]
        letras++
        console.log(valor)
        }
   if (letras>=arr[0].length+numeros-1 && letras2>-1){
    if(buleano==false){
    letras2=arr[numeros-1].length-2
        buleano=true;
    }
    
    valor[letras]=arr[numeros-1][letras2]
    letras++
    letras2--
    console.log(letras2+"s")
   }

 console.log(letras3+"s")
  

                       
                             }
                         
                             for(let z=0;z<=numeros;z++){

                                if (letras3>0 && letras2==-1){
                                    if(buleano2==false){
                                        letras3=numeros-2
                                            buleano2=true;
                                        }
                                      
                                    valor[letras]=arr[letras3][0]
                                    letras++
                                    letras3--
                                    
                               }
                             
                             for(let y=0;y<nros2;y++){
 if (letras3==0 && letras4<arr[1].length-1 && letras2==-1){
    if(buleano3==false){
        letras4=1
         p=1
            buleano3=true;
           
        }
       console.log(200)
    valor[letras]=arr[p][letras4]
    letras++
    letras4++

}
                             }

                             }
    
        }
    
    return valor;
    }
    console.log(SpiralPrint ([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]));