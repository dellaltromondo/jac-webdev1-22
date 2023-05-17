package it.jac.corsojava.service;

import java.time.ZonedDateTime;

import it.jac.corsojava.dao.DaoCompany;
import it.jac.corsojava.entity.Employee;
import it.jac.corsojava.exception.EntityNotFoundException;


public class ServiceCompany {
	
	private static ServiceCompany instance = new ServiceCompany();
	
	private DaoCompany dao = DaoCompany.getInstance();
	
	
	public static ServiceCompany getInstance() {

		return instance;
	}
	
	
	public Employee findById(int idUtente) {
		
		//log.debug("Ricerca User [id={}]", idUtente);
		
		Employee result = this.dao.findById(idUtente);
		
		//log.debug("Restituisco {}", result);
		
		return result;
		
	}

	
	public Employee create(String nome, String cognome, int codBU) {

		//log.debug("Creazione nuovo User");
		//log.trace("username [{}], nome [{}], cognome [{}], password [{}]",
			//username, nome, cognome, password);
		
//		verifico che i campi obbligatori siano stati valorizzati
//		mi limito a lanciare eccezione se questi non sono validi
		
		
		Employee entity = new Employee();
		entity.setNome(nome);
		entity.setCognome(cognome);
		entity.setCodBU(codBU);

		this.dao.create(entity);

		//log.info("Nuovo User [id={}]", entity.getIdUtente());
		
		return entity;
	}
	
	
	public Employee update(int idUtente, String nome, String cognome, int codBU) {

		/*log.debug("Modifica User");
		log.trace("id [{}], nome [{}], cognome [{}",
			idUtente, nome, cognome);*/
		
		Employee entity = this.dao.findById(idUtente);
		if (entity == null) {
			throw new EntityNotFoundException("Unable to find utente [" + idUtente + "]");
		}

		entity.setNome(nome);
		entity.setCognome(cognome);
		entity.setCodBU(codBU);

		this.dao.update(idUtente, entity);
		
		//log.info("User modificato [id={}]", idUtente);
		
		return entity;
	}
	
	
}
