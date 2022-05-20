function swap(arr,i,j){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function shuffle(arr){
    const n = arr.length
    for(let i=0;i<n;i+=2){
        if(i>0 && arr[i-1]<arr[i]){
            swap(arr,i-1,i)
        if(i<n-1 && arr[i]>arr[i+1]){
            swap(arr,i,i+1)
        }
        }
    }
    return arr;
}
const inputArr = [1, 4, 5, 3, 11, 7];
const finalArr = shuffle(inputArr)
console.log(finalArr)