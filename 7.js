function solution(sequence) {
    let f = 0
    for(let i = 1; i<sequence.length;i++ ){
        if(sequence[i] <= sequence[i-1]){
            f+=1 
            if(f>1){
                return false
            }
            if(sequence[i-2] >= sequence[i] && sequence[i-1] >= sequence[i+1]){
                return false
                
            } 
        }
    }
    return true
}
console.log(solution([1, 3, 2, 1]))