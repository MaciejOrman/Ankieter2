package pl.wroc.pwr.data.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class SzablonAnkiety {
	@Id
	private Long id;
	private String tytul;
	@OneToMany
	private List<Ankieta> ankiety;
	@OneToMany
	private List<Pytanie> pytania;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTytul() {
		return tytul;
	}
	public void setTytul(String tytul) {
		this.tytul = tytul;
	}
	public List<Ankieta> getAnkiety() {
		return ankiety;
	}
	public void setAnkiety(List<Ankieta> ankiety) {
		this.ankiety = ankiety;
	}
	public List<Pytanie> getPytania() {
		return pytania;
	}
	public void setPytania(List<Pytanie> pytania) {
		this.pytania = pytania;
	}
	
	

}