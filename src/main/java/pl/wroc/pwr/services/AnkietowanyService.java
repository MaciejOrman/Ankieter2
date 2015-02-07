package pl.wroc.pwr.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import pl.wroc.pwr.data.daos.AnkietowanyDAO;
import pl.wroc.pwr.data.models.Ankieta;
import pl.wroc.pwr.data.models.Pytanie;
import pl.wroc.pwr.data.models.SzablonAnkiety;
import pl.wroc.pwr.dtos.AnkietaDto;

public class AnkietowanyService {
	
	@Autowired
	AnkietowanyDAO ankietowany;

	public void wypelnijAnkiete(int idAnkiety) {
		// TODO - implement AnkietowanyController.wypelnijAnkiete
		throw new UnsupportedOperationException();
	}
	
	@RequestMapping(value="/ankietowany", method = RequestMethod.POST, consumes = {"application/json;charset=UTF-8"})
	@ResponseStatus(value = HttpStatus.CREATED)
	public List<Ankieta> pobierzAnkiety() {					// TODO uzupelnic o argument id usera i filtrowanie listy
		List<Ankieta> ankiety = ankietowany.findAll();
		System.out.println(ankiety.size());
		return ankiety;
	}

}
