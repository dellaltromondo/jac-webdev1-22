package it.jac.corsojava;

import java.time.LocalDateTime;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import it.jac.corsojava.service.CompositoreService;
import it.jac.corsojava.service.UserService;

public class MainDB
{
	private static Logger log = LogManager.getLogger(MainDB.class);
	
	public static void main(String[] args) {

		log.info("Applicazione iniziata");
		LocalDateTime ora = LocalDateTime.now();
		
//		UserService.getInstance().create("claudiopasinelli@gmail.com", "Claudio", "Pasinelli", "Eremita10@", "non compositore");
//		CompositoreService.getInstance().create(2, "Guera02", "sono un tipo bello", "asd");
//		CompositoreService.getInstance().create(3, "gibsso220", "sono un tipo bello e baciato dal sole", "piedi!");
		
		log.info("Applicazione terminata");
	}
}
