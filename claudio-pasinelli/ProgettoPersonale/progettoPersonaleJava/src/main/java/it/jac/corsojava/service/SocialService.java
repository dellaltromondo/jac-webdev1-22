package it.jac.corsojava.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import it.jac.corsojava.dao.SocialDao;
import it.jac.corsojava.entity.Compositore;
import it.jac.corsojava.entity.Social;
import it.jac.corsojava.exception.EntityNotFoundException;

public class SocialService
{
	private static Logger log = LogManager.getLogger(SocialService.class);

	private static SocialService instance = new SocialService();

	private SocialDao dao = SocialDao.getInstance();

	private SocialService()
	{
	}

	public static SocialService getInstance()
	{
		return instance;
	}

	public Social findById(long idSocial)
	{
		log.debug("Ricerca Social [id={}]", idSocial);
		
		Social result = this.dao.findById(idSocial);
		
		log.debug("Restituisco {}", result);
		
		return result;
	}
	
	public Social create(long idCompositore, String dataTooltip, String media, String link, String img, Boolean eliminata)
	{
		CompositoreService compositoreDao = CompositoreService.getInstance();
		
		Compositore compositore = compositoreDao.findById(idCompositore);
		
		if(compositore == null)
		{
			throw new EntityNotFoundException("Unable to find compositore [" + compositore + "]");
		}
		
		Objects.requireNonNull(dataTooltip);
		Objects.requireNonNull(media);
		Objects.requireNonNull(link);
		Objects.requireNonNull(img);
		Objects.requireNonNull(eliminata);
		
		Social entity = new Social();
		
		entity.setIdCompositore(idCompositore);
		entity.setDataTooltip(dataTooltip);
		entity.setMedia(media);
		entity.setLink(link);
		entity.setImg(img);
		entity.setEliminata(eliminata);
		entity.setUtenteIns("admin");
		entity.setDataIns(LocalDateTime.now());
		
		this.dao.create(entity);

		log.info("Nuovo Social [id={}]", entity.getIdSocial());
		
		return entity;
	}

	public Social update(long idSocial, String dataTooltip, String media, String link, String img, Boolean eliminata)
	{
		log.debug("Modifica Social");
		log.trace("dataTooltip [{}], media [{}], link [{}], img [{}], eliminata [{}]",
				dataTooltip, media, link, img, eliminata);
		
		Social entity = this.dao.findById(idSocial);
		
		if (entity == null)
		{
			throw new EntityNotFoundException("Unable to find Social [" + idSocial + "]");
		}
		
		entity.setDataTooltip(dataTooltip);
		entity.setMedia(media);
		entity.setLink(link);
		entity.setImg(img);
		entity.setEliminata(eliminata);
		entity.setUtenteIns("admin");
		entity.setDataIns(LocalDateTime.now());

		this.dao.update(idSocial, entity);
		
		log.info("Social modificata [id={}]", idSocial);
		
		return entity;
	}
	
	public void delete(long idSocial)
	{
		log.debug("Cancellazione Social");
		log.trace("id [{}]", idSocial);

		Social entity = this.dao.findById(idSocial);
		
		if (entity == null)
		{
			throw new EntityNotFoundException("Unable to find Social [" + idSocial + "]");
		}

		this.dao.delete(idSocial);
		
		log.info("Social eliminato [id={}]", idSocial);
	}

	public List<Social> findAll()
	{
		List<Social> result = new ArrayList<>();
		
		log.debug("Estrazione lista completa dei Social");
		
		result.addAll(this.dao.findAll());
		
		log.debug("Estratti {} elementi", result.size());
		
		return result;
	}
	
	public List<Social> findSocialByidCompositore(long idCompositore)
	{
		log.debug("Ricerca Social tramite id compositore [id={}]", idCompositore);
		
		List<Social> resultList = this.dao.findSocialByIdCompositore(idCompositore);
		
		log.debug("Restituisco {}", resultList);
		
		return resultList;
	}
	
	public List<Social> findSocialByIdCompositore(long idCompositore)
	{
		log.debug("Ricerca Social tramite id compositore [id={}]", idCompositore);
		
		List<Social> resultList = this.dao.findSocialByIdCompositore(idCompositore);
		
		log.debug("Restituisco {}", resultList);
		
		return resultList;
	}
}
