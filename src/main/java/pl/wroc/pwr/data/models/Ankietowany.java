package pl.wroc.pwr.data.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import pl.wroc.pwr.data.models.baseTypes.Osoba;

@Entity
public class Ankietowany extends Osoba {

	private Long numerIndeksu;
	private String adresMailowy;
	@ManyToMany
	private List<Kurs> kursy;
	@OneToMany
	private List<Ankieta> ankiety;
	
	protected Ankietowany(){}


	public Long getNumerIndeksu() {
		return numerIndeksu;
	}

	public void setNumerIndeksu(Long numerIndeksu) {
		this.numerIndeksu = numerIndeksu;
	}

	public String getAdresMailowy() {
		return adresMailowy;
	}

	public void setAdresMailowy(String adresMailowy) {
		this.adresMailowy = adresMailowy;
	}

	public List<Kurs> getKursy() {
		return kursy;
	}

	public void setKursy(List<Kurs> kursy) {
		this.kursy = kursy;
	}

	
}