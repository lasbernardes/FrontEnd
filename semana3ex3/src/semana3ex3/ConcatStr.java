package semana3ex3;

public class ConcatStr {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String str1="Luciano ";
		String str2="Bernardes";
		String str3;
		str3=MethConcatStr(str1,str2);
		System.out.printf("str3: %s\n", str3);
	}
	
	static String MethConcatStr(String str1, String str2) {
		String str3;
		str3 = str1.concat(str2);
		return str3;
	}

}
