package divisao_infinita;

public class DivisaoInfinita {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//float x,y;
		double x,y;
		x=2;
		do {
			y=x;
			x=x/2;
			System.out.printf("x: %f!\n", x);

		}while(x>0);
		System.out.printf("y: %f!", y);
		System.out.printf("Hello %s!", "World");

	}

}
