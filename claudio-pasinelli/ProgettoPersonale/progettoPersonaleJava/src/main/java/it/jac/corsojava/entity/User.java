package it.jac.corsojava.entity;
import java.time.LocalDateTime;
import java.util.Objects;

public class User
{
	private long idUser;
	private String email;
	private String nome;
	private String cognome;
	private String password;
	private TipoUser tipo;

	private String utenteIns;
	private String utenteMod;
	private LocalDateTime dataIns;
	private LocalDateTime dataMod;

	public long getIdUser() {
		return idUser;
	}

	public String getEmail() {
		return email;
	}

	public String getNome() {
		return nome;
	}

	public String getCognome() {
		return cognome;
	}

	public String getPassword() {
		return password;
	}

	public String getTipo() {
		return tipo.toString();
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

	public void setIdUser(long idUser) {
		this.idUser = idUser;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setTipo(TipoUser tipo) {
		this.tipo = tipo;
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
		User other = (User) obj;
		return Objects.equals(dataIns, other.dataIns)
				&& Objects.equals(dataMod, other.dataMod)
				&& idUser == other.idUser
				&& Objects.equals(email, other.email)
				&& Objects.equals(nome, other.nome)
				&& Objects.equals(cognome, other.cognome)
				&& Objects.equals(password, other.password)
				&& Objects.equals(tipo, other.tipo)
				&& Objects.equals(utenteIns, other.utenteIns)
				&& Objects.equals(utenteMod, other.utenteMod);
	}

	@Override
	public String toString() {
		return "User [idUser=" + idUser + ", email=" + email + ", nome=" + nome + ", cognome=" + cognome + ", password="
				+ password + ", tipo=" + tipo + ", utenteIns=" + utenteIns + ", utenteMod=" + utenteMod + ", dataIns="
				+ dataIns + ", dataMod=" + dataMod + "]";
	}
}
