package it.jac.corsojava.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import it.jac.corsojava.dao.CompositoreDao;
import it.jac.corsojava.entity.Compositore;
import it.jac.corsojava.entity.User;
import it.jac.corsojava.exception.EntityNotFoundException;

public class CompositoreService
{
	private static Logger log = LogManager.getLogger(CompositoreService.class);

	private static CompositoreService instance = new CompositoreService();

	private CompositoreDao dao = CompositoreDao.getInstance();

	private CompositoreService()
	{
	}

	public static CompositoreService getInstance()
	{
		return instance;
	}

	public Compositore findById(long idCompositore)
	{
		log.debug("Ricerca compositore [id={}]", idCompositore);
		
		Compositore result = this.dao.findById(idCompositore);
		
		log.debug("Restituisco {}", result);
		
		return result;
	}
	
	public Compositore create(long idUser, String nomeArtista, String descrizione, String urlPic, String tema)
	{
		UserService userDao = UserService.getInstance();
		
		User user = userDao.findById(idUser);
		
		if(user == null)
		{
			throw new EntityNotFoundException("Unable to find User [" + user + "]");
		}
		
		Objects.requireNonNull(nomeArtista);
		Objects.requireNonNull(descrizione);
		Objects.requireNonNull(urlPic);
		Objects.requireNonNull(tema);
		
		Compositore entity = new Compositore();
		
		entity.setIdUser(idUser);
		entity.setNomeArtista(nomeArtista);
		entity.setDescrizione(descrizione);
		entity.setUrlPic(urlPic);
		entity.setTema(tema);
		entity.setUtenteIns("admin");
		entity.setDataIns(LocalDateTime.now());
		
		this.dao.create(entity);

		log.info("Nuovo compositore [id={}]", entity.getIdCompositore());
		
		return entity;
	}

	public Compositore update(long idCompositore, String nomeArtista, String descrizione, String urlPic, String tema)
	{
		log.debug("Modifica compositore");
		log.trace("nome artista [{}], descrizione [{}], url pic [{}], tema [{}]",
				nomeArtista, descrizione, urlPic, tema);
		
		Compositore entity = this.dao.findById(idCompositore);
		
		if (entity == null)
		{
			throw new EntityNotFoundException("Unable to find compositore [" + idCompositore + "]");
		}
		
		entity.setNomeArtista(nomeArtista);
		entity.setDescrizione(descrizione);
		entity.setUrlPic(urlPic);
		entity.setTema(tema);
		entity.setUtenteIns("admin");
		entity.setDataIns(LocalDateTime.now());

		this.dao.update(idCompositore, entity);
		
		log.info("Compositore modificata [id={}]", idCompositore);
		
		return entity;
	}
	
	public void delete(long idCompositore)
	{
		log.debug("Cancellazione Compositore");
		log.trace("id [{}]", idCompositore);

		Compositore entity = this.dao.findById(idCompositore);
		
		if (entity == null)
		{
			throw new EntityNotFoundException("Unable to find Compositore [" + idCompositore + "]");
		}

		this.dao.delete(idCompositore);
		
		log.info("Compositore eliminata [id={}]", idCompositore);
	}

	public List<Compositore> findAll()
	{
		List<Compositore> result = new ArrayList<>();
		
		log.debug("Estrazione lista completa degli Compositore");
		
		result.addAll(this.dao.findAll());
		
		log.debug("Estratti {} elementi", result.size());
		
		return result;
	}
	
	public List<Compositore> findCompositoreByIdUser(long idUser)
	{
		log.debug("Ricerca Compositore tramite id user [id={}]", idUser);
		
		List<Compositore> resultList = this.dao.findCompositoreByIdUser(idUser);
		
		log.debug("Restituisco {}", resultList);
		
		return resultList;
	}
}
