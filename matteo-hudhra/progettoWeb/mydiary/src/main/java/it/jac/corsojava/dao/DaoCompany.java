package it.jac.corsojava.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.ZoneId;
import java.time.ZonedDateTime;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import it.jac.corsojava.entity.Employee;
import it.jac.corsojava.exception.DaoException;


public class DaoCompany {
	
	private static Logger log = LogManager.getLogger(DaoCompany.class);
	
	private static DaoCompany instance = new DaoCompany();
	
	private DaoCompany() {

//		caricamento dei driver jdbc
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			// do nothing
		}
	}
	
	
	public static DaoCompany getInstance() {
		return instance;
	}
	
	
	private Connection getConnection() throws SQLException {

		//log.info("open connection");
		String jdbcUrl = "jdbc:mysql://localhost:3306/gestionale?serverTimezone=Europe/Rome";
		String username = "root";
		String password = "Megna123";
		
		return DriverManager.getConnection(jdbcUrl, username, password);
	}
	
	
	// ---------------GESTIONE TABELLA DIPENDENTE---------------------
	
	public void create(Employee entity) {

		StringBuilder sb = new StringBuilder();
		sb.append(" INSERT INTO dipendente");
		sb.append(" (NOME_DIPENDENTE,COGNOME_DIPENDENTE,COD_BU)");
		sb.append(" VALUES");
		sb.append(" (?,?,?)");
		
		//log.debug("SQL [{}]", sb);
		//log.debug("Entity [{}]", entity);
		
		try(Connection conn = getConnection()) {
			
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			int i = 1;
			pstm.setString(i++, entity.getNome());
			pstm.setString(i++, entity.getCognome());
			pstm.setInt(i++, entity.getCodBU());
			
			
			//log.debug("Tento di eseguire inserimento dati");
			
			int result = pstm.executeUpdate();
			
			//log.debug("Modificate {} righe", result);
			
		} catch(SQLException e) {
			
			throw new DaoException("Error creating User", e);
		}
	}
	
	
	
	public Employee findById(int idUtente) {

		Employee result = null;
		
		StringBuilder sb = new StringBuilder();
		
		sb.append("SELECT ID_DIPENDENTE, NOME_DIPENDENTE, COGNOME_DIPENDENTE, COD_BU");
		sb.append(" FROM dipendente");
		sb.append(" WHERE ID_DIPENDENTE = ?");
		
		try(Connection conn = getConnection()) {
			
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			int i = 1;
			pstm.setInt(i++, idUtente);
			
			ResultSet rs = pstm.executeQuery();
			
			while(rs.next()) {
				
				result = new Employee();
				
				result.setId(rs.getInt("ID_DIPENDENTE"));
				result.setNome(rs.getString("NOME_DIPENDENTE"));
				result.setCognome(rs.getString("COGNOME_DIPENDENTE"));
				result.setCodBU(rs.getInt("COD_BU"));
			}
			
		} catch(SQLException e) {
			throw new DaoException("Error loading User", e);
		}
		
		return result;
	}
	
	
	
	public void update(int id, Employee entity) {

		StringBuilder sb = new StringBuilder();
		sb.append(" update dipendente");
		sb.append(" SET ");
		sb.append(" NOME_DIPENDENTE = ?,");
		sb.append(" COGNOME_DIPENDENTE = ?,");
		sb.append(" COD_BU = ?");
		sb.append(" where ID_DIPENDENTE = ?");
		
		/*log.debug("SQL [{}]", sb);
		log.debug("Entity [{}]", entity);*/
		
		log.info("SQL = {}", sb);
		
		try(Connection conn = getConnection()) {
			
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			int i = 1;
			pstm.setString(i++, entity.getNome());
			pstm.setString(i++, entity.getCognome());
			pstm.setInt(i++, entity.getCodBU());
			
			pstm.setInt(i, id);
			/*log.debug("Tento di eseguire modifica dati");*/
			
			int result = pstm.executeUpdate();
			
			/*log.debug("Modificate {} righe", result);*/
			
		} catch(SQLException e) {
			
			throw new DaoException("Error updating User", e);
		}
	}
	
}
