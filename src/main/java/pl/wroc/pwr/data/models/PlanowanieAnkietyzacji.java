package pl.wroc.pwr.data.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class PlanowanieAnkietyzacji {
	@Id
	@GeneratedValue
	private Long id;
	@ManyToOne
	private Termin termin;
	@OneToMany
	private List<Ankieta> ankiety;
	@ManyToOne
	private Kurs kurs;
	
	protected PlanowanieAnkietyzacji(){}
	
	public PlanowanieAnkietyzacji(Termin termin, List<Ankieta> ankiety, Kurs kurs){
		this.termin = termin;
		this.ankiety = ankiety;
		this.kurs = kurs;
	}
	
	public Kurs getKurs() {
		return kurs;
	}
	public void setKurs(Kurs kurs) {
		this.kurs = kurs;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Termin getTermin() {
		return termin;
	}
	public void setTermin(Termin termin) {
		this.termin = termin;
	}
	public List<Ankieta> getAnkiety() {
		return ankiety;
	}
	public void setAnkiety(List<Ankieta> ankiety) {
		this.ankiety = ankiety;
	}
	
	

}