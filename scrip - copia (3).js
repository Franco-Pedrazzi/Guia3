function SumElems(arr){
    
   
    let valor=0;
   let buleano=false
    let numeros=arr.length 
    
    for(let x=0;x<numeros;x++){
        let arr2=arr[x]
        let nros2=arr2.length 
        buleano=false
        for(let y=0;y<nros2;y++){
           let nros=arr[x][y]
     if(nros%6==0 && nros<=100 && nros>=0){
         valor+=nros
     }
}
}
    return valor;
    }

    console.log(SumElems([[12,3,4],[5,2,7],[60,2,120]]));