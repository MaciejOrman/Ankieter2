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

import pl.wroc.pwr.data.daos.PytanieDAO;
import pl.wroc.pwr.data.daos.SzablonAnkietyDAO;
import pl.wroc.pwr.data.models.Pytanie;
import pl.wroc.pwr.data.models.SzablonAnkiety;
import pl.wroc.pwr.dtos.PytanieDto;
import pl.wroc.pwr.dtos.SzablonAnkietyDto;

@RestController
public class SzablonAnkietyService {

	@Autowired
	SzablonAnkietyDAO szablonAnkietyDAO;
	
	@Autowired
	PytanieDAO pytanieDAO;
	
	
	public void defAnkietyClick() {
		// TODO - implement SzablonAnkietyController.defAnkietyClick
		throw new UnsupportedOperationException();
	}

	@RequestMapping(value="/zapiszAnkiete", method = RequestMethod.POST, consumes = {"application/json;charset=UTF-8"})
	@ResponseStatus(value = HttpStatus.CREATED)
	public void zapiszAnkiete(@RequestBody SzablonAnkietyDto szablonAnkietyDto) {
		System.out.println(szablonAnkietyDto);
		List<Pytanie> pytania = new ArrayList<Pytanie>();
		Pytanie pytanie;
		for(PytanieDto pytanieDto: szablonAnkietyDto.getPytania()){
			pytanie = new Pytanie();
			pytanie.setTytul(pytanieDto.getTytul());
			pytanie.setTresc(pytanieDto.getTresc());
			pytanie.setRodzajPytania(pytanieDto.getRodzajPytania());
			pytania.add(pytanie);
		}
		pytanieDAO.save(pytania);
		SzablonAnkiety szablonAnkiety = new SzablonAnkiety(szablonAnkietyDto.getNazwa_szablonu(),  pytania);
		szablonAnkietyDAO.save(szablonAnkiety);
	}
}
