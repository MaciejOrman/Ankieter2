package pl.wroc.pwr.dtos;

import pl.wroc.pwr.data.models.enums.RodzajPytania;

public class PytanieDto {
	
	private String tytul;
	private String tresc;
	private RodzajPytania rodzajPytania;
	private OdpowiedzDto odpowiedz;
	
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
	public OdpowiedzDto getOdpowiedz() {
		return odpowiedz;
	}
	public void setOdpowiedz(OdpowiedzDto odpowiedz) {
		this.odpowiedz = odpowiedz;
	}
	
}
