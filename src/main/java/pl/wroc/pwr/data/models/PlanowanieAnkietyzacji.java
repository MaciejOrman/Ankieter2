package pl.wroc.pwr.data.models;

import java.util.List;

import javax.persistence.CascadeType;
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
	@ManyToOne(cascade=CascadeType.ALL)
	private Termin termin;
	@ManyToOne(cascade=CascadeType.ALL)
	private SzablonAnkiety szablonAnkiety;
	@ManyToOne(cascade=CascadeType.ALL)
	private Kurs kurs;
	
	protected PlanowanieAnkietyzacji(){}
	
	public PlanowanieAnkietyzacji(Termin termin, SzablonAnkiety szablonAnkiety, Kurs kurs){
		this.termin = termin;
		this.szablonAnkiety = szablonAnkiety;
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
	public SzablonAnkiety getSzablonAnkiety() {
		return szablonAnkiety;
	}

	public void setSzablonAnkiety(SzablonAnkiety szablonAnkiety) {
		this.szablonAnkiety = szablonAnkiety;
	}

	
	

}