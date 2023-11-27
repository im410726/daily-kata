function solution(statues) {
    return Math.max(...statues) - Math.min(...statues) + 1 - statues.length
}
console.log(solution([2, 4, 8, 3]))