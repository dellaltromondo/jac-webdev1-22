package it.jac.corsojava.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import it.jac.corsojava.dao.CartaDao;
import it.jac.corsojava.entity.Compositore;
import it.jac.corsojava.entity.Carta;
import it.jac.corsojava.exception.EntityNotFoundException;

public class CartaService
{
	private static Logger log = LogManager.getLogger(CartaService.class);

	private static CartaService instance = new CartaService();

	private CartaDao dao = CartaDao.getInstance();

	private CartaService()
	{
	}

	public static CartaService getInstance()
	{
		return instance;
	}

	public Carta findById(long idCarta)
	{
		log.debug("Ricerca Carta [id={}]", idCarta);
		
		Carta result = this.dao.findById(idCarta);
		
		log.debug("Restituisco {}", result);
		
		return result;
	}
	
	public Carta create(long idCompositore, String titolo, Float prezzo, String mese, String img, Boolean eliminata)
	{
		CompositoreService compositoreDao = CompositoreService.getInstance();
		
		Compositore compositore = compositoreDao.findById(idCompositore);
		
		if(compositore == null)
		{
			throw new EntityNotFoundException("Unable to find compositore [" + compositore + "]");
		}
		
		Objects.requireNonNull(titolo);
		Objects.requireNonNull(prezzo);
		Objects.requireNonNull(mese);
		Objects.requireNonNull(img);
		Objects.requireNonNull(eliminata);
		
		Carta entity = new Carta();
		
		entity.setIdCompositore(idCompositore);
		entity.setTitolo(titolo);
		entity.setPrezzo(prezzo);
		entity.setMese(mese);
		entity.setImg(img);
		entity.setEliminata(eliminata);
		entity.setUtenteIns("admin");
		entity.setDataIns(LocalDateTime.now());
		
		this.dao.create(entity);

		log.info("Nuovo Carta [id={}]", entity.getIdCarta());
		
		return entity;
	}

	public Carta update(long idCarta, String titolo, Float prezzo, String mese, String img, Boolean eliminata)
	{
		log.debug("Modifica Carta");
		log.trace("titolo [{}], prezzo [{}], mese [{}], eliminata [{}]",
				titolo, prezzo, mese, eliminata);
		
		Carta entity = this.dao.findById(idCarta);
		
		if (entity == null)
		{
			throw new EntityNotFoundException("Unable to find Carta [" + idCarta + "]");
		}
		
		entity.setTitolo(titolo);
		entity.setPrezzo(prezzo);
		entity.setMese(mese);
		entity.setImg(img);
		entity.setEliminata(eliminata);
		entity.setUtenteIns("admin");
		entity.setDataIns(LocalDateTime.now());

		this.dao.update(idCarta, entity);
		
		log.info("Carta modificata [id={}]", idCarta);
		
		return entity;
	}
	
	public void delete(long idCarta)
	{
		log.debug("Cancellazione Carta");
		log.trace("id [{}]", idCarta);

		Carta entity = this.dao.findById(idCarta);
		
		if (entity == null)
		{
			throw new EntityNotFoundException("Unable to find Carta [" + idCarta + "]");
		}

		this.dao.delete(idCarta);
		
		log.info("Carta eliminata [id={}]", idCarta);
	}

	public List<Carta> findAll()
	{
		List<Carta> result = new ArrayList<>();
		
		log.debug("Estrazione lista completa dei Carta");
		
		result.addAll(this.dao.findAll());
		
		log.debug("Estratti {} elementi", result.size());
		
		return result;
	}
	
	public List<Carta> findCartaByIdCompositore(long idCompositore)
	{
		log.debug("Ricerca Carta tramite id compositore [id={}]", idCompositore);
		
		List<Carta> resultList = this.dao.findCartaByIdCompositore(idCompositore);
		
		log.debug("Restituisco {}", resultList);
		
		return resultList;
	}
}
