package it.jac.corsojava.controller;

import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import it.jac.corsojava.entity.User;
import it.jac.corsojava.exception.EntityNotFoundException;
import it.jac.corsojava.service.UserService;
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

@Path("/users")
public class UserRESTController
{
	private static Logger log = LogManager.getLogger(UserRESTController.class);	

	@POST
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(User user)
	{
		log.info("Creo un nuovo user");
		
		String userEmail = user.getEmail();
		if (userEmail == null || userEmail.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Email user non valorizzata")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String userNome = user.getNome();
		if (userNome == null || userNome.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Nome user non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String userCognome = user.getCognome();
		if (userCognome == null || userEmail.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Cognome user non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String userPassword = user.getPassword();
		if (userPassword == null || userPassword.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Password user non valorizzata")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String userTipo = user.getTipo();
		if (userTipo == null || userTipo.trim().length() == 0)
		{
			return Response.status(Status.BAD_REQUEST)
					.entity("Tipo user non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		User result = UserService.getInstance().create(userEmail, userNome, userCognome, userPassword, userTipo);
		
		log.info("User creato con successo");
		
		return Response.ok(result).build();
	}
	
	
	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> findAll()
	{
		log.info("Ricerco l'elenco degli Users");
		
		List<User> list = UserService.getInstance().findAll();
		
		return list;
	}

	@GET
	@Path("/{idUser}")
	@Produces(MediaType.APPLICATION_JSON)
	public User findById(@PathParam("idUser") long idUser)
	{
		log.info("Ricerco user [id={}]", idUser);
		
		User user = UserService.getInstance().findById(idUser);
		
		if (user == null)
		{
			throw new EntityNotFoundException("User not found");
		}
		return user;
	}

	@PUT
	@Path("/{idUser}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(@PathParam("idUser") long idUser, User user)
	{
		log.info("Modifico lo user [id={}]", idUser);
		
		UserService.getInstance().update(idUser, user.getEmail(), user.getNome(), user.getCognome(), user.getPassword(), user.getTipo());
		
		return Response.ok().build();
	}

	@DELETE
	@Path("/{idUser}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("idUser") long idUser)
	{
		log.info("Elimino lo user [id={}]", idUser);
		
		UserService.getInstance().delete(idUser);
		
		return Response.ok().build();
	}
}
