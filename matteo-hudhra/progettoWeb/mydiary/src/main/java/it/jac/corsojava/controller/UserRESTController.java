package it.jac.corsojava.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import it.jac.corsojava.entity.Utente;
import it.jac.corsojava.exception.EntityNotFoundException;
import it.jac.corsojava.dao.DaoMyDiary;

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
public class UserRESTController {

	private static Logger log = LogManager.getLogger(UserRESTController.class);	

	@POST
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(Utente user) {

		log.info("Creo un nuovo utente");

//		controllo che lo user abbia i campi valorizzati in modo corretto
		String nome = user.getNomeUtente();
		if (nome == null || nome.trim().length() == 0) {
			
			return Response.status(Status.BAD_REQUEST)
					.entity("campo NOME_U non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String password = user.getPasswordUtente();
		if (password == null || password.trim().length() == 0) {
			
			return Response.status(Status.BAD_REQUEST)
					.entity("campo PASSWORD_UTENTE non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		Utente result = new Utente();
		result.setNomeUtente(nome);
		result.setPasswordUtente(password);
		DaoMyDiary.getInstance().createUtente(result);
		
		log.info("Utente creato con successo");
		
		return Response.ok(result).build();
	}
	
	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Utente> findAll() {

		log.info("Ricerco l'elenco degli utenti");
		
		List<Utente> list = DaoMyDiary.getInstance().findAll();
		
		return list;
	}
/*
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Employee findById(@PathParam("id") long id) {

		log.info("Ricerco utente [id={}]", id);
		
		Employee user = DaoCompany.getInstance().findById(id);
		if (user == null) {
			
			throw new EntityNotFoundException("User not found");
		}
		return user;
	}

	/*@PUT
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(@PathParam("id") long id, Employee userData) {

		log.info("Modifico utente [id={}]", id);
		
		DaoCompany.getInstance().update(id, userData.getNome(), userData.getCognome());
		
		return Response.ok().build();
	}

	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("id") long id) {

		log.info("Elimino utente [id={}]", id);
		
		UserService.getInstance().delete(id);
		
		return Response.ok().build();
	}
*/
}
