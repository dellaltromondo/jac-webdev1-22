package it.jac.corsojava.controller;

import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import it.jac.corsojava.entity.Social;
import it.jac.corsojava.exception.EntityNotFoundException;
import it.jac.corsojava.service.SocialService;
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

@Path("/socials")
public class SocialRESTController
{
	private static Logger log = LogManager.getLogger(SocialRESTController.class);	

	@POST
	@Path("/{idCompositore}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(@PathParam("idCompositore") int idCompositore, Social social)
	{
		log.info("Creo un nuovo Social");
		
		String socialDataTooltip = social.getDataTooltip();
		if (socialDataTooltip == null || socialDataTooltip.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("DataTooltip non valorizzata")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String socialMedia = social.getMedia();
		if (socialMedia == null || socialMedia.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Media social non valorizzata")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String socialLink = social.getLink();
		if (socialLink == null || socialLink.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Link social non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String socialImg = social.getImg();
		if (socialImg == null || socialLink.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Immagine social non valorizzata")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		Boolean socialEliminata = social.isEliminata();
		if (socialEliminata.equals(true))
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Il social è stato creato quando invece dovrebbe essere eliminato")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		Social result = SocialService.getInstance().create(idCompositore, socialDataTooltip, socialMedia, socialLink, socialImg, socialEliminata);
		
		log.info("Social creato con successo");
		
		return Response.ok(result).build();
	}
	
	
	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Social> findAll()
	{
		log.info("Ricerco l'elenco dei social");
		
		List<Social> list = SocialService.getInstance().findAll();
		
		return list;
	}

	@GET
	@Path("/{idSocial}")
	@Produces(MediaType.APPLICATION_JSON)
	public Social findById(@PathParam("idSocial") long idSocial)
	{
		log.info("Ricerco Social [id={}]", idSocial);
		
		Social Social = SocialService.getInstance().findById(idSocial);
		
		if (Social == null)
		{
			throw new EntityNotFoundException("Social not found");
		}
		return Social;
	}	
	@GET
	@Path("/{idCompositore}/compositori")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Social> findSocialByIdCompositore(@PathParam("idCompositore") long idCompositore)
	{
		log.info("Ricerco i social per l'id compositore [id={}]", idCompositore);
		
		List<Social> resultList = SocialService.getInstance().findSocialByIdCompositore(idCompositore);
		
		if (resultList == null)
		{
			throw new EntityNotFoundException("Social not found");
		}
		return resultList;
	}

	@PUT
	@Path("/{idSocial}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(@PathParam("idSocial") long idSocial, Social social)
	{
		log.info("Modifico il Social [id={}]", idSocial);
		
		SocialService.getInstance().update(idSocial, social.getDataTooltip(), social.getMedia(), social.getLink(), social.getImg(), social.isEliminata());
		
		return Response.ok().build();
	}

	@DELETE
	@Path("/{idSocial}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("idSocial") long idSocial)
	{
		log.info("Elimino il Social [id={}]", idSocial);
		
		SocialService.getInstance().delete(idSocial);
		
		return Response.ok().build();
	}
}
