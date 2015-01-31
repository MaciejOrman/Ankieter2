package pl.wroc.pwr.dtos;

import java.util.List;

import pl.wroc.pwr.data.models.Ankieta;
import pl.wroc.pwr.data.models.Pytanie;

public class SzablonAnkietyDto {

	private String nazwa_szablonu;
	private List<PytanieDto> pytania;
	
	
	public String getNazwa_szablonu() {
		return nazwa_szablonu;
	}
	public void setNazwa_szablonu(String nazwa_szablonu) {
		this.nazwa_szablonu = nazwa_szablonu;
	}
	public List<PytanieDto> getPytania() {
		return pytania;
	}
	public void setPytania(List<PytanieDto> pytania) {
		this.pytania = pytania;
	}
	@Override
	public String toString() {
		return "SzablonAnkietyDto [nazwa_szablonu=" + nazwa_szablonu
				+ ", pytania=" + pytania.toString() + "]";
	}
	
	
}
