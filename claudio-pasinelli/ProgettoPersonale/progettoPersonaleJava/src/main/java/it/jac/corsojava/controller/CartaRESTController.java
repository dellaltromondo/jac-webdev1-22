package it.jac.corsojava.controller;

import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import it.jac.corsojava.entity.Carta;
import it.jac.corsojava.exception.EntityNotFoundException;
import it.jac.corsojava.service.CartaService;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.Response.Status;

@Path("/carte")
public class CartaRESTController
{
	private static Logger log = LogManager.getLogger(CartaRESTController.class);	

	@POST
	@Path("/{idCompositore}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(@PathParam("idCompositore") int idCompositore, Carta carta)
	{
		log.info("Creo una nuova Carta");
		
		String cartaTitolo = carta.getTitolo();
		if (cartaTitolo == null || cartaTitolo.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Titolo non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		Float cartaPrezzo = carta.getPrezzo();
		if (cartaPrezzo.isNaN() || cartaPrezzo < 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Prezzo non valorizzato o valorizzato in maniera sbagliata")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String cartaMese = carta.getMese();
		if (cartaMese == null || cartaMese.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Mese carta non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String cartaImg = carta.getImg();
		if (cartaImg == null || cartaImg.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Immagine carta non valorizzata")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		Boolean cartaEliminata = carta.isEliminata();
		if (cartaEliminata.equals(true))
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("La carta è stata creata quando invece dovrebbe essere eliminata")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		Carta result = CartaService.getInstance().create(idCompositore, cartaTitolo, cartaPrezzo, cartaMese, cartaImg, cartaEliminata);
		
		log.info("Carta creata con successo");
		
		return Response.ok(result).build();
	}
	
	
	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Carta> findAll()
	{
		log.info("Ricerco l'elenco delle carte");
		
		List<Carta> list = CartaService.getInstance().findAll();
		
		return list;
	}

	@GET
	@Path("/{idCarta}")
	@Produces(MediaType.APPLICATION_JSON)
	public Carta findById(@PathParam("idCarta") long idCarta)
	{
		log.info("Ricerco Carta [id={}]", idCarta);
		
		Carta Carta = CartaService.getInstance().findById(idCarta);
		
		if (Carta == null)
		{
			throw new EntityNotFoundException("Carta not found");
		}
		return Carta;
	}	
	@GET
	@Path("/{idCompositore}/compositori")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Carta> findCartaByIdCompositore(@PathParam("idCompositore") long idCompositore)
	{
		log.info("Ricerco le carte per l'id compositore [id={}]", idCompositore);
		
		List<Carta> resultList = CartaService.getInstance().findCartaByIdCompositore(idCompositore);
		
		if (resultList == null)
		{
			throw new EntityNotFoundException("Carta not found");
		}
		return resultList;
	}

	@PUT
	@Path("/{idCarta}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(@PathParam("idCarta") long idCarta, Carta carta)
	{
		log.info("Modifico la Carta [id={}]", idCarta);
		
		CartaService.getInstance().update(idCarta, carta.getTitolo(), carta.getPrezzo(), carta.getMese(), carta.getImg(), carta.isEliminata());
		
		return Response.ok().build();
	}

	@DELETE
	@Path("/{idCarta}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("idCarta") long idCarta)
	{
		log.info("Elimino la Carta [id={}]", idCarta);
		
		CartaService.getInstance().delete(idCarta);
		
		return Response.ok().build();
	}
}
