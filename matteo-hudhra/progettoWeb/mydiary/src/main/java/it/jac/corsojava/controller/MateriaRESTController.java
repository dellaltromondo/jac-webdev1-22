package it.jac.corsojava.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import it.jac.corsojava.entity.Materia;
import it.jac.corsojava.entity.Utente;
import it.jac.corsojava.exception.EntityNotFoundException;
import it.jac.corsojava.service.ServiceMyDiary;
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

@Path("/materia")
public class MateriaRESTController {

	private static Logger log = LogManager.getLogger(MateriaRESTController.class);	

	@POST
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(Materia materia) {

		log.info("Creo un nuova materia");
		log.debug(materia);

//		controllo che lo user abbia i campi valorizzati in modo corretto
		String nome = materia.getNomeMateria();
		if (nome == null || nome.trim().length() == 0) {
			
			return Response.status(Status.BAD_REQUEST)
					.entity("campo NOME_MATERIA non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		
		String docente = materia.getNomeDocente();
		if (docente == null || docente.trim().length() == 0) {
			
			return Response.status(Status.BAD_REQUEST)
					.entity("campo NOME_DOCENTE non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		String colore = materia.getColoreMateria();
		if (colore == null || colore.trim().length() == 0) {
			
			return Response.status(Status.BAD_REQUEST)
					.entity("campo COLORE_MATERIA non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		int codUtente = materia.getCodUtente();
		if (codUtente == 0) {
			
			return Response.status(Status.BAD_REQUEST)
					.entity("campo COD_UTENTE non valorizzato")
					.header("Content-Type", "text/plain")
					.build();
		}
		Materia result = new Materia();
		result.setNomeMateria(nome);
		result.setNomeDocente(docente);
		result.setColoreMateria(colore);
		result.setCodUtente(codUtente);
		DaoMyDiary.getInstance().createMateria(result);
		
		log.info("Materia creata con successo");
		
		return Response.ok(result).build();
	}
	

	@GET
    @Path("/{idUtente}/materia")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Materia> findMateriaByIdUtente(@PathParam("idUtente") int idUtente)
    {
        log.info("Ricerco le materie per l'id materia [id={}]", idUtente);

        List<Materia> resultList = ServiceMyDiary.getInstance().findMateriaByIdUtente(idUtente);

        if (resultList == null)
        {
            throw new EntityNotFoundException("Materia not found");
        }
        return resultList;
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
