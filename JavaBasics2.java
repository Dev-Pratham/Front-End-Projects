import java.util.*;
public class JavaBasics2 {
    
    //This function has no return type and no input parameters
    public static void printHello(){

        System.out.println("HelloWorld!");
        return;
    }

    public static int calculateSum(int a,int b){// formal parameters or parameters

        return a+b;
    }

    public static int product(int a,int b){
        return a*b;
    }

    public static int factorial(int n){

        int fact=1;
        while(n>1){
            fact*=n;
            n--;
        }

        return fact;

    }

    public static int factorial2(int n){

        int fact=1;
        for(int i=2;i<=n;i++){
            fact*=i;
        }
        return fact;
    }

    public static int binomialCofficient(int n,int r){//parameters or formal parameter

        return factorial(n)/(factorial(n-r)*factorial(r));

    }

    //function overloading 
    //function with same name but with different parameter
    //depends on type and number of parameter but not with the
    //return type of function

    // public static int sum(int a,int b){
    //     return a+b;
    // }

    // public static float sum(float a,float b){

    //     return a+b;
    // }

    public static boolean isPrime(int n){

        if(n<2){
            return false;
        }

        boolean isPrime=true;
        int div=2;

        while(div<=Math.sqrt(n)){  //we have optimized code and reduced
                                   //its time and space complexity

            if(n%div==0){
                isPrime=false;
                break;
            }
            div++;
        }

        return isPrime;
    }

    public static boolean isPrime2(int n){

        if(n<2){
            return false;
        }

        boolean isprime=true;
        for(int div=2;div<=Math.sqrt(n);div++){

            if(n%div==0){
                isprime=false;
                break;
            }
        }

        return isprime;
    }

    public static void printPrime(int a,int b){

        int count=0;
        for(int i=a;i<=b;i++){

            if(isPrime(i)==true){
                System.out.println(i);
                count++;
            }
            
        }
        System.out.println("Total no of prime number:"+count);
    }

    public static int pow(int a,int b){

    int pow=1;

    while(b>0){
         
        pow=pow*a;
        b--;
    }

    return pow;


    }

    public static void b2d(int n){

        int pow=0;
        int sum=0;
        while(n>0){
          
            int lastdigit=n%10;
            sum=sum+(lastdigit*pow(2,pow));
            pow++;
            n/=10;

        }
        System.out.println(sum);
    }

    public static void d2b(int n){

        int pow=0;
        double dec=0;
        while(n>0){

            int mod=n%2;
            dec=dec+(mod*Math.pow(10,pow));
            pow++;
            n/=2;

        }
        
        System.out.println(dec);

    }
    public static void main(String args[]){

        // printHello(); //function call

        //to calculate sum of 2 numebers using function
        //  Scanner sc=new Scanner(System.in);
        //  System.out.print("Enter a and b:");
        //  int a=sc.nextInt();
        //  int b=sc.nextInt();
        //  sc.close();
        //  System.out.println(calculateSum(a, b));     // actual parameters or arguements

        //java always passes parameter by call by value 
        //to find product 
        // int a=10;
        // int b=5;
        // System.out.println(product(a, b));

        //factorial
        // int n=4;
        // System.out.println(factorial2(n));

        //binomial cofficient
        // int n=5;
        // int r=2;

        // int nCr=binomialCofficient(n, r);
        // System.out.println(nCr);

        // int n=2;
        // boolean res=isPrime2(n);
        // System.out.println(res);

        //prime in range
        // int a=100;
        // int b=1000;
        // printPrime(a, b);

        //binary to decimal

        // int n=111;
        // b2d(n);

        //decimal to binary
        int n=2;
        d2b(n);



       

    }
}
