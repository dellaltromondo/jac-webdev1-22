package it.jac.corsojava.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import it.jac.corsojava.entity.TipoUser;
import it.jac.corsojava.entity.User;
import it.jac.corsojava.exception.DaoException;

public class UserDao extends Dao<User>
{
	private static Logger log = LogManager.getLogger(UserDao.class);
	
	private static UserDao instance = new UserDao();
	
	public static UserDao getInstance()
	{
		return instance;
	}
	
	@Override
	protected void buildQueryFindById(StringBuilder sb)
	{
		sb.append("SELECT id_user, email, nome, cognome, password, tipo, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM users");
		sb.append(" WHERE id_user = ?");
	}
	
	@Override
	protected void buildQueryFindAll(StringBuilder sb)
	{
		sb.append("SELECT id_user, email, nome, cognome, password, tipo, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM users");
	}
	
	@Override
	protected void buildQueryCreateEntity(StringBuilder sb)
	{
		sb.append(" INSERT INTO users");
		sb.append(" (email, nome, cognome, password, tipo, ");
		sb.append(" utente_ins, utente_mod, data_ins)");
		sb.append(" VALUES");
		sb.append(" (?, ?, ?, ?, ?, ?, ?, ?)");
	}
	
	@Override
	protected void buildQueryUpdateEntity(StringBuilder sb)
	{
		sb.append(" update users");
		sb.append(" SET ");
		sb.append(" email = ?,");
		sb.append(" nome = ?,");
		sb.append(" cognome = ?,");
		sb.append(" password = ?,");
		sb.append(" tipo = ?");
		sb.append(" where id_user = ?");
	}
	
	@Override
	protected void buildQueryDeleteEntity(StringBuilder sb)
	{
		sb.append(" delete from users");
		sb.append(" where id_user = ?");
	}
	
	protected void buildQueryFindAllById(StringBuilder sb)
	{
		sb.append("SELECT id_user, email, nome, cognome, password, tipo, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM users");
		sb.append(" WHERE id_user = ?");
	}
	
	@Override
	protected User findEntityById(ResultSet rs) throws SQLException
	{
		User result = new User();	
		
		log.debug("Selezionate {} righe", rs);
		
		result.setIdUser(rs.getLong("id_user"));
		result.setEmail(rs.getString("email"));
		result.setNome(rs.getString("nome"));
		result.setCognome(rs.getString("cognome"));
		result.setPassword(rs.getString("password"));
		
		TipoUser tipoT = null;
		String tipo = rs.getString("tipo");
		
		if(tipo.equalsIgnoreCase("COMPOSITORE") || tipo.equalsIgnoreCase("compositore"))
		{
			tipoT = TipoUser.COMPOSITORE;
			result.setTipo(tipoT);
		}
		
		else if(tipo.equalsIgnoreCase("NON_COMPOSITORE") || tipo.equalsIgnoreCase("NON COMPOSITORE") || tipo.equalsIgnoreCase("non_compositore") || tipo.equalsIgnoreCase("non compositore"))
		{
			tipoT = TipoUser.NON_COMPOSITORE;
			result.setTipo(tipoT);
		}
		
		result.setUtenteIns(rs.getString("utente_ins"));
		result.setUtenteMod(rs.getString("utente_mod"));
		result.setDataIns(rs.getTimestamp("data_ins").toLocalDateTime());
		Timestamp dataMod = rs.getTimestamp("data_mod");
		if (dataMod != null) {
			result.setDataMod(dataMod.toLocalDateTime());
		}
		
		return result;
	}
	
	@Override
	public User findById(long id)
	{
		User user = null;
		
		StringBuilder sb = new StringBuilder();
		
		buildQueryFindById(sb);
		
		try(Connection conn = getConnection())
		{
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			int i = 1;
			pstm.setLong(i++, id);
			
			ResultSet rs = pstm.executeQuery();
			
			while(rs.next())
			{
				user = findEntityById(rs);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading User", e);
		}
		
		return user;
	}
	
	public List<User> findAll()
	{
		List<User> resultList = new ArrayList<>();
		
		StringBuilder sb = new StringBuilder();
		
		buildQueryFindAll(sb);
		
		try(Connection conn = getConnection())
		{
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			ResultSet rs = pstm.executeQuery();
			
			while(rs.next())
			{
				User result = new User();
				result = findAllEntities(rs);
				resultList.add(result);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading User", e);
		}
		
		return resultList;
	}
	
	@Override
	protected User findAllEntities(ResultSet rs) throws SQLException
	{
		User result = new User();
				
		log.debug("Selezionate {} righe", rs);
		
		result.setIdUser(rs.getLong("id_user"));
		result.setEmail(rs.getString("email"));
		result.setNome(rs.getString("nome"));
		result.setCognome(rs.getString("cognome"));
		result.setPassword(rs.getString("password"));
		
		TipoUser tipoT = null;
		String tipo = rs.getString("tipo");
		
		if(tipo.equalsIgnoreCase("COMPOSITORE") || tipo.equalsIgnoreCase("compositore"))
		{
			tipoT = TipoUser.COMPOSITORE;
			result.setTipo(tipoT);
		}
		
		else if(tipo.equalsIgnoreCase("NON_COMPOSITORE") || tipo.equalsIgnoreCase("NON COMPOSITORE") || tipo.equalsIgnoreCase("non_compositore") || tipo.equalsIgnoreCase("non compositore"))
		{
			tipoT = TipoUser.NON_COMPOSITORE;
			result.setTipo(tipoT);
		}
		
		result.setUtenteIns(rs.getString("utente_ins"));
		result.setUtenteMod(rs.getString("utente_mod"));
		result.setDataIns(rs.getTimestamp("data_ins").toLocalDateTime());
		Timestamp dataMod = rs.getTimestamp("data_mod");
		
		if (dataMod != null) {
			result.setDataMod(dataMod.toLocalDateTime());
		}
		
		return result;
	}
	
	@Override
	public void create(User entity)
	{
		StringBuilder sb = new StringBuilder();
		
		buildQueryCreateEntity(sb);
		
		log.debug("SQL [{}]", sb);
		log.debug("Entity [{}]", entity);
		
		try(Connection conn = getConnection())
		{
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			createEntity(entity,pstm);
			
			int result = pstm.executeUpdate();
			
			log.debug("Create {} righe", result);
			
		}
		catch(SQLException e)
		{
			throw new DaoException("Error creating User", e);
		}
	}
	
	@Override
	public void createEntity(User user, PreparedStatement pstm) throws SQLException
	{
		int i = 1;
		
		pstm.setString(i++, user.getEmail());
		pstm.setString(i++, user.getNome());
		pstm.setString(i++, user.getCognome());
		pstm.setString(i++, user.getPassword());
		pstm.setString(i++, user.getTipo());
		pstm.setString(i++, user.getUtenteIns());
		pstm.setString(i++, user.getUtenteMod());
		pstm.setTimestamp(i++, Timestamp.valueOf(user.getDataIns()));
		
		log.debug("Tento di eseguire inserimento dati");
	}
	
	@Override
	public void update (long id, User entity)
	{
		StringBuilder sb = new StringBuilder();
		
		buildQueryUpdateEntity(sb);
		
		log.debug("SQL [{}]", sb);
		log.debug("Entity [{}]", entity);
		
		try(Connection conn = getConnection())
		{
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			updateEntity(id,entity,pstm);
			
			log.debug("Tento di eseguire modifica dati");
			
			int result = pstm.executeUpdate();
			
			log.debug("Modificate {} righe", result);
			
		}
		catch(SQLException e)
		{
			throw new DaoException("Error updating User", e);
		}
	}
	
	@Override
	protected void updateEntity(long id, User user, PreparedStatement pstm) throws SQLException
	{
		int i = 1;
		
		pstm.setString(i++, user.getEmail());
		pstm.setString(i++, user.getNome());
		pstm.setString(i++, user.getCognome());
		pstm.setString(i++, user.getPassword());
		pstm.setString(i++, user.getTipo());
		
		pstm.setLong(i, id);
	}

	@Override
	public void delete (long id)
	{
		StringBuilder sb = new StringBuilder();
		
		buildQueryDeleteEntity(sb);
		
		log.debug("SQL [{}]", sb);
		log.debug("Id [{}]", id);
		
		try(Connection conn = getConnection())
		{
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			int i = 1;
			pstm.setLong(i, id);
			log.debug("Tento di eseguire modifica dati");
			
			int result = pstm.executeUpdate();
			
			log.debug("Modificate {} righe", result);
			
		}
		catch(SQLException e)
		{
			throw new DaoException("Error deleting User", e);
		}
	}
	
	@Override
	public void delete(User entity)
	{
		delete(entity.getIdUser());
	}
}
