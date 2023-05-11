package it.jac.corsojava.provider;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.ext.Provider;

@Provider
public class RequestFilter implements ContainerRequestFilter {

	private static Logger log = LogManager.getLogger(RequestFilter.class);	
	
	@Override
	public void filter(ContainerRequestContext requestContext) throws IOException {

		log.info("REQUEST METHOD {}", requestContext.getMethod());
		log.info("REQUEST PATH {}", requestContext.getUriInfo().getAbsolutePath());
		log.info("REQUEST HEADER {}", requestContext.getHeaders());
	}

	
}