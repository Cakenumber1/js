/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [[1]]
    if(numRows > 1)
        ans.push([[1],[1]])
    if(numRows > 2){
        let end = []
        for(let i = 3; i <=numRows; i++){
            let row = []
            end = ans[ans.length - 1]
            row.push([1])
            for(let j = 1; j < ans.length; j++){
                row.push([parseInt(end[j-1]) + parseInt(end[j])])
            }
            row.push([1])
            ans.push(row)
        }
    }
    return ans
};