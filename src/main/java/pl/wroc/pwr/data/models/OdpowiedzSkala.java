package pl.wroc.pwr.data.models;

import javax.persistence.Entity;

import pl.wroc.pwr.data.models.baseTypes.Odpowiedz;

@Entity
public class OdpowiedzSkala extends Odpowiedz {

	private Integer trescSkala;

	public Integer getTrescSkala() {
		return trescSkala;
	}

	public void setTrescSkala(Integer trescSkala) {
		this.trescSkala = trescSkala;
	}
	
	

}