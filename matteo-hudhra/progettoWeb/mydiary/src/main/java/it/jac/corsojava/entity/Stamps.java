package it.jac.corsojava.entity;

import java.time.LocalDate;

public class Stamps {
	
	private int idStamps; 
	private LocalDate entrata; 
	private LocalDate uscita;
	private int codDipendente;
	
	
	public int getIdStamps() {
		return idStamps;
	}
	public void setIdStamps(int idStamps) {
		this.idStamps = idStamps;
	}
	public LocalDate getEntrata() {
		return entrata;
	}
	public void setEntrata(LocalDate entrata) {
		this.entrata = entrata;
	}
	public LocalDate getUscita() {
		return uscita;
	}
	public void setUscita(LocalDate uscita) {
		this.uscita = uscita;
	}
	public int getCodDipendente() {
		return codDipendente;
	}
	public void setCodDipendente(int codDipendente) {
		this.codDipendente = codDipendente;
	}
	
	
}
