package it.jac.corsojava.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import it.jac.corsojava.entity.Voto;
import it.jac.corsojava.entity.Materia;
import it.jac.corsojava.entity.Utente;
import it.jac.corsojava.exception.DaoException;


public class DaoMyDiary {
	
	//private static Logger log = LogManager.getLogger(DaoCompany.class);
	
	private static DaoMyDiary instance = new DaoMyDiary();
	
	private DaoMyDiary() {

//		caricamento dei driver jdbc
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			// do nothing
		}
	}
	
	
	public static DaoMyDiary getInstance() {
		return instance;
	}
	
	
	private Connection getConnection() throws SQLException {

		//log.info("open connection");
		String jdbcUrl = "jdbc:mysql://localhost:3306/mydiary?serverTimezone=Europe/Rome";
		String username = "root";
		String password = "Matte_012";
		
		return DriverManager.getConnection(jdbcUrl, username, password);
	}
	
	///////////////////////////////CREATE UTENTE/////////////////////////
	public void createUtente(Utente entity) {

		StringBuilder sb = new StringBuilder();
		sb.append(" INSERT INTO utente");
		sb.append(" (NOME_UTENTE,PASSWORD_UTENTE)");
		sb.append(" VALUES");
		sb.append(" (?,?)");
		
		//log.debug("SQL [{}]", sb);
		//log.debug("Entity [{}]", entity);
		
		try(Connection conn = getConnection()) {
			
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			int i = 1;
			pstm.setString(i++, entity.getNomeUtente());
			pstm.setString(i++, entity.getPasswordUtente());
			
			//log.debug("Tento di eseguire inserimento dati");
			
			int result = pstm.executeUpdate();
			
			//log.debug("Modificate {} righe", result);
			
		} catch(SQLException e) {
			
			throw new DaoException("Error creating User", e);
		}
	}
	
	protected void buildQueryFindAll(StringBuilder sb)
    {
        sb.append("SELECT ID_UTENTE, NOME_UTENTE, PASSWORD_UTENTE");
        sb.append(" FROM utente");
    }

    public List<Utente> findAll()
    {
        List<Utente> resultList = new ArrayList<>();

        StringBuilder sb = new StringBuilder();

        buildQueryFindAll(sb);

        try(Connection conn = getConnection())
        {
            PreparedStatement pstm = conn.prepareStatement(sb.toString());

            ResultSet rs = pstm.executeQuery();

            while(rs.next())
            {
                Utente result = new Utente();
                result = findAllEntitiesMateria(rs);
                resultList.add(result);
            }
        }
        catch(SQLException e)
        {
            throw new DaoException("Error loading Utente", e);
        }

        return resultList;
    }

    protected Utente findAllEntitiesMateria(ResultSet rs) throws SQLException
    {
        Utente result = new Utente();
        
        result.setIdUtente(rs.getInt("ID_UTENTE"));
        result.setNomeUtente(rs.getString("NOME_UTENTE"));
        result.setPasswordUtente(rs.getString("PASSWORD_UTENTE"));
 

        return result;
    }
////////////////////////////////////////CREAZIONE MATERIA//////////////////////////////////
	public void createMateria(Materia entity) {

		StringBuilder sb = new StringBuilder();
		sb.append(" INSERT INTO materia");
		sb.append(" (NOME_MATERIA,NOME_DOCENTE ,COLORE_MATERIA,COD_UTENTE)");
		sb.append(" VALUES");
		sb.append(" (?,?,?,?)");

	//log.debug("SQL [{}]", sb);
	//log.debug("Entity [{}]", entity);

		try(Connection conn = getConnection()) {

		PreparedStatement pstm = conn.prepareStatement(sb.toString());

		int i = 1;
		pstm.setString(i++, entity.getNomeMateria());
		pstm.setString(i++, entity.getNomeDocente());
		pstm.setString(i++, entity.getColoreMateria());
		pstm.setInt(i++, entity.getCodUtente());

		//log.debug("Tento di eseguire inserimento dati");

		int result = pstm.executeUpdate();

		//log.debug("Modificate {} righe", result);

	} catch(SQLException e) {

		throw new DaoException("Error creating User", e);
	}
}

	public List<Materia> findMateriaByIdUtente(int idCompositore)
    {
        List<Materia> resultList = new ArrayList<>();

        StringBuilder sb = new StringBuilder();

        buildQueryFindAllById(sb);

        try(Connection conn = getConnection())
        {
            PreparedStatement pstm = conn.prepareStatement(sb.toString());

            int i = 1;
            pstm.setLong(i++, idCompositore);

            ResultSet rs = pstm.executeQuery();

            while(rs.next())
            {
                Materia result = new Materia();
                result = findAllEntities(rs);
                resultList.add(result);
            }
        }
        catch(SQLException e)
        {
            throw new DaoException("Error loading Foto", e);
        }

        return resultList;
    }
	protected void buildQueryFindAllById(StringBuilder sb)
    {
        sb.append("SELECT ID_MATERIA, NOME_MATERIA, NOME_DOCENTE, COLORE_MATERIA, COD_UTENTE");
        sb.append(" FROM materia");
        sb.append(" WHERE COD_UTENTE = ?");
    }
	protected Materia findAllEntities(ResultSet rs) throws SQLException
    {
        Materia result = new Materia();

        result.setIdMateria(rs.getInt("ID_MATERIA"));
        result.setNomeMateria(rs.getString("NOME_MATERIA"));
        result.setNomeDocente(rs.getString("NOME_DOCENTE"));
        result.setColoreMateria(rs.getString("COLORE_MATERIA"));
        result.setCodUtente(rs.getInt("COD_UTENTE"));
        
        return result;
    }

	////////////////////////////////////////CREATE VOTO//////////////////////////////////////
	public void createVoto(Voto entity) {
		StringBuilder sb = new StringBuilder();
		
	
			sb.append(" INSERT INTO voto");
			sb.append(" (VALORE, DESCRIZIONE_VOTO)");
			sb.append(" VALUES");
			sb.append(" (?,?)");
			
			try(Connection conn = getConnection()) {
				
				PreparedStatement pstm = conn.prepareStatement(sb.toString());
				
				int i = 1;
				pstm.setDouble(i++, entity.getValoreVoto());
				pstm.setString(i++, entity.getDescrizioneVoto());
				
				
				//pstm.setString(i++, entity.getTipo().toString());
				//pstm.setInt(i++, entity.getCodDipendente());
				
				
				//log.debug("Tento di eseguire inserimento dati");
				
				int result = pstm.executeUpdate();
				
				//log.debug("Modificate {} righe", result);
				
			} catch(SQLException e) {
				
				throw new DaoException("Error creating Voto", e);
			}
			
			
	}
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
