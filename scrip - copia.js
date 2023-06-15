function SumBorders(arr){
    
   
    let valor=0;
   let buleano=false
    let numeros=arr.length 
    
    for(let x=0;x<numeros;x++){
        let arr2=arr[x]
        let nros2=arr2.length 
        buleano=false
        for(let y=0;y<nros2;y++){
        if(x==0 ){
valor=valor+arr[x][y]

        }else{
            
        if(x==3){
           
            valor=valor+arr[x][y]
          
                    }else{
                        if(buleano==false){
                        
                        valor=valor+arr[x][0]
                        valor=valor+arr[x][nros2-1]
                       buleano=true
                      }
                    }

     }
     
}
}
    return valor;
    }

    console.log(SumBorders([[2,2,2],[2,2,2],[2,2,2],[2,2,2]]));