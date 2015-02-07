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
	private String prowadzacy;
	@ManyToOne
	private SzablonAnkiety szablonAnkiety;
	
	protected Kurs(){}
	
	public Kurs(String nazwa, String kod, String prowadzacy){
		this.nazwa = nazwa;
		this.kod = kod;
		this.prowadzacy = prowadzacy;
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

	public String getProwadzacy() {
		return prowadzacy;
	}

	public void setProwadzacy(String prowadzacy) {
		this.prowadzacy = prowadzacy;
	}
	
	

}