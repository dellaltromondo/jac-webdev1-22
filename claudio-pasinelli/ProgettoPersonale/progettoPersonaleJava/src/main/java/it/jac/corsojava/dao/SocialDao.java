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
import it.jac.corsojava.entity.Social;
import it.jac.corsojava.exception.DaoException;

public class SocialDao extends Dao<Social>
{
	private static Logger log = LogManager.getLogger(SocialDao.class);
	
	private static SocialDao instance = new SocialDao();
	
	public static SocialDao getInstance()
	{
		return instance;
	}
	
	@Override
	protected void buildQueryFindById(StringBuilder sb)
	{
		sb.append("SELECT id_social, id_compositore, dataTooltip, media, link, img, eliminata, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM socials");
		sb.append(" WHERE id_social = ?");
	}
	
	@Override
	protected void buildQueryFindAll(StringBuilder sb)
	{
		sb.append("SELECT id_Social, id_compositore, dataTooltip, media, link, img, eliminata, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM socials");
	}
	
	@Override
	protected void buildQueryCreateEntity(StringBuilder sb)
	{
		sb.append(" INSERT INTO socials");
		sb.append(" (id_compositore, dataTooltip, media, link, img, eliminata, ");
		sb.append(" utente_ins, utente_mod, data_ins)");
		sb.append(" VALUES");
		sb.append(" (?, ?, ?, ?, ?, ?, ?, ?, ?)");
	}
	
	@Override
	protected void buildQueryUpdateEntity(StringBuilder sb)
	{
		sb.append(" update socials");
		sb.append(" SET ");
		sb.append(" dataTooltip = ?,");
		sb.append(" media = ?,");
		sb.append(" link = ?,");
		sb.append(" img = ?,");
		sb.append(" eliminata = ?");
		sb.append(" where id_social = ?");
	}
	
	@Override
	protected void buildQueryDeleteEntity(StringBuilder sb)
	{
		sb.append(" delete from socials");
		sb.append(" where id_social = ?");
	}
	
	protected void buildQueryFindAllById(StringBuilder sb)
	{
		sb.append("SELECT id_social, id_compositore, dataTooltip, media, link, img, eliminata, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM socials");
		sb.append(" WHERE id_compositore = ?");
	}
	
	@Override
	protected Social findEntityById(ResultSet rs) throws SQLException
	{
		Social result = new Social();	
		
		log.debug("Selezionate {} righe", rs);
		
		result.setIdSocial(rs.getLong("id_social"));
		result.setIdCompositore(rs.getLong("id_compositore"));
		result.setDataTooltip(rs.getString("dataTooltip"));
		result.setMedia(rs.getString("media"));
		result.setLink(rs.getString("link"));
		result.setImg(rs.getString("img"));
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
	public Social findById(long id)
	{
		Social Social = null;
		
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
				Social = findEntityById(rs);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading Social", e);
		}
		
		return Social;
	}
	
	public List<Social> findAll()
	{
		List<Social> resultList = new ArrayList<>();
		
		StringBuilder sb = new StringBuilder();
		
		buildQueryFindAll(sb);
		
		try(Connection conn = getConnection())
		{
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			ResultSet rs = pstm.executeQuery();
			
			while(rs.next())
			{
				Social result = new Social();
				result = findAllEntities(rs);
				resultList.add(result);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading Social", e);
		}
		
		return resultList;
	}
	
	@Override
	protected Social findAllEntities(ResultSet rs) throws SQLException
	{
		Social result = new Social();
				
		log.debug("Selezionate {} righe", rs);
		
		result.setIdSocial(rs.getLong("id_social"));
		result.setIdCompositore(rs.getLong("id_compositore"));
		result.setDataTooltip(rs.getString("dataTooltip"));
		result.setMedia(rs.getString("media"));
		result.setLink(rs.getString("link"));
		result.setImg(rs.getString("img"));
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
	public void create(Social entity)
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
			throw new DaoException("Error creating Social", e);
		}
	}
	
	@Override
	public void createEntity(Social social, PreparedStatement pstm) throws SQLException
	{
		int i = 1;
		
		pstm.setLong(i++, social.getIdCompositore());
		pstm.setString(i++, social.getDataTooltip());
		pstm.setString(i++, social.getMedia());
		pstm.setString(i++, social.getLink());
		pstm.setString(i++, social.getImg());
		pstm.setBoolean(i++, social.isEliminata());
		pstm.setString(i++, social.getUtenteIns());
		pstm.setString(i++, social.getUtenteMod());
		pstm.setTimestamp(i++, Timestamp.valueOf(social.getDataIns()));
		
		log.debug("Tento di eseguire inserimento dati");
	}
	
	@Override
	public void update (long id, Social entity)
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
			throw new DaoException("Error updating Social", e);
		}
	}
	
	@Override
	protected void updateEntity(long id, Social social, PreparedStatement pstm) throws SQLException
	{
		int i = 1;
		
		pstm.setString(i++, social.getDataTooltip());
		pstm.setString(i++, social.getMedia());
		pstm.setString(i++, social.getLink());
		pstm.setString(i++, social.getImg());
		pstm.setBoolean(i++, social.isEliminata());
		
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
			throw new DaoException("Error deleting Social", e);
		}
	}
	
	@Override
	public void delete(Social entity)
	{
		delete(entity.getIdSocial());
	}
	
	public List<Social> findSocialByIdCompositore(long idCompositore)
	{
		List<Social> resultList = new ArrayList<>();
		
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
				Social result = new Social();
				result = findAllEntities(rs);
				resultList.add(result);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading Social", e);
		}
		
		return resultList;
	}
}
