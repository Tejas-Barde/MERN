class Eg1{
  public static void main(String[] args){
    int[] arr = new int[]{1,2,3,4,5};
    System.out.println(Eg1.search(arr,6));
    System.out.println(Eg1.search(arr,4));
    System.out.println("Average - "+ Eg1.average(arr));
  }

  private static boolean search(int[] arr,int key){
    for(int a : arr){
      if(a == key) return true;
    }
    return false;
  }

  private static double average(int[] arr){
    int sum = 0;
    for(int a : arr){
      sum += a;
    }
    return (double) sum/arr.length;
  }
}