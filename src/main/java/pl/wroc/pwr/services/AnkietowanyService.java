package pl.wroc.pwr.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import pl.wroc.pwr.data.daos.AnkietaDAO;
import pl.wroc.pwr.data.daos.AnkietowanyDAO;
import pl.wroc.pwr.data.daos.KursDAO;
import pl.wroc.pwr.data.daos.PlanowanieAnkietyzacjiDAO;
import pl.wroc.pwr.data.daos.SzablonAnkietyDAO;
import pl.wroc.pwr.data.daos.TerminDAO;
import pl.wroc.pwr.data.models.Ankieta;
import pl.wroc.pwr.data.models.Ankietowany;
import pl.wroc.pwr.data.models.Kurs;
import pl.wroc.pwr.data.models.PlanowanieAnkietyzacji;
import pl.wroc.pwr.data.models.Pytanie;
import pl.wroc.pwr.data.models.SzablonAnkiety;
import pl.wroc.pwr.data.models.Termin;

@RestController
public class AnkietowanyService {
	
	@Autowired
	AnkietowanyDAO ankietowanyDAO;

	@Autowired
	PlanowanieAnkietyzacjiDAO planowanieAnkietyzacjiDAO;

	/* do testow */
	@Autowired
	TerminDAO terminDAO;
	@Autowired
	KursDAO kursDAO;
	/* koniec */

	public void wypelnijAnkiete(int idAnkiety) {
		// TODO - implement AnkietowanyController.wypelnijAnkiete
		throw new UnsupportedOperationException();
	}
	
	@RequestMapping(value="/pobierzPlanyAnkietyzacji", method = RequestMethod.POST, consumes = {"application/json;charset=UTF-8"})
	@ResponseStatus(value = HttpStatus.OK)
	public List<PlanowanieAnkietyzacji> pobierzPlanyAnkietyzacji(@RequestBody String id) {
		/* do testow */
		Termin term = new Termin(new Date(), new Date());
		terminDAO.save(term);
		List<Ankieta> ankiety = new LinkedList<Ankieta>();
		Kurs kurs = new Kurs("nazwa", "kod");
		kursDAO.save(kurs);
		PlanowanieAnkietyzacji plan = new PlanowanieAnkietyzacji(term, ankiety, kurs);
		planowanieAnkietyzacjiDAO.save(plan);
		/* koniec */
		Ankietowany a = ankietowanyDAO.findOne(Long.parseLong(id));
		List<PlanowanieAnkietyzacji> planyDlaAnkietowanego = new LinkedList<PlanowanieAnkietyzacji>();
		List<PlanowanieAnkietyzacji> wszystkiePlany = planowanieAnkietyzacjiDAO.findAll();
//		for(PlanowanieAnkietyzacji p : wszystkiePlany){
//			if(a.getKursy().contains(p.getKurs())){
//				planyDlaAnkietowanego.add(p);
//			}
//		}
//		return planyDlaAnkietowanego;
		return wszystkiePlany;			//tylko do testow
	}
}