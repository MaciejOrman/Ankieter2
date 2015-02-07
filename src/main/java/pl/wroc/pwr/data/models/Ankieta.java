package pl.wroc.pwr.data.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import pl.wroc.pwr.data.models.enums.StatusAnkiety;

@Entity
public class Ankieta {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private Long id;
	private StatusAnkiety statusAnkiety;	
	@OneToMany
	private List<Pytanie> listaPytan;
	@ManyToOne
	private SzablonAnkiety szablonAnkiety;
	
	protected Ankieta(){}
	
	public Ankieta(StatusAnkiety status, List<Pytanie> pytania, SzablonAnkiety szablon){
		super();
		this.statusAnkiety = status;
		this.listaPytan = pytania;
		this.szablonAnkiety = szablon;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public StatusAnkiety getStatusAnkiety() {
		return statusAnkiety;
	}
	public void setStatusAnkiety(StatusAnkiety statusAnkiety) {
		this.statusAnkiety = statusAnkiety;
	}
	public List<Pytanie> getListaPytan() {
		return listaPytan;
	}
	public void setListaPytan(List<Pytanie> listaPytan) {
		this.listaPytan = listaPytan;
	}
	
	public SzablonAnkiety getSzablonAnkiety() {
		return szablonAnkiety;
	}

	public void setSzablonAnkiety(SzablonAnkiety szablonAnkiety) {
		this.szablonAnkiety = szablonAnkiety;
	}

}