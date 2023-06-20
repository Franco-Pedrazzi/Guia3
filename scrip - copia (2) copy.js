function SpiralPrint(arr){

   
    let numeros=arr.length
    let valor=[[],[],[]]
    let buleano=false;
    let buleano2=false;
    let buleano3=false;
    let total=0
    let letras=0;
    let p=0
    let letrasex=0
    let veces
    let veces2
    let letras2=0;
    let letras3=1;
    let letras4=100;
    for(let x=0;x<=numeros;x++){
        if(numeros%3==0){
      veces=numeros/3
        }else{
            console.log("error(fijence en el numero de valores en el areglo,deve ser multiplo de 3)")
        }
 
        for(let y=0;y<veces;y++){
           
   
        if(x==0){
        valor[0][letras]=arr[letras]
        letras++
        console.log(valor)
        }
   if (letras>=veces && letras2<numeros){
    if(buleano==false){
    letras2=numeros-veces+1
        buleano=true;
      
        valor[1][veces-1]=arr[letras]
    }
  
    valor[1][letrasex]=arr[letras2]
    letrasex++
    letras++
    letras2++
    console.log(veces-letrasex)
   }
   if (letras4>veces && letras2==numeros){
    if(buleano3==false){
        letrasex=0
        letras4=numeros-veces
         
            buleano3=true;
           
        }
       console.log(200)
    valor[2][letrasex]=arr[letras4]
    letrasex++
    letras4--

}
  

                       
                             }
                         
                           
                             
                      

                             }
    
        
    
    return valor;
    }
    console.log(SpiralPrint ([1,2,3,4,8,12,11,10,9,5,6,7]));