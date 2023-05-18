package it.jac.corsojava.entity;
import java.time.LocalDateTime;
import java.util.Objects;

public class Foto
{
	private long idFoto;
	private long idCompositore;
	private String urlFoto;
	private boolean eliminata;
	
	private String utenteIns;
	private String utenteMod;
	private LocalDateTime dataIns;
	private LocalDateTime dataMod;
	
	public long getIdFoto() {
		return idFoto;
	}

	public long getIdCompositore() {
		return idCompositore;
	}

	public String getUrlFoto() {
		return urlFoto;
	}

	public boolean isEliminata() {
		return eliminata;
	}

	public String getUtenteIns() {
		return utenteIns;
	}

	public String getUtenteMod() {
		return utenteMod;
	}

	public LocalDateTime getDataIns() {
		return dataIns;
	}

	public LocalDateTime getDataMod() {
		return dataMod;
	}

	public void setIdFoto(long idFoto) {
		this.idFoto = idFoto;
	}

	public void setIdCompositore(long idCompositore) {
		this.idCompositore = idCompositore;
	}

	public void setUrlFoto(String urlFoto) {
		this.urlFoto = urlFoto;
	}

	public void setEliminata(boolean eliminata) {
		this.eliminata = eliminata;
	}

	public void setUtenteIns(String utenteIns) {
		this.utenteIns = utenteIns;
	}

	public void setUtenteMod(String utenteMod) {
		this.utenteMod = utenteMod;
	}

	public void setDataIns(LocalDateTime dataIns) {
		this.dataIns = dataIns;
	}

	public void setDataMod(LocalDateTime dataMod) {
		this.dataMod = dataMod;
	}

	@Override
	public boolean equals(Object obj)
	{
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Foto other = (Foto) obj;
		return Objects.equals(dataIns, other.dataIns)
				&& Objects.equals(dataMod, other.dataMod)
				&& idFoto == other.idFoto
				&& idCompositore == other.idCompositore
				&& Objects.equals(urlFoto, other.urlFoto)
				&& Objects.equals(eliminata, other.eliminata)
				&& Objects.equals(utenteIns, other.utenteIns)
				&& Objects.equals(utenteMod, other.utenteMod);
	}

	@Override
	public String toString() {
		return "Foto [idFoto=" + idFoto + ", idCompositore=" + idCompositore + ", urlFoto=" + urlFoto + ", eliminata="
				+ eliminata + ", utenteIns=" + utenteIns + ", utenteMod=" + utenteMod + ", dataIns=" + dataIns
				+ ", dataMod=" + dataMod + "]";
	}
}
