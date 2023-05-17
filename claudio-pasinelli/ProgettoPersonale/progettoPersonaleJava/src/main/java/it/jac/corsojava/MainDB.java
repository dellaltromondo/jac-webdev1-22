package it.jac.corsojava;

import java.util.Scanner;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import it.jac.corsojava.service.UserService;

public class MainDB
{
	private static Logger log = LogManager.getLogger(MainDB.class);
	
	public static void main(String[] args)
	{
		log.info("Applicazione iniziata");
		
		System.out.println("*** NOLEGGIO FILM/GIOCHI ***\n");
		
		Scanner scanner = new Scanner(System.in);
		UserService userSrv = UserService.getInstance();

		boolean termina = false;
		
		do
		{
			System.out.println("1) Crea profilo compositore");
			System.out.println("2) Noleggia Gioco");
			System.out.println("3) Elenco completo");
			System.out.println("0) Esci");
			System.out.print("\nScegli funzione: ");
			String scelta = scanner.nextLine();
			
			switch (scelta)
			{
				case "1":
				{
					creaProfiloCompositore(scanner, userSrv);
					break;
				}
				
				case "2":
				{
//					noleggiaGioco(scanner, service);
					break;
				}
				
				case "3":
				{
//					elencoCompleto(scanner, service);
					break;
				}
				
				case "0":
				{
					System.out.println("Programma termina");
					termina= true;
					break;
				}
				
				default:
				{
					System.out.println("Scelta non valida");
				}
			}
			
		} while (!termina);

		log.info("Applicazione terminata");
	}
	
	private static void creaProfiloCompositore(Scanner scanner, UserService userSrv)
	{
		String email, nome, cognome, password, tipoScelta, tipo = "";		
		System.out.print("\nInserisci la tua email: ");
		email = scanner.nextLine();
		
		System.out.print("Inserisci il tuo nome: ");
		nome = scanner.nextLine();
		
		System.out.print("Inserisci il tuo cognome: ");
		cognome = scanner.nextLine();
		
		System.out.print("Inserisci la tua password: ");
		password = scanner.nextLine();
		
		System.out.print("\nIndica che tipo di utente sei\n");
		System.out.print("--> 1) Non compositore\n");
		System.out.print("--> 2) Compositore\n\nScelta (1 o 2): ");
		tipoScelta = scanner.nextLine();
		
		if(tipoScelta.equalsIgnoreCase("1"))
		{
			tipo = "NON_COMPOSITORE";
		}
		
		else if(tipoScelta.equalsIgnoreCase("2"))
		{
			tipo = "COMPOSITORE";
		}
		
		userSrv.create(email, nome, cognome, password, tipo);
	}
}
