package it.jac.corsojava.service;

import java.util.ArrayList;
import java.util.List;

import it.jac.corsojava.dao.DaoMyDiary;
import it.jac.corsojava.entity.Voto;
import it.jac.corsojava.entity.Materia;
import it.jac.corsojava.entity.Utente;


public class ServiceMyDiary {
	
	private static ServiceMyDiary instance = new ServiceMyDiary();
	
	private DaoMyDiary dao = DaoMyDiary.getInstance();
	
	
	public static ServiceMyDiary getInstance() {

		return instance;
	}
	
	//-----------------------FUNZIONI UTENTE-----------------------------
	public Utente createUtente(String nome, String password) {

		//log.debug("Creazione nuovo User");
		//log.trace("username [{}], nome [{}], cognome [{}], password [{}]",
			//username, nome, cognome, password);
		
//		verifico che i campi obbligatori siano stati valorizzati
//		mi limito a lanciare eccezione se questi non sono validi
		
		
		Utente entity = new Utente();
		entity.setNomeUtente(nome);
		entity.setPasswordUtente(password);


		this.dao.createUtente(entity);

		//log.info("Nuovo User [id={}]", entity.getIdUtente());
		
		return entity;
	}
	
	
	
	//--------------------------FUNZIONI MATERIA--------------------------------------
	public Materia createMateria(String nome,String docente ,String col,int cod) {
		
		Materia materia = new Materia();
		
		materia.setNomeMateria(nome);
		materia.setNomeDocente(docente);
		materia.setColoreMateria(col);
		materia.setCodUtente(cod);
		
		this.dao.createMateria(materia);
		
		return materia;
	}
	
	public List<Materia> findMateriaByIdUtente(int idUtente)
    {
        
        List<Materia> resultList = this.dao.findMateriaByIdUtente(idUtente);

        return resultList;
    }
	
	//-----------------------------FUNZIONI VOTO---------------------------------------
	public Voto createVoto(double val, String desc, int codMateria) {
		
		Voto voto = new Voto();
		
		voto.setValoreVoto(val);
		voto.setDescrizioneVoto(desc);
		voto.setCodMateria(codMateria);
		
		this.dao.createVoto(voto);
		
		return voto;
	}
	//////////////////////////////////////////////////////////////////////////////////////////
}
