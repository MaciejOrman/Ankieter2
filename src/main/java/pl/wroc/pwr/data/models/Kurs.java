package pl.wroc.pwr.data.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Kurs {
	@Id
	@GeneratedValue
	private Long id;
	private String nazwa;
	private String kod;
	@ManyToOne
	private SzablonAnkiety szablonAnkiety;
	
	protected Kurs(){}
	
	public Kurs(String nazwa, String kod){
		this.nazwa = nazwa;
		this.kod = kod;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNazwa() {
		return nazwa;
	}
	public void setNazwa(String nazwa) {
		this.nazwa = nazwa;
	}
	public String getKod() {
		return kod;
	}
	public void setKod(String kod) {
		this.kod = kod;
	}
	public SzablonAnkiety getSzablonAnkiety() {
		return szablonAnkiety;
	}
	public void setSzablonAnkiety(SzablonAnkiety szablonAnkiety) {
		this.szablonAnkiety = szablonAnkiety;
	}
	
	

}