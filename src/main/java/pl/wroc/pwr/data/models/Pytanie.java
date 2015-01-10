package pl.wroc.pwr.data.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import pl.wroc.pwr.data.models.baseTypes.Odpowiedz;
import pl.wroc.pwr.data.models.enums.RodzajPytania;

@Entity
public class Pytanie {
	@Id
	private Long id;
	private String tytul;
	private String tresc;
	private RodzajPytania rodzajPytania;
	@OneToOne
	private Odpowiedz odpowiedz;
	
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
	public String getTresc() {
		return tresc;
	}
	public void setTresc(String tresc) {
		this.tresc = tresc;
	}
	public RodzajPytania getRodzajPytania() {
		return rodzajPytania;
	}
	public void setRodzajPytania(RodzajPytania rodzajPytania) {
		this.rodzajPytania = rodzajPytania;
	}

	public Odpowiedz getOdpowiedz() {
		return odpowiedz;
	}
	public void setOdpowiedz(Odpowiedz odpowiedz) {
		this.odpowiedz = odpowiedz;
	}
	
	

}