package it.jac.corsojava.entity;
import java.time.LocalDateTime;
import java.util.Objects;

public class Compositore
{
	private long idCompositore;
	private long idUser;
	private String nomeArtista;
	private String descrizione;
	private String urlPic;
	private String tema;
	
	private String utenteIns;
	private String utenteMod;
	private LocalDateTime dataIns;
	private LocalDateTime dataMod;
	
	public long getIdCompositore() {
		return idCompositore;
	}

	public long getIdUser() {
		return idUser;
	}

	public String getNomeArtista() {
		return nomeArtista;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public String getUrlPic() {
		return urlPic;
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

	public void setIdCompositore(long idCompositore) {
		this.idCompositore = idCompositore;
	}

	public void setIdUser(long idUser) {
		this.idUser = idUser;
	}

	public void setNomeArtista(String nomeArtista) {
		this.nomeArtista = nomeArtista;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public void setUrlPic(String urlPic) {
		this.urlPic = urlPic;
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

	public String getTema() {
		return tema;
	}

	public void setTema(String tema) {
		this.tema = tema;
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
		Compositore other = (Compositore) obj;
		return Objects.equals(dataIns, other.dataIns)
				&& Objects.equals(dataMod, other.dataMod)
				&& idCompositore == other.idCompositore
				&& idUser == other.idUser
				&& Objects.equals(nomeArtista, other.nomeArtista)
				&& Objects.equals(descrizione, other.descrizione)
				&& Objects.equals(urlPic, other.urlPic)
				&& Objects.equals(tema, other.tema)
				&& Objects.equals(utenteIns, other.utenteIns)
				&& Objects.equals(utenteMod, other.utenteMod);
	}

	@Override
	public String toString() {
		return "Compositore [idCompositore=" + idCompositore + ", idUser=" + idUser + ", nomeArtista=" + nomeArtista
				+ ", descrizione=" + descrizione + ", urlPic=" + urlPic + ", tema=" + tema + ", utenteIns=" + utenteIns
				+ ", utenteMod=" + utenteMod + ", dataIns=" + dataIns + ", dataMod=" + dataMod + "]";
	}
	
}
