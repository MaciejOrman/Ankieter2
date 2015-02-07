package pl.wroc.pwr.data.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Termin {
	@Id
	@GeneratedValue
	private Long id;
	private String od;
	private String koniec;
	
	protected Termin(){}
	
	public Termin(String od, String koniec){
		this.setOd(od);
		this.setKoniec(koniec);
	}
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}

	public String getOd() {
		return od;
	}

	public void setOd(String od) {
		this.od = od;
	}

	public String getKoniec() {
		return koniec;
	}

	public void setKoniec(String koniec) {
		this.koniec = koniec;
	}


	
	

}