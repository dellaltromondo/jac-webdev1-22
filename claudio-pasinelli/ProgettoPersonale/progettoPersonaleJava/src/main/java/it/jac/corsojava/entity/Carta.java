package it.jac.corsojava.entity;
import java.time.LocalDateTime;
import java.util.Objects;

public class Carta
{
	private long idCarta;
	private long idCompositore;
	private String titolo;
	private float prezzo;
	private String mese;
	private String img;
	private boolean eliminata;
	
	private String utenteIns;
	private String utenteMod;
	private LocalDateTime dataIns;
	private LocalDateTime dataMod;

	public long getIdCarta() {
		return idCarta;
	}

	public long getIdCompositore() {
		return idCompositore;
	}

	public String getTitolo() {
		return titolo;
	}

	public float getPrezzo() {
		return prezzo;
	}

	public String getMese() {
		return mese;
	}

	public String getImg() {
		return img;
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

	public void setIdCarta(long idCarta) {
		this.idCarta = idCarta;
	}

	public void setIdCompositore(long idCompositore) {
		this.idCompositore = idCompositore;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public void setPrezzo(float prezzo) {
		this.prezzo = prezzo;
	}

	public void setMese(String mese) {
		this.mese = mese;
	}

	public void setImg(String img) {
		this.img = img;
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
		Carta other = (Carta) obj;
		return Objects.equals(dataIns, other.dataIns)
				&& Objects.equals(dataMod, other.dataMod)
				&& idCarta == other.idCarta
				&& idCompositore == other.idCompositore
				&& Objects.equals(titolo, other.titolo)
				&& prezzo == other.prezzo
				&& Objects.equals(mese, other.mese)
				&& Objects.equals(img, other.img)
				&& Objects.equals(eliminata, other.eliminata)
				&& Objects.equals(utenteIns, other.utenteIns)
				&& Objects.equals(utenteMod, other.utenteMod);
	}

	@Override
	public String toString() {
		return "Carta [idCarta=" + idCarta + ", idCompositore=" + idCompositore + ", titolo=" + titolo + ", prezzo="
				+ prezzo + ", mese=" + mese + ", img=" + img + ", eliminata=" + eliminata + ", utenteIns=" + utenteIns
				+ ", utenteMod=" + utenteMod + ", dataIns=" + dataIns + ", dataMod=" + dataMod + "]";
	}
}
