package it.armando.console;

public class Distributore {

	private String name = "Distributore standard";
	private String colore = "";
	private int numAcquaNat = 10;
	private int numMerendina = 10;
	private int numThe = 10;

	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
	
	public void setColore(String colore) {
		this.colore = colore;
	}
	
	public String getColore() {
		return colore;
	}
	
	public boolean prelevaAcquaNat() {

		this.numAcquaNat--;

		return true;
	}

	public boolean prelevaMerendina() {

		this.numMerendina--;

		return true;
	}

	public boolean prelevaThe() {

		this.numThe--;

		return true;
	}

	public void carica(int acqua, int merenda, int the) {

		this.numAcquaNat += acqua;
		this.numMerendina += merenda;
		this.numThe += the;
	}

	public int getNumAcquaNat() {
		return numAcquaNat;
	}

	public int getNumMerendina() {
		return numMerendina;
	}

	public int getNumThe() {
		return numThe;
	}

}
