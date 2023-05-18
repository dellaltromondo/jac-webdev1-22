package it.armando.console;

public class Main1 {
    
	public static void main(String[] args) throws InterruptedException {

//		dichiaro un nuovo distributore
		Distributore d = new Distributore();
		d.setName("#00001");
		d.setColore(ConsolePrinter.GREEN);
		printStato(d);
		
//		eseguo delle operazioni sul distributore
		d.prelevaAcquaNat();
		d.prelevaAcquaNat();
		d.prelevaMerendina();
		d.prelevaThe();
		d.prelevaThe();
		d.prelevaThe();
		printStato(d);
		
		
		Distributore d2 = new Distributore();
		d2.setName("#00002");
		d2.setColore(ConsolePrinter.BLUE);
		printStato(d2);
		
		d2.prelevaAcquaNat();
		d2.prelevaAcquaNat();
		d2.prelevaAcquaNat();
		d2.prelevaAcquaNat();
		d2.prelevaMerendina();
		d2.prelevaMerendina();
		d2.prelevaMerendina();
		d2.prelevaThe();
		printStato(d2);
		
	}

	private static void printStato(Distributore d) {

		ConsolePrinter.printlnColored(d.getColore(), 
				String.format(
						"%25s | %20s | %20s | %15s", 
						"#", 
						"N. ACQUA NAT.", 
						"N. MERENDINE", 
						"N. THE"));
		String name = d.getName();
		int numAcquaNat = d.getNumAcquaNat();
		int numMerendina = d.getNumMerendina();
		int numThe = d.getNumThe();
		ConsolePrinter.printlnColored(d.getColore(), String.format("%25s | %20s | %20s | %15s", name, numAcquaNat, numMerendina, numThe));
	}
}
