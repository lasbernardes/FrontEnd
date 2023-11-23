package semana3ex4;
import java.util.Scanner;

public class ParImpar {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.printf("Digite um numero inteiro: ");
	    Scanner scan = new Scanner(System.in); 
	    int num = scan.nextInt();
	    System.out.printf("%d\n",num);
	    if(MethParImpar(num)) {
	    	System.out.printf("Par");
	    }else {
	    	System.out.printf("Impar");
	    }
	    scan.close();
	}
	
	static boolean MethParImpar(int nro) {
		if(nro%2==0) {
			return true;
		}else {
			return false;
		}
	}

}
