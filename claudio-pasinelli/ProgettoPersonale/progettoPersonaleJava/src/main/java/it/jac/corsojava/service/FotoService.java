package it.jac.corsojava.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import it.jac.corsojava.dao.FotoDao;
import it.jac.corsojava.entity.Compositore;
import it.jac.corsojava.entity.Foto;
import it.jac.corsojava.exception.EntityNotFoundException;

public class FotoService
{
	private static Logger log = LogManager.getLogger(FotoService.class);

	private static FotoService instance = new FotoService();

	private FotoDao dao = FotoDao.getInstance();

	private FotoService()
	{
	}

	public static FotoService getInstance()
	{
		return instance;
	}

	public Foto findById(long idFoto)
	{
		log.debug("Ricerca Foto [id={}]", idFoto);
		
		Foto result = this.dao.findById(idFoto);
		
		log.debug("Restituisco {}", result);
		
		return result;
	}
	
	public Foto create(long idCompositore, String urlFoto, Boolean eliminata)
	{
		CompositoreService compositoreDao = CompositoreService.getInstance();
		
		Compositore compositore = compositoreDao.findById(idCompositore);
		
		if(compositore == null)
		{
			throw new EntityNotFoundException("Unable to find compositore [" + compositore + "]");
		}
		
		Objects.requireNonNull(urlFoto);
		Objects.requireNonNull(eliminata);
		
		Foto entity = new Foto();
		
		entity.setIdCompositore(idCompositore);
		entity.setUrlFoto(urlFoto);
		entity.setEliminata(eliminata);
		entity.setUtenteIns("admin");
		entity.setDataIns(LocalDateTime.now());
		
		this.dao.create(entity);

		log.info("Nuova Foto [id={}]", entity.getIdFoto());
		
		return entity;
	}

	public Foto update(long idFoto, String urlFoto, Boolean eliminata)
	{
		log.debug("Modifica Foto");
		log.trace("urlFoto [{}], eliminata [{}]",
				urlFoto, eliminata);
		
		Foto entity = this.dao.findById(idFoto);
		
		if (entity == null)
		{
			throw new EntityNotFoundException("Unable to find Foto [" + idFoto + "]");
		}
		
		entity.setUrlFoto(urlFoto);
		entity.setEliminata(eliminata);
		entity.setUtenteIns("admin");
		entity.setDataIns(LocalDateTime.now());

		this.dao.update(idFoto, entity);
		
		log.info("Foto modificata [id={}]", idFoto);
		
		return entity;
	}
	
	public void delete(long idFoto)
	{
		log.debug("Cancellazione Foto");
		log.trace("id [{}]", idFoto);

		Foto entity = this.dao.findById(idFoto);
		
		if (entity == null)
		{
			throw new EntityNotFoundException("Unable to find Foto [" + idFoto + "]");
		}

		this.dao.delete(idFoto);
		
		log.info("Foto eliminata [id={}]", idFoto);
	}

	public List<Foto> findAll()
	{
		List<Foto> result = new ArrayList<>();
		
		log.debug("Estrazione lista completa delle Foto");
		
		result.addAll(this.dao.findAll());
		
		log.debug("Estratti {} elementi", result.size());
		
		return result;
	}
	
	public List<Foto> findFotoByIdCompositore(long idCompositore)
	{
		log.debug("Ricerca Foto tramite id compositore [id={}]", idCompositore);
		
		List<Foto> resultList = this.dao.findFotoByIdCompositore(idCompositore);
		
		log.debug("Restituisco {}", resultList);
		
		return resultList;
	}
}
