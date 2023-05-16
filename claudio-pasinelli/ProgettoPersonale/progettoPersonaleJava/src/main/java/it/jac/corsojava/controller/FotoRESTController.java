package it.jac.corsojava.controller;

import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import it.jac.corsojava.entity.Foto;
import it.jac.corsojava.exception.EntityNotFoundException;
import it.jac.corsojava.service.FotoService;
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

@Path("/foto")
public class FotoRESTController
{
	private static Logger log = LogManager.getLogger(FotoRESTController.class);	

	@POST
	@Path("/{idCompositore}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(@PathParam("idCompositore") int idCompositore, Foto foto)
	{
		log.info("Creo una nuova Foto");
		
		String fotoUrlFoto = foto.getUrlFoto();
		if (fotoUrlFoto == null || fotoUrlFoto.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Immagine non valorizzata")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		Boolean fotoEliminata = foto.isEliminata();
		if (fotoEliminata.equals(true))
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("La foto è stata creata quando invece dovrebbe essere eliminata")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		Foto result = FotoService.getInstance().create(idCompositore, fotoUrlFoto, fotoEliminata);
		
		log.info("Foto creata con successo");
		
		return Response.ok(result).build();
	}
	
	
	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Foto> findAll()
	{
		log.info("Ricerco l'elenco delle foto");
		
		List<Foto> list = FotoService.getInstance().findAll();
		
		return list;
	}

	@GET
	@Path("/{idFoto}")
	@Produces(MediaType.APPLICATION_JSON)
	public Foto findById(@PathParam("idFoto") long idFoto)
	{
		log.info("Ricerco Foto [id={}]", idFoto);
		
		Foto Foto = FotoService.getInstance().findById(idFoto);
		
		if (Foto == null)
		{
			throw new EntityNotFoundException("Foto not found");
		}
		return Foto;
	}	
	@GET
	@Path("/{idCompositore}/compositori")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Foto> findFotoByIdCompositore(@PathParam("idCompositore") long idCompositore)
	{
		log.info("Ricerco le foto per l'id compositore [id={}]", idCompositore);
		
		List<Foto> resultList = FotoService.getInstance().findFotoByIdCompositore(idCompositore);
		
		if (resultList == null)
		{
			throw new EntityNotFoundException("Foto not found");
		}
		return resultList;
	}

	@PUT
	@Path("/{idFoto}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(@PathParam("idFoto") long idFoto, Foto foto)
	{
		log.info("Modifico la Foto [id={}]", idFoto);
		
		FotoService.getInstance().update(idFoto, foto.getUrlFoto(), foto.isEliminata());
		
		return Response.ok().build();
	}

	@DELETE
	@Path("/{idFoto}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("idFoto") long idFoto)
	{
		log.info("Elimino la Foto [id={}]", idFoto);
		
		FotoService.getInstance().delete(idFoto);
		
		return Response.ok().build();
	}
}
