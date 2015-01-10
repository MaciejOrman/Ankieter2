package pl.wroc.pwr.data.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class SzablonAnkiety {
	@GeneratedValue
	@Id
	private Long id;
	private String tytul;

	@OneToMany(fetch=FetchType.EAGER)
	private List<Pytanie> pytania;
	
	protected SzablonAnkiety(){}
	
	public SzablonAnkiety(String tytul, List<Pytanie> pytania) {
		super();
		this.tytul = tytul;
		this.pytania = pytania;
	}

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

	public List<Pytanie> getPytania() {
		return pytania;
	}
	public void setPytania(List<Pytanie> pytania) {
		this.pytania = pytania;
	}
	
	

}