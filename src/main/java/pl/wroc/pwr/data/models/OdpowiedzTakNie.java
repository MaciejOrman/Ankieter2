package pl.wroc.pwr.data.models;

import javax.persistence.Entity;

import pl.wroc.pwr.data.models.baseTypes.Odpowiedz;

@Entity
public class OdpowiedzTakNie extends Odpowiedz {

	private boolean trescTakNie;

	public boolean isTrescTakNie() {
		return trescTakNie;
	}

	public void setTrescTakNie(boolean trescTakNie) {
		this.trescTakNie = trescTakNie;
	}
	
	

}