package it.jac.corsojava.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import it.jac.corsojava.exception.DaoException;

public abstract class Dao<T>
{
	private static Logger log = LogManager.getLogger(Dao.class);
	
	protected Connection getConnection() throws SQLException
	{
//		caricamento dei driver jdbc
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
		}
		catch (ClassNotFoundException e)
		{
			// do nothing
		}
		
		log.info("open connection");
		String jdbcUrl = "jdbc:mysql://localhost:3306/progetto_personale?serverTimezone=Europe/Rome";
		String username = "root";
		String password = "Eremita10@";
		
		return DriverManager.getConnection(jdbcUrl, username, password);
	}
	
	protected T findById(long id)
	{
		T result = null;
		
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
				result = findEntityById(rs);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading Entity", e);
		}
		
		return result;
	}
	
	protected List<T> findAll()
	{
		List<T> resultList = new ArrayList<>();
		
		StringBuilder sb = new StringBuilder();
		
		buildQueryFindAll(sb);
		
		try(Connection conn = getConnection())
		{
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			ResultSet rs = pstm.executeQuery();
			
			while(rs.next())
			{
				T result = null;
				result = findAllEntities(rs);
				resultList.add(result);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading Entity", e);
		}
		
		return resultList;
	}
	
	protected void create(T entity)
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
			throw new DaoException("Error creating Entity", e);
		}
	}

	protected void update (long id, T entity)
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
			throw new DaoException("Error updating Entity", e);
		}
	}
	
	protected void delete (long id)
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
	
	protected abstract void delete (T entity);
	protected abstract void updateEntity(long id, T entity, PreparedStatement pstm) throws SQLException;
	protected abstract T findEntityById(ResultSet rs) throws SQLException;
	protected abstract T findAllEntities(ResultSet rs) throws SQLException;
	protected abstract void createEntity(T entity, PreparedStatement pstm) throws SQLException;

	//metodi per creare le query
	protected abstract void buildQueryFindById(StringBuilder sb);
	protected abstract void buildQueryFindAll(StringBuilder sb);
	protected abstract void buildQueryCreateEntity(StringBuilder sb);
	protected abstract void buildQueryUpdateEntity(StringBuilder sb);
	protected abstract void buildQueryDeleteEntity(StringBuilder sb);
}