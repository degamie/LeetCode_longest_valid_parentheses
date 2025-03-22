var longestValidParentheses = function(s) {
  //T(C(N))==O(N) and S(C(N))==O(1) as it requires constant Space iteratively
    let open = 0, close = 0, maxLen = 0;//initializing Variables

    for(let c of s) {//Iterating through String
        if(c === '(') open++;//Incr Open Paranthesis
        else close++;//Incr Close Paranthesis
        if(open === close) maxLen = Math.max(maxLen, close*2);//Calculating the MaxLength
        else if(close > open) open = close = 0;//Assigin the Same Open and Close Paranthesis
    }

    open = close = 0;/// ReAssigin the Same Open and Close Paranthesis
    
    for(let i = s.length-1; i >= 0; i--) {//Iterating through String's Length
        if(s[i] === ')') close++;//Incrementing Close Paranthesis
        else open++;//Incr Open Paranthesis
        if(open === close) maxLen = Math.max(maxLen, open*2);//Calculating the MaxLength
        else if(open > close) open = close = 0;//Assigin Both Paranthesis to Greater Open Paranthesis
    }
    return maxLen;//Printing Max Length
};
