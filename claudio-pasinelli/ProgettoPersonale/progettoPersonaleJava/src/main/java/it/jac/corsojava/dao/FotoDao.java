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
import it.jac.corsojava.entity.Foto;
import it.jac.corsojava.exception.DaoException;

public class FotoDao extends Dao<Foto>
{
	private static Logger log = LogManager.getLogger(FotoDao.class);
	
	private static FotoDao instance = new FotoDao();
	
	public static FotoDao getInstance()
	{
		return instance;
	}
	
	@Override
	protected void buildQueryFindById(StringBuilder sb)
	{
		sb.append("SELECT id_foto, id_compositore, urlFoto, eliminata, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM foto");
		sb.append(" WHERE id_foto = ?");
	}
	
	@Override
	protected void buildQueryFindAll(StringBuilder sb)
	{
		sb.append("SELECT id_foto, id_compositore, urlFoto, eliminata, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM foto");
	}
	
	@Override
	protected void buildQueryCreateEntity(StringBuilder sb)
	{
		sb.append(" INSERT INTO foto");
		sb.append(" (id_compositore, urlFoto, eliminata, ");
		sb.append(" utente_ins, utente_mod, data_ins)");
		sb.append(" VALUES");
		sb.append(" (?, ?, ?, ?, ?, ?)");
	}
	
	@Override
	protected void buildQueryUpdateEntity(StringBuilder sb)
	{
		sb.append(" update foto");
		sb.append(" SET ");
		sb.append(" urlFoto = ?,");
		sb.append(" eliminata = ?");
		sb.append(" where id_foto = ?");
	}
	
	@Override
	protected void buildQueryDeleteEntity(StringBuilder sb)
	{
		sb.append(" delete FROM foto");
		sb.append(" where id_foto = ?");
	}
	
	protected void buildQueryFindAllById(StringBuilder sb)
	{
		sb.append("SELECT id_foto, id_compositore, urlFoto, eliminata, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM foto");
		sb.append(" WHERE id_compositore = ?");
	}
	
	@Override
	protected Foto findEntityById(ResultSet rs) throws SQLException
	{
		Foto result = new Foto();	
		
		log.debug("Selezionate {} righe", rs);
		
		result.setIdFoto(rs.getLong("id_foto"));
		result.setIdCompositore(rs.getLong("id_compositore"));
		result.setUrlFoto(rs.getString("urlFoto"));
		result.setEliminata(rs.getBoolean("eliminata"));
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
	public Foto findById(long id)
	{
		Foto Foto = null;
		
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
				Foto = findEntityById(rs);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading Foto", e);
		}
		
		return Foto;
	}
	
	public List<Foto> findAll()
	{
		List<Foto> resultList = new ArrayList<>();
		
		StringBuilder sb = new StringBuilder();
		
		buildQueryFindAll(sb);
		
		try(Connection conn = getConnection())
		{
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			ResultSet rs = pstm.executeQuery();
			
			while(rs.next())
			{
				Foto result = new Foto();
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
	
	@Override
	protected Foto findAllEntities(ResultSet rs) throws SQLException
	{
		Foto result = new Foto();
				
		log.debug("Selezionate {} righe", rs);		
		
		result.setIdFoto(rs.getLong("id_foto"));
		result.setIdCompositore(rs.getLong("id_compositore"));
		result.setUrlFoto(rs.getString("urlFoto"));
		result.setEliminata(rs.getBoolean("eliminata"));
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
	public void create(Foto entity)
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
			throw new DaoException("Error creating Foto", e);
		}
	}
	
	@Override
	public void createEntity(Foto foto, PreparedStatement pstm) throws SQLException
	{
		int i = 1;
		
		pstm.setLong(i++, foto.getIdCompositore());
		pstm.setString(i++, foto.getUrlFoto());
		pstm.setBoolean(i++, foto.isEliminata());
		pstm.setString(i++, foto.getUtenteIns());
		pstm.setString(i++, foto.getUtenteMod());
		pstm.setTimestamp(i++, Timestamp.valueOf(foto.getDataIns()));
		
		log.debug("Tento di eseguire inserimento dati");
	}
	
	@Override
	public void update (long id, Foto entity)
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
			throw new DaoException("Error updating Foto", e);
		}
	}
	
	@Override
	protected void updateEntity(long id, Foto foto, PreparedStatement pstm) throws SQLException
	{
		int i = 1;
		
		pstm.setString(i++, foto.getUrlFoto());
		pstm.setBoolean(i++, foto.isEliminata());
		
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
			throw new DaoException("Error deleting Foto", e);
		}
	}
	
	@Override
	public void delete(Foto entity)
	{
		delete(entity.getIdFoto());
	}
	
	public List<Foto> findFotoByIdCompositore(long idCompositore)
	{
		List<Foto> resultList = new ArrayList<>();
		
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
				Foto result = new Foto();
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
}
