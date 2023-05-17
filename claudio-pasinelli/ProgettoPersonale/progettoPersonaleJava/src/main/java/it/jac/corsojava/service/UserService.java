package it.jac.corsojava.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import it.jac.corsojava.dao.UserDao;
import it.jac.corsojava.entity.User;
import it.jac.corsojava.entity.TipoUser;
import it.jac.corsojava.exception.EntityNotFoundException;

public class UserService
{
	private static Logger log = LogManager.getLogger(UserService.class);

	private static UserService instance = new UserService();

	private UserDao dao = UserDao.getInstance();

	private UserService()
	{
	}

	public static UserService getInstance()
	{
		return instance;
	}

	public User findById(long idUser)
	{
		log.debug("Ricerca user [id={}]", idUser);
		
		User result = this.dao.findById(idUser);
		
		log.debug("Restituisco {}", result);
		
		return result;
	}
	
	public User create(String email, String nome, String cognome, String password, String tipo)
	{
		Objects.requireNonNull(email);
		Objects.requireNonNull(nome);
		Objects.requireNonNull(cognome);
		Objects.requireNonNull(password);
		Objects.requireNonNull(tipo);
		
		User entity = new User();
		
		entity.setEmail(email);
		entity.setNome(nome);
		entity.setCognome(cognome);
		entity.setPassword(password);
		
		TipoUser tipoT = null;
		
		if(tipo.equalsIgnoreCase("COMPOSITORE") || tipo.equalsIgnoreCase("compositore"))
		{
			tipoT = TipoUser.COMPOSITORE;
			entity.setTipo(tipoT);
		}
		
		else if(tipo.equalsIgnoreCase("NON_COMPOSITORE") || tipo.equalsIgnoreCase("NON COMPOSITORE") || tipo.equalsIgnoreCase("non_compositore") || tipo.equalsIgnoreCase("non compositore"))
		{
			tipoT = TipoUser.NON_COMPOSITORE;
			entity.setTipo(tipoT);
		}
		
		entity.setUtenteIns("admin");
		entity.setDataIns(LocalDateTime.now());
		
		this.dao.create(entity);
		
		//mettere altro al posto dell'id, dal momento che viene messo dal db
		log.info("Nuovo user [id={}]", entity.getIdUser());
		
		return entity;
	}

	public User update(long idUser, String email, String nome, String cognome, String password, String tipo)
	{
		log.debug("Modifica user");
		log.trace("email [{}], nome [{}], cognome [{}], password [{}], tipo [{}]",
				email, nome, cognome, password, tipo);
		
		User entity = this.dao.findById(idUser);
		
		if (entity == null)
		{
			throw new EntityNotFoundException("Unable to find user [" + idUser + "]");
		}
		
		entity.setEmail(email);
		entity.setNome(nome);
		entity.setNome(cognome);
		entity.setNome(password);
		
		TipoUser tipoT = null;
		
		if(tipo.equalsIgnoreCase("COMPOSITORE") || tipo.equalsIgnoreCase("compositore"))
		{
			tipoT = TipoUser.COMPOSITORE;
			entity.setTipo(tipoT);
		}
		
		else if(tipo.equalsIgnoreCase("NON_COMPOSITORE") || tipo.equalsIgnoreCase("NON COMPOSITORE") || tipo.equalsIgnoreCase("non_compositore") || tipo.equalsIgnoreCase("non compositore"))
		{
			tipoT = TipoUser.NON_COMPOSITORE;
			entity.setTipo(tipoT);
		}

		entity.setUtenteIns("admin");
		entity.setDataIns(LocalDateTime.now());

		this.dao.update(idUser, entity);
		
		log.info("User modificata [id={}]", idUser);
		
		return entity;
	}
	
	public void delete(long idUser)
	{
		log.debug("Cancellazione User");
		log.trace("id [{}]", idUser);

		User entity = this.dao.findById(idUser);
		
		if (entity == null)
		{
			throw new EntityNotFoundException("Unable to find User [" + idUser + "]");
		}

		this.dao.delete(idUser);
		
		log.info("User eliminata [id={}]", idUser);
	}

	public List<User> findAll()
	{
		List<User> result = new ArrayList<>();
		
		log.debug("Estrazione lista completa degli User");
		
		result.addAll(this.dao.findAll());
		
		log.debug("Estratti {} elementi", result.size());
		
		return result;
	}
}
