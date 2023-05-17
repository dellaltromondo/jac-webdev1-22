package it.jac.corsojava.controller;

import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import it.jac.corsojava.entity.Compositore;
import it.jac.corsojava.exception.EntityNotFoundException;
import it.jac.corsojava.service.CompositoreService;
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

@Path("/compositori")
public class CompositoreRESTController
{
	private static Logger log = LogManager.getLogger(CompositoreRESTController.class);	

	@POST
	@Path("/{idUser}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(@PathParam("idUser") int idUser, Compositore compositore)
	{
		log.info("Creo un nuovo compositore");
		
		String compositoreNomeArtista = compositore.getNomeArtista();
		if (compositoreNomeArtista == null || compositoreNomeArtista.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Nome artista non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String compositoreDescrizione = compositore.getDescrizione();
		if (compositoreDescrizione == null || compositoreDescrizione.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Descrizione compositore non valorizzata")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String compositoreUrlPic = compositore.getUrlPic();
		if (compositoreUrlPic == null || compositoreUrlPic.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("L'immagine di profilo del compositore non è valorizzata")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String compositoreTema = compositore.getTema();
		if (compositoreTema == null || compositoreTema.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Il tema del profilo del compositore non è valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		Compositore result = CompositoreService.getInstance().create(idUser, compositoreNomeArtista, compositoreDescrizione, compositoreUrlPic, compositoreTema);
		
		log.info("Compositore creato con successo");
		
		return Response.ok(result).build();
	}
	
	
	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Compositore> findAll()
	{
		log.info("Ricerco l'elenco dei compositori");
		
		List<Compositore> list = CompositoreService.getInstance().findAll();
		
		return list;
	}

	@GET
	@Path("/{idCompositore}")
	@Produces(MediaType.APPLICATION_JSON)
	public Compositore findById(@PathParam("idCompositore") long idCompositore)
	{
		log.info("Ricerco compositore [id={}]", idCompositore);
		
		Compositore compositore = CompositoreService.getInstance().findById(idCompositore);
		
		if (compositore == null)
		{
			throw new EntityNotFoundException("Compositore not found");
		}
		return compositore;
	}	
	@GET
	@Path("/{idUser}/users")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Compositore> findCompositoreByIdUser(@PathParam("idUser") long idUser)
	{
		log.info("Ricerco i compositori per l'id user [id={}]", idUser);
		
		List<Compositore> resultList = CompositoreService.getInstance().findCompositoreByIdUser(idUser);
		
		if (resultList == null)
		{
			throw new EntityNotFoundException("Compositori not found");
		}
		return resultList;
	}

	@PUT
	@Path("/{idCompositore}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(@PathParam("idCompositore") long idCompositore, Compositore compositore)
	{
		log.info("Modifico il compositore [id={}]", idCompositore);
		
		CompositoreService.getInstance().update(idCompositore, compositore.getNomeArtista(), compositore.getDescrizione(), compositore.getUrlPic(), compositore.getTema());
		
		return Response.ok().build();
	}

	@DELETE
	@Path("/{idCompositore}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("idCompositore") long idCompositore)
	{
		log.info("Elimino lo compositore [id={}]", idCompositore);
		
		CompositoreService.getInstance().delete(idCompositore);
		
		return Response.ok().build();
	}
}
