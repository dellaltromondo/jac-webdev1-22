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
import it.jac.corsojava.entity.Compositore;
import it.jac.corsojava.exception.DaoException;

public class CompositoreDao extends Dao<Compositore>
{
	private static Logger log = LogManager.getLogger(CompositoreDao.class);
	
	private static CompositoreDao instance = new CompositoreDao();
	
	public static CompositoreDao getInstance()
	{
		return instance;
	}
	
	@Override
	protected void buildQueryFindById(StringBuilder sb)
	{
		sb.append("SELECT id_compositore, id_user, nome_artista, descrizione, url_pic, tema, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM compositori");
		sb.append(" WHERE id_compositore = ?");
	}
	
	@Override
	protected void buildQueryFindAll(StringBuilder sb)
	{
		sb.append("SELECT id_compositore, id_user, nome_artista, descrizione, url_pic, tema, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM compositori");
	}
	
	@Override
	protected void buildQueryCreateEntity(StringBuilder sb)
	{
		sb.append(" INSERT INTO compositori");
		sb.append(" (id_user, nome_artista, descrizione, url_pic, tema, ");
		sb.append(" utente_ins, utente_mod, data_ins)");
		sb.append(" VALUES");
		sb.append(" (?, ?, ?, ?, ?, ?, ?, ?)");
	}
	
	@Override
	protected void buildQueryUpdateEntity(StringBuilder sb)
	{
		sb.append(" update compositori");
		sb.append(" SET ");
		sb.append(" nome_artista = ?,");
		sb.append(" descrizione = ?,");
		sb.append(" url_pic = ?,");
		sb.append(" tema = ?");
		sb.append(" where id_compositore = ?");
	}
	
	@Override
	protected void buildQueryDeleteEntity(StringBuilder sb)
	{
		sb.append(" delete from compositori");
		sb.append(" where id_compositore = ?");
	}
	
	protected void buildQueryFindAllById(StringBuilder sb)
	{
		sb.append("SELECT id_compositore, id_user, nome_artista, descrizione, url_pic, tema, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM compositori");
		sb.append(" WHERE id_user = ?");
	}
	
	@Override
	protected Compositore findEntityById(ResultSet rs) throws SQLException
	{
		Compositore result = new Compositore();	
		
		log.debug("Selezionate {} righe", rs);
		
		result.setIdCompositore(rs.getLong("id_compositore"));
		result.setIdUser(rs.getLong("id_user"));
		result.setNomeArtista(rs.getString("nome_artista"));
		result.setDescrizione(rs.getString("descrizione"));
		result.setUrlPic(rs.getString("url_pic"));
		result.setTema(rs.getString("tema"));
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
	public Compositore findById(long id)
	{
		Compositore compositore = null;
		
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
				compositore = findEntityById(rs);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading Compositore", e);
		}
		
		return compositore;
	}
	
	public List<Compositore> findAll()
	{
		List<Compositore> resultList = new ArrayList<>();
		
		StringBuilder sb = new StringBuilder();
		
		buildQueryFindAll(sb);
		
		try(Connection conn = getConnection())
		{
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			ResultSet rs = pstm.executeQuery();
			
			while(rs.next())
			{
				Compositore result = new Compositore();
				result = findAllEntities(rs);
				resultList.add(result);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading Compositore", e);
		}
		
		return resultList;
	}
	
	@Override
	protected Compositore findAllEntities(ResultSet rs) throws SQLException
	{
		Compositore result = new Compositore();
				
		log.debug("Selezionate {} righe", rs);
		
		result.setIdCompositore(rs.getLong("id_compositore"));
		result.setIdUser(rs.getLong("id_user"));
		result.setNomeArtista(rs.getString("nome_artista"));
		result.setDescrizione(rs.getString("descrizione"));
		result.setUrlPic(rs.getString("url_pic"));
		result.setTema(rs.getString("tema"));
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
	public void create(Compositore entity)
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
			throw new DaoException("Error creating Compositore", e);
		}
	}
	
	@Override
	public void createEntity(Compositore compositore, PreparedStatement pstm) throws SQLException
	{
		int i = 1;
		
		pstm.setLong(i++, compositore.getIdUser());
		pstm.setString(i++, compositore.getNomeArtista());
		pstm.setString(i++, compositore.getDescrizione());
		pstm.setString(i++, compositore.getUrlPic());
		pstm.setString(i++, compositore.getTema());
		pstm.setString(i++, compositore.getUtenteIns());
		pstm.setString(i++, compositore.getUtenteMod());
		pstm.setTimestamp(i++, Timestamp.valueOf(compositore.getDataIns()));
		
		log.debug("Tento di eseguire inserimento dati");
	}
	
	@Override
	public void update (long id, Compositore entity)
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
			throw new DaoException("Error updating Compositore", e);
		}
	}
	
	@Override
	protected void updateEntity(long id, Compositore compositore, PreparedStatement pstm) throws SQLException
	{
		int i = 1;
		
		pstm.setString(i++, compositore.getNomeArtista());
		pstm.setString(i++, compositore.getDescrizione());
		pstm.setString(i++, compositore.getUrlPic());
		pstm.setString(i++, compositore.getTema());
		
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
			throw new DaoException("Error deleting Compositore", e);
		}
	}
	
	@Override
	public void delete(Compositore entity)
	{
		delete(entity.getIdCompositore());
	}
	
	public List<Compositore> findCompositoreByIdUser(long idUser)
	{
		List<Compositore> resultList = new ArrayList<>();
		
		StringBuilder sb = new StringBuilder();
		
		buildQueryFindAllById(sb);
		
		try(Connection conn = getConnection())
		{
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			int i = 1;
			pstm.setLong(i++, idUser);
			
			ResultSet rs = pstm.executeQuery();
			
			while(rs.next())
			{
				Compositore result = new Compositore();
				result = findAllEntities(rs);
				resultList.add(result);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading Compositore", e);
		}
		
		return resultList;
	}
}
