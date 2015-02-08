package pl.wroc.pwr.services;

import java.util.LinkedList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import pl.wroc.pwr.data.models.Ankietowany;
import pl.wroc.pwr.data.models.Konto;
import pl.wroc.pwr.data.models.PlanowanieAnkietyzacji;

@RestController
public class AuthService {

	@RequestMapping(value="/logowanie", method = RequestMethod.POST, consumes = {"application/json;charset=UTF-8"})
	@ResponseStatus(value = HttpStatus.OK)
	public String zaloguj(@RequestBody Konto konto ) {
	
		if(konto.getLogin().equals("audytor") && konto.getHaslo().equals("audytor")){
			return "audytor";
		}
		if(konto.getLogin().equals("ankietowany") && konto.getHaslo().equals("ankietowany")){
			return "ankietowany";
		}
		return "";
	}
}
