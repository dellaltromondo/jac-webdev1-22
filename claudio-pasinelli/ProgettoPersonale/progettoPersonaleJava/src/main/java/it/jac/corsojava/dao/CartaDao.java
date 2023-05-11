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
import it.jac.corsojava.entity.Carta;
import it.jac.corsojava.exception.DaoException;

public class CartaDao extends Dao<Carta>
{
	private static Logger log = LogManager.getLogger(CartaDao.class);
	
	private static CartaDao instance = new CartaDao();
	
	public static CartaDao getInstance()
	{
		return instance;
	}
	
	@Override
	protected void buildQueryFindById(StringBuilder sb)
	{
		sb.append("SELECT id_carta, id_compositore, titolo, prezzo, mese, img, eliminata, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM carte");
		sb.append(" WHERE id_carta = ?");
	}
	
	@Override
	protected void buildQueryFindAll(StringBuilder sb)
	{
		sb.append("SELECT id_carta, id_compositore, titolo, prezzo, mese, img, eliminata, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM carte");
	}
	
	@Override
	protected void buildQueryCreateEntity(StringBuilder sb)
	{
		sb.append(" INSERT INTO carte");
		sb.append(" (id_compositore, titolo, prezzo, mese, img, eliminata, ");
		sb.append(" utente_ins, utente_mod, data_ins)");
		sb.append(" VALUES");
		sb.append(" (?, ?, ?, ?, ?, ?, ?, ?, ?)");
	}
	
	@Override
	protected void buildQueryUpdateEntity(StringBuilder sb)
	{
		sb.append(" update carte");
		sb.append(" SET ");
		sb.append(" titolo = ?,");
		sb.append(" prezzo = ?,");
		sb.append(" mese = ?,");
		sb.append(" img = ?,");
		sb.append(" eliminata = ?");
		sb.append(" where id_carta = ?");
	}
	
	@Override
	protected void buildQueryDeleteEntity(StringBuilder sb)
	{
		sb.append(" delete from carte");
		sb.append(" where id_carta = ?");
	}
	
	protected void buildQueryFindAllById(StringBuilder sb)
	{
		sb.append("SELECT id_carta, id_compositore, titolo, prezzo, mese, img, eliminata, ");
		sb.append(" utente_ins, utente_mod, data_ins, data_mod");
		sb.append(" FROM carte");
		sb.append(" WHERE id_compositore = ?");
	}
	
	@Override
	protected Carta findEntityById(ResultSet rs) throws SQLException
	{
		Carta result = new Carta();	
		
		log.debug("Selezionate {} righe", rs);
		
		result.setIdCarta(rs.getLong("id_carta"));
		result.setIdCompositore(rs.getLong("id_compositore"));
		result.setTitolo(rs.getString("titolo"));
		result.setPrezzo(rs.getFloat("prezzo"));
		result.setMese(rs.getString("mese"));
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
	public Carta findById(long id)
	{
		Carta Carta = null;
		
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
				Carta = findEntityById(rs);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading Carta", e);
		}
		
		return Carta;
	}
	
	public List<Carta> findAll()
	{
		List<Carta> resultList = new ArrayList<>();
		
		StringBuilder sb = new StringBuilder();
		
		buildQueryFindAll(sb);
		
		try(Connection conn = getConnection())
		{
			PreparedStatement pstm = conn.prepareStatement(sb.toString());
			
			ResultSet rs = pstm.executeQuery();
			
			while(rs.next())
			{
				Carta result = new Carta();
				result = findAllEntities(rs);
				resultList.add(result);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading Carta", e);
		}
		
		return resultList;
	}
	
	@Override
	protected Carta findAllEntities(ResultSet rs) throws SQLException
	{
		Carta result = new Carta();
				
		log.debug("Selezionate {} righe", rs);		
		
		result.setIdCarta(rs.getLong("id_carta"));
		result.setIdCompositore(rs.getLong("id_compositore"));
		result.setTitolo(rs.getString("titolo"));
		result.setPrezzo(rs.getFloat("prezzo"));
		result.setMese(rs.getString("mese"));
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
	public void create(Carta entity)
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
			throw new DaoException("Error creating Carta", e);
		}
	}
	
	@Override
	public void createEntity(Carta carta, PreparedStatement pstm) throws SQLException
	{
		int i = 1;
		
		pstm.setLong(i++, carta.getIdCompositore());
		pstm.setString(i++, carta.getTitolo());
		pstm.setFloat(i++, carta.getPrezzo());
		pstm.setString(i++, carta.getMese());
		pstm.setString(i++, carta.getImg());
		pstm.setBoolean(i++, carta.isEliminata());
		pstm.setString(i++, carta.getUtenteIns());
		pstm.setString(i++, carta.getUtenteMod());
		pstm.setTimestamp(i++, Timestamp.valueOf(carta.getDataIns()));
		
		log.debug("Tento di eseguire inserimento dati");
	}
	
	@Override
	public void update (long id, Carta entity)
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
			throw new DaoException("Error updating Carta", e);
		}
	}
	
	@Override
	protected void updateEntity(long id, Carta carta, PreparedStatement pstm) throws SQLException
	{
		int i = 1;
		
		pstm.setString(i++, carta.getTitolo());
		pstm.setFloat(i++, carta.getPrezzo());
		pstm.setString(i++, carta.getMese());
		pstm.setString(i++, carta.getImg());
		pstm.setBoolean(i++, carta.isEliminata());
		
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
			throw new DaoException("Error deleting Carta", e);
		}
	}
	
	@Override
	public void delete(Carta entity)
	{
		delete(entity.getIdCarta());
	}
	
	public List<Carta> findCartaByIdCompositore(long idCompositore)
	{
		List<Carta> resultList = new ArrayList<>();
		
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
				Carta result = new Carta();
				result = findAllEntities(rs);
				resultList.add(result);
			}
		}
		catch(SQLException e)
		{
			throw new DaoException("Error loading Carta", e);
		}
		
		return resultList;
	}
}
