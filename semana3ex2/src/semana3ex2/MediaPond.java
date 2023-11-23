package semana3ex2;

public class MediaPond {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		float a,b,c,media;
		int p1,p2,p3;
		a=7;
		b=8;
		c=9;
		p1=2;
		p2=3;
		p3=5;
		media=mediaPonderada(a,b,c,p1,p2,p3);
		System.out.printf("%f\n", media);
	}
	static float mediaPonderada(float a,float b,float c,int p1, int p2, int p3) {
		int tot=p1+p2+p3;
		return (a*p1+b*p2+c*p3)/tot;
	}

}
