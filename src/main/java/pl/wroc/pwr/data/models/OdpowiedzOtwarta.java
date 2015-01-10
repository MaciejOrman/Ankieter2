package pl.wroc.pwr.data.models;

import javax.persistence.Entity;

import pl.wroc.pwr.data.models.baseTypes.Odpowiedz;

@Entity
public class OdpowiedzOtwarta extends Odpowiedz {

	private String trescOtwarta;
	private Double wyliczonaOcena;
	
	public String getTrescOtwarta() {
		return trescOtwarta;
	}
	public void setTrescOtwarta(String trescOtwarta) {
		this.trescOtwarta = trescOtwarta;
	}
	public Double getWyliczonaOcena() {
		return wyliczonaOcena;
	}
	public void setWyliczonaOcena(Double wyliczonaOcena) {
		this.wyliczonaOcena = wyliczonaOcena;
	}

}