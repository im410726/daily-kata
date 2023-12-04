function solution(s) {

    let counter = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] <= s[i-1]) {
            counter++
            if (counter > 1) {
                return false;
            }

            if (s[i-2] !== undefined && s[i-2] >= s[i]) {
                s[i] = s[i-1]
            }
        }

    }

    return true;
}
