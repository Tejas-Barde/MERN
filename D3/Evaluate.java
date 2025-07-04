import java.util.*;

class Evaluate{
  public static void main(String[] args){
    
  }

  private double evaluate(String exp){
    Stack<Character> op = new Stack<>();
    Stack<Integer> stack = new Stack<>();
    double result = 0;
    for(char c : exp.toCharArray()){
      if(Character.isDigit(c)){
        stack.push(c-'0');
      }
      else if(c == '('){
        op.push(c);
      }
      else if(c == ')'){
        
      }
      else{

      }
    }
    return 1;
  }
}