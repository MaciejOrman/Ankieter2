package pl.wroc.pwr.data.models;

import javax.persistence.Entity;

import pl.wroc.pwr.data.models.baseTypes.Osoba;

@Entity
public class Nauczyciel extends Osoba{
	private String tytul;
	
	public String getTytul() {
		return tytul;
	}
	public void setTytul(String tytul) {
		this.tytul = tytul;
	}

}