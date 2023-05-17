package it.jac.corsojava.entity;

public class Materia {
	
	private int idMateria;
	private String nomeMateria;
	private String nomeDocente;
	private String coloreMateria;
	private int codUtente;
	
	public int getIdMateria() {
		return idMateria;
	}
	public void setIdMateria(int idMateria) {
		this.idMateria = idMateria;
	}
	public String getNomeMateria() {
		return nomeMateria;
	}
	public void setNomeMateria(String nomeMateria) {
		this.nomeMateria = nomeMateria;
	}
	public int getCodUtente() {
		return codUtente;
	}
	public void setCodUtente(int codUtente) {
		this.codUtente = codUtente;
	}
	public String getNomeDocente() {
		return nomeDocente;
	}
	public void setNomeDocente(String nomeDocente) {
		this.nomeDocente = nomeDocente;
	}
	public String getColoreMateria() {
		return coloreMateria;
	}
	public void setColoreMateria(String coloreMateria) {
		this.coloreMateria = coloreMateria;
	}
	@Override
	public String toString() {
		return "Materia [idMateria=" + idMateria + ", nomeMateria=" + nomeMateria + ", nomeDocente=" + nomeDocente
				+ ", coloreMateria=" + coloreMateria + ", codUtente=" + codUtente + "]";
	}
	
}
