function PrimeSum(arr){
    
   
    let valor=0;
   
    let numeros=arr.length 
    
    for(let x=0;x<numeros;x++){
        let arr2=arr[x]
        let nros2=arr2.length 
       
        for(let y=0;y<nros2;y++){
        
            valor=primos(arr[x][y],valor);
     
}
}
    return valor;
    }
    function primos(arr,valor){
       for(let x=2;arr%x==0 && x<=arr-1;x++){
      break;
       }

          valor=valor+arr;   
 
                           
                                 
        
            
        
          
        return valor;
        }
        
    
    console.log(PrimeSum([[2,2,3,4,11],[14,523,33,44,211],[1,2,3,4,11],[14,523,33,44,211,1]]));