/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    let ans = []
    for(i=1;i<=n;i++){
        let temp = ''
        if(i%3 == 0){
            temp+= 'Fizz'
        } 
        if(i%5 == 0){
            temp+= 'Buzz'
        }
                
        if(temp.length < 4){
           temp = i.toString()
        }    
        ans.push(temp)
    }
    return ans
};