package it.armando.console;

public class ConsolePrinter {

	// Reset
    public static final String RESET = "\033[0m";  // Text Reset
    public static final String RED = "\033[0;31m";     // RED
    public static final String GREEN = "\033[0;32m";   // GREEN
    public static final String BLACK = "\033[0;30m";   // BLACK
    public static final String BLUE = "\033[0;34m";    // BLUE

    public static void printlnColored(String color, String message) {
    	System.out.println(color + message + RESET);
    }
    
    public static void printRed(String message) {    	
    	System.out.print(RED + message + RESET);
    }

    public static void printlnRed(String message) {    	
    	System.out.println(RED + message + RESET);
    }
    
    public static void printGreen(String message) {    	
    	System.out.print(GREEN + message + RESET);
    }

    public static void printlnGreen(String message) {    	
    	System.out.println(GREEN + message + RESET);
    }

    public static void printNormal(String message){
    	System.out.print(message);
    }

    public static void printlnNormal(String message){
    	System.out.println(message);
    }
    
}
